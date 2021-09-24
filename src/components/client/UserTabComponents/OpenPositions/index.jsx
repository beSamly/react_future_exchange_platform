import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomerTable from '../../../common/CustomerTable';
import { UPDATE_ORDER_TAB } from '../../../../states/reducers/orderReducer';
import LogInRequired from '../../../common/LogInRequired';
import useUpdateData from './useUpdateData';
import {
    SZ_CUR_NO_INDEX_IN_OPEN_POSITIONS,
    SZ_SIDE_INDEX_IN_OPEN_POSITIONS,
    SZ_RATE_INDEX_IN_OPEN_POSITIONS,
    F_LOT_INDEX_IN_OPEN_POSITIONS,
    STOP_PRC_INDEX_IN_OPEN_POSITIONS,
    LIMIT_PRC_INDEX_IN_OPEN_POSITIONS,
    SZ_CUST_ITEM_INDEX_IN_OPEN_POSITIONS,
    SZ_STOP_ITEM_INDEX_IN_OPEN_POSITIONS,
    SZ_LIMIT_ITEM_INDEX_IN_OPEN_POSITIONS,
} from './openPositionsIndices';
import { style, mobileStyle } from '../common/tableStyle';
import DEVICE_SIZE from '../../../../constants/DeviceSize';
import useScreenSize from '../../../../hooks/useScreenSize';

export default function Index(props) {
    const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
    const { isMobile } = useScreenSize();

    const { isSuccess, data, dataColumn, originalData, originalDataColumn } = useUpdateData();

    const dispatch = useDispatch();

    const handleClickForStopLimitMarket = useCallback(
        (d, stopOrLimitOrMarket) => (e) => {
            var input = {
                index: 1, // userReducer의 index 1로 바꾸기 : 1===stop/limit tab
                stopOrLimitOrMarket,
                data: {
                    szCurNo: d[SZ_CUR_NO_INDEX_IN_OPEN_POSITIONS], // 종목명
                    szDealDiv: d[SZ_SIDE_INDEX_IN_OPEN_POSITIONS], // 매매구분
                    szRate: d[SZ_RATE_INDEX_IN_OPEN_POSITIONS], // 주문가
                    fLot: d[F_LOT_INDEX_IN_OPEN_POSITIONS], // 수량
                    szCustItem: d[SZ_CUST_ITEM_INDEX_IN_OPEN_POSITIONS], // 회원처리목록
                },
            };
            dispatch(UPDATE_ORDER_TAB(input));
        },
        [],
    );

    const handleClickForStopAndLimitModifyCancel = useCallback(
        (d, stopOrLimit) => (e) => {
            var input = {
                index: 2, // userReducer의 index 2로 바꾸기 : 2===modify/cancel tab
                triggeredBy: 'open-positions',
                stopOrLimit,
                data: {
                    szCurNo: d[SZ_CUR_NO_INDEX_IN_OPEN_POSITIONS], // 종목명
                    szDealDiv: d[SZ_SIDE_INDEX_IN_OPEN_POSITIONS], // 매매구분
                    szRate: d[SZ_RATE_INDEX_IN_OPEN_POSITIONS], // 주문가
                    fLot: d[F_LOT_INDEX_IN_OPEN_POSITIONS], // 수량
                    szCustItem: d[SZ_CUST_ITEM_INDEX_IN_OPEN_POSITIONS], // 회원처리목록
                    stopOrLimitPrice:
                        stopOrLimit === 'stop'
                            ? d[STOP_PRC_INDEX_IN_OPEN_POSITIONS]
                            : d[LIMIT_PRC_INDEX_IN_OPEN_POSITIONS],
                    szSLCustItem:
                        stopOrLimit === 'stop'
                            ? d[SZ_STOP_ITEM_INDEX_IN_OPEN_POSITIONS]
                            : d[SZ_LIMIT_ITEM_INDEX_IN_OPEN_POSITIONS], //stop or limit 회원처리항목
                },
            };
            dispatch(UPDATE_ORDER_TAB(input));
        },
        [],
    );

    const clickEventForOpenPositions = useMemo(
        () => ({
            handleClickForStopLimitMarket,
            handleClickForStopAndLimitModifyCancel,
        }),
        [],
    );

    const openPositionsProps = {
        isSuccess,
        data,
        dataColumn,
        originalData,
        originalDataColumn,
        clickEventForOpenPositions,
        tableFor: 'open-positions',
    };

    console.log('index component renreder');

    const styleProps = !isMobile ? style : mobileStyle;
    const logInRequiredProps = {
        width: isMobile ? '100%' : undefined,
        height: isMobile ? '200px' : undefined,
    };

    return isLoggedIn ? (
        <CustomerTable {...openPositionsProps} {...styleProps} {...props} />
    ) : (
        <LogInRequired {...logInRequiredProps} />
    );
}

// Optimization testing purpose ...
// const TestCopmonent = React.memo((props) => {
//   console.log("test component renreder");
//   return <div>testing..</div>;
// });
