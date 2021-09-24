import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_ORDER_TAB } from '../../../../states/reducers/orderReducer';
import CustomerTable from '../../../common/CustomerTable';
import LogInRequired from '../../../common/LogInRequired';
import useUpdateData from './useUpdateData';
import { style, mobileStyle } from '../common/tableStyle';
import DEVICE_SIZE from '../../../../constants/DeviceSize';
import CustomerTableForMobile from '../../../common/CustomerTable_m';
import useScreenSize from '../../../../hooks/useScreenSize';

const Index = () => {
    const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
    const { data, originalData, isSuccess, dataColumn } = useUpdateData();
    const dispatch = useDispatch();
    const { isMobile } = useScreenSize();

    const handleClickForOpenOrders = useCallback(
        (d, dealDiv) => (e) => {
            //Open position  => stop/limit index 1
            var input = {
                // idnex 2 === Modify/Cancel order tab
                index: 2,
                triggeredBy: 'open-orders',
                data: {
                    // 매매구분 : modify/cancel은 지정사 매수/매도 주문 취소와 청산limit 매수/매도 주문으로 나눠져있기때문.
                    szDealDiv: dealDiv,
                    // 회원처리항목
                    szCustItem: d[0],
                    // 종목코드
                    szCurNo: d[1],
                    // 주문가격
                    szRate: d[3],
                    // 주문수량
                    fLot: d[4],
                },
            };
            dispatch(UPDATE_ORDER_TAB(input));
        },
        [],
    );

    const openOrdersProps = {
        isSuccess,
        data,
        originalData,
        dataColumn,
        handleClickForOpenOrders,
        tableFor: 'open-orders',
    };

    const switchCase = () => {
        switch (isMobile) {
            case true:
                return isLoggedIn ? (
                    <CustomerTableForMobile {...openOrdersProps} {...mobileStyle} />
                ) : (
                    <LogInRequired width="100%" height="200px" />
                );
            default:
                return isLoggedIn ? <CustomerTable {...openOrdersProps} {...style} /> : <LogInRequired />;
        }
    };

    return switchCase();
};

export default Index;
