import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useAgentToSend from '../../../../hooks/useAgentToSend';
import * as TRANSLATOR from '../../../../Translator/OrderTab';
import * as CONST from '../../../../constants/OrderTab';
import { buildInputForNewOrder } from '../common/InputBuilder';
import ButtonInput from '../../../common/ButtonInput';
import { consoleLogWithColor } from '../common/consoleWithColor';
import formatNumber from '../../../../lib/formatNumber';
import { useTypedSelector } from '../../../../states/useTypedSelector';
import { TransactionInputType } from '../../../../types';
import useUsersData from '../../../../hooks/useUserData';
import useScreenSize from '../../../../hooks/useScreenSize';

const borderBottomStyle: React.CSSProperties = {
    borderBottom: '1px solid #dfdfdf',
};

const fontBold: React.CSSProperties = {
    fontWeight: 'bold',
};

const paddingRightSix: React.CSSProperties = {
    paddingRight: '6px',
};
const paddingRightEight: React.CSSProperties = {
    paddingRight: '8px',
};

const colorGrey: React.CSSProperties = {
    color: '#E56060',
};

type NewOrderInputType = {
    szAccNo: string | undefined;
    szPasswd: string | undefined;
    szCurNo: string | undefined;
    fOrderSu: number | undefined;
    fOrderPrice: number | undefined;
    szOrdType: 'UOM' | 'UOE' | undefined;
    szDealDiv: '079' | '081' | undefined;
};

const NewOrderForm = ({ language }) => {
    const [inputRef, setInputRef] = useState<NewOrderInputType>({
        szAccNo: undefined,
        szPasswd: undefined,
        szCurNo: undefined,
        fOrderSu: 0,
        fOrderPrice: 0,
        szOrdType: 'UOE',
        szDealDiv: undefined,
    });

    const { result, sendTransaction } = useAgentToSend();
    const [priceError, setPriceError] = useState<string>('');
    const [sumError, setSumError] = useState<string>('');
    const [orderTypeError, setOrderTypeError] = useState<string>('');
    const [resultMsg, setResultMsg] = useState<string>('');

    const orderReducerData = useTypedSelector((state) => state.orderReducer.data);
    const { szDealDiv, szRate, fLot } = orderReducerData;
    // const triggeredByOrderBook = szDealDiv && szRate && fLot;

    const currentSymbol = useTypedSelector((state) => state.symbolReducer.currentSymbol);
    // const { szAccNo, szPasswd, email, jwt } = useTypedSelector((state) => state.userReducer.data);
    const { isMobile } = useScreenSize();
    const { szAccNo, szPasswd, email, jwt } = useUsersData();
    const isActive = szAccNo ? true : false;

    /*=======================================
    | 호가창에서 가격이 선택될대              |
    | orderReducer로 부터                    |
    | fLot(수량), szRate(가격) 을 받아와서    |
    | inputRef를 업데이트                    |
    ========================================*/
    useEffect(() => {
        setInputRef({
            ...inputRef,
            fOrderSu: fLot,
            fOrderPrice: szRate,
            szOrdType: 'UOE',
        });
    }, [szDealDiv, szRate, fLot]);

    useEffect(() => {
        if (result?.Message?.data) {
            setResultMsg(result.Message.data);
            // setInputRef({ ...inputRef, fOrderPrice: 0, fOrderSu: 1 });
        }
    }, [result?.Message?.data]);

    const handleValidation = () => {
        let isValid = true;

        if (!isActive) {
            setResultMsg(TRANSLATOR.PLEASE_LOG_IN(language));
            return false;
        }

        if (inputRef.fOrderPrice === undefined || Number(inputRef.fOrderPrice) <= 0 || isNaN(inputRef.fOrderPrice)) {
            setPriceError(TRANSLATOR.PRICE_ERROR(language));
            isValid = false;
        }
        if (inputRef.fOrderSu === undefined || Number(inputRef.fOrderSu) <= 0 || isNaN(inputRef.fOrderSu)) {
            setSumError(TRANSLATOR.AMOUNT_ERROR(language));
            isValid = false;
        }
        if (inputRef.szOrdType === undefined || (inputRef.szOrdType !== 'UOE' && inputRef.szOrdType !== 'UOM')) {
            setOrderTypeError(TRANSLATOR.ORDER_TYPE_ERROR(language));
            isValid = false;
        }
        return isValid;
    };

    const handleSubmit = (option) => (e) => {
        inputRef.szDealDiv = option;
        inputRef.szCurNo = currentSymbol;
        inputRef.szAccNo = szAccNo;
        inputRef.szPasswd = szPasswd;

        if (handleValidation()) {
            const inputToSend = buildInputForNewOrder({ ...inputRef, email, jwt });
            sendTransaction(inputToSend as TransactionInputType);
            consoleLogWithColor(
                `유저가 ${option === '079' ? '매수' : '매도'}주문을 클릭했습니다 Input은 `,
                inputToSend,
            );
        }
    };

    const handleClick = (e) => {
        setOrderTypeError('');
        setResultMsg('');
        setInputRef({
            ...inputRef,
            szOrdType: e.target.value,
        });
    };

    const resetErrorMsg = (target) => {
        target === CONST.TARGET_PRICE ? setPriceError('') : setSumError('');
    };

    const handleChange = (target, value) => {
        resetErrorMsg(target);
        setResultMsg('');
        setInputRef({
            ...inputRef,
            [target]: value,
        });
    };

    const getTextForOrderValue = ({ isForMargin = false }) => {
        if (inputRef.fOrderSu === undefined || inputRef.fOrderPrice === undefined) return 0;

        return !isNaN(inputRef.fOrderSu * inputRef.fOrderPrice)
            ? formatNumber(inputRef.fOrderSu * inputRef.fOrderPrice * (isForMargin ? 1 : 0.1))
            : 0;
    };

    if (result?.Message?.data) {
        console.log('result in new-order form  : ', result);
    }

    return (
        <NewOrderWrapper isMobile={isMobile}>
            <Grid container justify="space-between" style={{ ...borderBottomStyle }}>
                <div style={{ ...fontBold, fontSize: 16 }}>{currentSymbol}</div>
                <Flex>
                    <div style={{ ...paddingRightEight }}>Leverage</div>
                    <div style={{ ...colorGrey }}>x 10</div>
                </Flex>
            </Grid>

            <Grid style={{ position: 'relative' }}>
                <RadioGroup onChange={handleClick}>
                    <Grid container>
                        <StFormControlLabel
                            value={CONST.UOM}
                            control={<Radio />}
                            label={TRANSLATOR.MARKET_ORDER(language)}
                            checked={inputRef.szOrdType === CONST.UOM ? true : false}
                        />
                        <StFormControlLabel
                            value={CONST.UOE}
                            checked={inputRef.szOrdType === CONST.UOE ? true : false}
                            control={<Radio />}
                            label={TRANSLATOR.LIMIT_ORDER(language)}
                        />
                    </Grid>
                    <ErrorMsg>{orderTypeError && orderTypeError}</ErrorMsg>
                </RadioGroup>
            </Grid>
            <Grid container style={{ position: 'relative' }}>
                <Grid container alignItems="center" justify="space-between">
                    <div>{TRANSLATOR.PRICE(language)}</div>
                    <ButtonInput
                        target={CONST.TARGET_PRICE}
                        handleChange={handleChange}
                        initialValue={inputRef[CONST.TARGET_PRICE]}
                    />
                </Grid>
                <ErrorMsg>{priceError && priceError}</ErrorMsg>
                <Grid
                    container
                    justify="flex-end"
                    style={{ padding: 0, position: 'absolute', top: '80%', right: '6%' }}
                >
                    <div style={{ ...paddingRightSix }}>{formatNumber(inputRef[CONST.TARGET_PRICE])}</div>
                    <div>USDT</div>
                </Grid>
            </Grid>

            <Grid
                container
                direction="column"
                style={{
                    position: 'relative',
                    ...borderBottomStyle,
                    padding: '14px 0 25px 0',
                }}
            >
                <Grid container alignItems="center" justify="space-between">
                    <div> {TRANSLATOR.AMOUNT(language)}</div>
                    <ButtonInput
                        target={CONST.TARGET_AMOUNT}
                        handleChange={handleChange}
                        initialValue={inputRef[CONST.TARGET_AMOUNT]}
                    />
                </Grid>
                <ErrorMsg>{sumError && sumError}</ErrorMsg>
            </Grid>
            <Grid container justify="space-between">
                <div>{TRANSLATOR.ORDER_VALUE(language)}</div>
                <Flex>
                    <div style={{ ...paddingRightSix, ...fontBold }}>
                        {getTextForOrderValue({ isForMargin: false })}
                    </div>
                    <div>USDT</div>
                </Flex>
            </Grid>
            <Grid container justify="space-between">
                <div>{TRANSLATOR.AVAILABLE_MARGIN(language)}</div>
                <Flex>
                    <div style={{ ...paddingRightSix, ...fontBold }}>{getTextForOrderValue({ isForMargin: true })}</div>
                    <div>USDT</div>
                </Flex>
            </Grid>

            <div style={{ height: 15, position: 'relative', padding: 0 }}>
                <ResultMsg>{resultMsg}</ResultMsg>
            </div>

            <Grid container justify="space-between">
                <BuyButton variant="contained" onClick={handleSubmit('079')}>
                    {TRANSLATOR.BUY(language)}
                </BuyButton>
                <SellButton variant="outlined" onClick={handleSubmit('081')}>
                    {TRANSLATOR.SELL(language)}
                </SellButton>
            </Grid>
        </NewOrderWrapper>
    );
};

export default React.memo(NewOrderForm);

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const NewOrderWrapper = styled.div<{ isMobile: boolean }>`
    font-size: ${({ theme }) => theme.fontSizes.content};
    height: ${({ theme, isMobile }) => (isMobile ? 'auto' : theme.orderTabMenu.height)};
    padding: 20px 20px 10px 20px;
    padding: ${({ theme }) => theme.orderTabMenu.containerPadding};

    & > div {
        padding: ${({ theme, isMobile }) => (isMobile ? '6px 0' : theme.orderTabMenu.divPadding)};
    }
`;

const StFormControlLabel = styled(FormControlLabel)`
    color: #000000 !important;
    span {
        font-size: 14px !important;
    }

    span:first-child {
        color: #5461bd !important;
    }
`;

const BaseButton = styled(Button)`
    /* width: 43%; */
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.content} !important;
    border-radius: 2px !important;
    font-weight: 700 !important;
    width: 47%;
    /* width: 185px; */
    text-align: center;
`;
const BuyButton = styled(BaseButton)`
    background-color: #b63d4d !important;
    color: white !important;
    text-transform: none;
    &:hover {
        background-color: #9e2d3c !important;
    }
`;
const SellButton = styled(BaseButton)`
    background-color: #5461bd !important;
    color: white !important;
    text-transform: none;

    &:hover {
        background-color: #3f4ca8 !important;
    }
`;

const ErrorMsg = styled.span`
    position: absolute;
    top: 55px;
    color: red;
    font-size: ${({ theme }) => theme.fontSizes.orderTabMessage};
`;

const ResultMsg = styled.div`
    position: absolute;
    color: #3883e6;
    font-size: ${({ theme }) => theme.fontSizes.orderTabMessage};
`;
