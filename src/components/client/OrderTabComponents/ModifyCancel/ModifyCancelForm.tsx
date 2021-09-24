import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useAgentToSend from '../../../../hooks/useAgentToSend';
import { buildInputForModifyCancelEntry, buildInputForModifyCancelStopLimit } from '../common/InputBuilder';
import * as TRANSLATOR from '../../../../Translator/OrderTab';
import * as CONST from '../../../../constants/OrderTab';
import ButtonInput from '../../../common/ButtonInput';
import { consoleLogWithColor, consoleWarnWithColor } from '../common/consoleWithColor';
import formatNumber from '../../../../lib/formatNumber';
import { useTypedSelector } from '../../../../states/useTypedSelector';
import { TransactionInputType } from '../../../../types';

const borderBottomStyle = {
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

const MODIFY_CANCEL_FORM_INDEX = 2;
const ModifyCancelForm = ({ language }) => {
    const orderReducerState = useTypedSelector((state) => state.orderReducer);
    const { szAccNo, szPasswd, email, jwt } = useTypedSelector((state) => state.userReducer.data);

    const { result, sendTransaction } = useAgentToSend();

    // Input value needed for submission
    //szAccNo
    //szPasswd
    //szCurNo
    //fOrderSu <=fLot
    //fOrderPrice <= szRate
    //szDealDiv <= szSide
    //szSLCustItem <= szCustItem
    const { triggeredBy, stopOrLimit, data, index } = orderReducerState;
    const { szRate, fLot, szCurNo, szDealDiv, szCustItem, szSLCustItem, stopOrLimitPrice } = data;

    // const { triggeredBy } = data;
    const [inputRef, setInputRef] = useState({
        fOrderPrice: 0,
        fOrderSu: 0,
        stopOrLimitPrice: 0,
    });
    const [resultMsg, setResultMsg] = useState<string>('');
    const [sumError, setSumError] = useState<string>('');
    const [entryPriceError, setEntryPriceError] = useState<string>('');
    const [stopPriceError, setStopPriceError] = useState<string>('');
    const [limitPriceError, setLimitPriceError] = useState<string>('');

    const isActive =
        szRate !== undefined &&
        fLot !== undefined &&
        szCurNo !== undefined &&
        szDealDiv !== undefined &&
        szCustItem !== undefined &&
        szAccNo !== undefined &&
        szPasswd !== undefined &&
        index === MODIFY_CANCEL_FORM_INDEX
            ? true
            : false;

    useEffect(() => {
        if (result?.Message?.data) {
            setResultMsg(result.Message.data);
        }
    }, [result?.Message?.data]);

    useEffect(() => {
        setSumError('');
        setStopPriceError('');
        setLimitPriceError('');
        setEntryPriceError('');
        setInputRef({
            ...inputRef,
            fOrderSu: fLot,
            fOrderPrice: szRate,
            stopOrLimitPrice,
        });
        setResultMsg('');
    }, [orderReducerState]);

    // Incomplete
    const handleValidation = () => {
        let isValid = true;

        if (!isActive) {
            setResultMsg(TRANSLATOR.MODIFY_CANCEL_TARGET_UNSELECTED(language));
        }

        if (inputRef.fOrderPrice === 0 || isNaN(inputRef.fOrderPrice)) {
            setEntryPriceError(TRANSLATOR.PRICE_ERROR(language));
            isValid = false;
        }
        if (inputRef.fOrderSu === 0 || isNaN(inputRef.fOrderSu)) {
            setSumError(TRANSLATOR.AMOUNT_ERROR(language));
            isValid = false;
        }
        if (stopOrLimit === CONST.STOP && inputRef.stopOrLimitPrice >= inputRef.fOrderPrice) {
            setStopPriceError(TRANSLATOR.STOP_PRICE_ERROR(language));
            isValid = false;
        }
        if (stopOrLimit === (CONST.LIMIT as string) && inputRef.stopOrLimitPrice <= inputRef.fOrderPrice) {
            setLimitPriceError(TRANSLATOR.LIMIT_PRICE_ERROR(language));
            isValid = false;
        }

        return isValid;
    };

    const handleModifyCancelStopLimit = ({ szOrdType, cModType }) => () => {
        if (!isActive) return handleInactivity();
        const inputToSend = buildInputForModifyCancelStopLimit({
            stopOrLimitPrice: inputRef.stopOrLimitPrice,
            stopOrLimitPriceKey: stopOrLimit === CONST.STOP ? CONST.STOP_PRICE : CONST.LIMIT_PRICE,
            fOrderPrice: inputRef.fOrderPrice,
            fOrderSu: inputRef.fOrderSu,
            szAccNo,
            szPasswd,
            szOrdType,
            szDealDiv,
            szCurNo,
            szSLCustItem: szSLCustItem,
            szOrgCustItem: szCustItem,
            cModType,
            email,
            jwt,
        });
        // build transaction input and send
        consoleLogWithColor(
            `유저가 ${
                cModType === '0' ? `${stopOrLimit} 정정` : cModType === '1' ? `${stopOrLimit} 취소` : 'error'
            }을 주문을 클릭했습니다 Input은 `,
            inputToSend,
        );

        handleValidation() && sendTransaction(inputToSend as TransactionInputType);
    };

    const handleModifyCancelEntry = ({ szOrdType, cModType }) => () => {
        if (!isActive) return handleInactivity();

        const inputToSend = buildInputForModifyCancelEntry({
            fOrderPrice: inputRef.fOrderPrice,
            fOrderSu: inputRef.fOrderSu,
            szAccNo,
            szPasswd,
            szOrdType,
            szDealDiv,
            szCurNo,
            szCustItem,
            cModType,
            email,
            jwt,
        });
        // build transaction input and send
        consoleLogWithColor(
            `유저가 ${
                cModType === '7' ? '지정가 정정' : cModType === '8' ? '지정가 취소' : 'error'
            }을 주문했습니다 Input은 `,
            inputToSend,
        );

        handleValidation() && sendTransaction(inputToSend as TransactionInputType);
    };

    const resetErrorMsg = (target) => {
        if (target === CONST.TARGET_AMOUNT) {
            setSumError('');
        } else if (target === CONST.TARGET_PRICE) {
            setEntryPriceError('');
        } else if (stopOrLimit === CONST.STOP) {
            setStopPriceError('');
        } else if (stopOrLimit === (CONST.LIMIT as string)) {
            setLimitPriceError('');
        }
    };

    const handleChange = (target, value) => {
        resetErrorMsg(target);
        setInputRef({
            ...inputRef,
            [target]: value,
        });
    };

    const handleInactivity = () => {
        consoleWarnWithColor(
            '정정/취소가 다음과 같은 이유로 불가능합니다 : 비로그인, 미체결내역 혹은 종목잔고에서 정정/취소하고자 하는 항목 미선택',
        );
    };

    const getTextForPrice = () => {
        switch (triggeredBy) {
            case CONST.OPEN_ORDERS:
                return TRANSLATOR.PRICE(language) + '(USDT)';
            case CONST.OPEN_POSITIONS:
                return stopOrLimit === CONST.STOP
                    ? TRANSLATOR.STOP_PRICE(language) + '(USDT)'
                    : TRANSLATOR.LIMIT_PRICE(language) + '(USDT)';
            default:
                return TRANSLATOR.PRICE(language) + '(USDT)';
        }
    };

    const getLeftButtonText = () => {
        switch (triggeredBy) {
            case CONST.OPEN_ORDERS:
                return TRANSLATOR.MARKET_ORDER_MODIFY(language);
            case CONST.OPEN_POSITIONS:
                return stopOrLimit === CONST.STOP
                    ? TRANSLATOR.STOP_MODIFY(language)
                    : TRANSLATOR.LIMIT_MODIFY(language);
            default:
                return TRANSLATOR.MARKET_ORDER_MODIFY(language);
        }
    };
    const getRightButtonText = () => {
        switch (triggeredBy) {
            case CONST.OPEN_ORDERS:
                return TRANSLATOR.MARKET_ORDER_CANCEL(language);
            case CONST.OPEN_POSITIONS:
                return stopOrLimit === CONST.STOP
                    ? TRANSLATOR.STOP_CANCEL(language)
                    : TRANSLATOR.LIMIT_CANCEL(language);
            default:
                return TRANSLATOR.MARKET_ORDER_CANCEL(language);
        }
    };

    const getTotalOrderPrice = (isForAvailableMargin) => {
        if (
            isNaN(
                triggeredBy === CONST.OPEN_POSITIONS
                    ? inputRef.stopOrLimitPrice * inputRef.fOrderSu
                    : inputRef.fOrderPrice * inputRef.fOrderSu,
            )
        ) {
            return 0;
        }

        const multiplyBy = isForAvailableMargin ? 0.1 : 1;
        switch (triggeredBy) {
            case CONST.OPEN_ORDERS:
                return formatNumber(inputRef.fOrderPrice * inputRef.fOrderSu * multiplyBy);
            case CONST.OPEN_POSITIONS:
                return formatNumber(inputRef.stopOrLimitPrice * inputRef.fOrderSu * multiplyBy);
            default:
                return 0;
        }
    };

    const getErrorMessage = () => {
        switch (triggeredBy) {
            case CONST.OPEN_ORDERS:
                return entryPriceError;
            case CONST.OPEN_POSITIONS:
                return stopOrLimit === CONST.STOP ? stopPriceError : limitPriceError;
            default:
                return null;
        }
    };

    const getClickEventForModify = () => {
        switch (triggeredBy) {
            case CONST.OPEN_ORDERS:
                return handleModifyCancelEntry({
                    szOrdType: CONST.URE,
                    cModType: '7',
                });
            case CONST.OPEN_POSITIONS:
                return handleModifyCancelStopLimit({
                    szOrdType: stopOrLimit === CONST.STOP ? CONST.UCES : CONST.UCEL,
                    cModType: '0',
                });
            default:
                return handleInactivity;
        }
    };

    const getClickEventForCancel = () => {
        switch (triggeredBy) {
            case CONST.OPEN_ORDERS:
                return handleModifyCancelEntry({
                    szOrdType: CONST.UODE,
                    cModType: '8',
                });
            case CONST.OPEN_POSITIONS:
                return handleModifyCancelStopLimit({
                    szOrdType: stopOrLimit === CONST.STOP ? CONST.UCES : CONST.UCEL,
                    cModType: '1',
                });
            default:
                return handleInactivity;
        }
    };

    if (result?.Message?.data) {
        console.log('result in modify-cancel form  : ', result);
    }

    return (
        <NewOrderWrapper>
            <Grid container justify="space-between" style={borderBottomStyle}>
                <div style={{ ...fontBold, fontSize: 16 }}>{szCurNo ? szCurNo : 'Not selected'}</div>
                <Flex>
                    <div style={{ ...paddingRightEight }}>Leverage</div>
                    <div style={{ ...colorGrey }}>x 10</div>
                </Flex>
            </Grid>

            <Grid>
                <RadioGroup>
                    <Grid container>
                        <StFormControlLabel
                            value={CONST.UOE}
                            control={<Radio />}
                            label={TRANSLATOR.LIMIT_ORDER(language)}
                            checked={triggeredBy === CONST.OPEN_ORDERS ? true : false}
                        />
                        <StFormControlLabel
                            value={CONST.UOM}
                            control={<Radio />}
                            label={TRANSLATOR.STOP(language)}
                            checked={triggeredBy === CONST.OPEN_POSITIONS && stopOrLimit === CONST.STOP ? true : false}
                        />
                        <StFormControlLabel
                            value={CONST.UOM}
                            control={<Radio />}
                            label={TRANSLATOR.LIMIT(language)}
                            checked={
                                triggeredBy === CONST.OPEN_POSITIONS && (stopOrLimit as string) === CONST.LIMIT
                                    ? true
                                    : false
                            }
                        />
                    </Grid>
                </RadioGroup>
            </Grid>

            <Grid container direction="column" style={{ position: 'relative' }}>
                <Grid container alignItems="center" justify="space-between">
                    <div>{getTextForPrice()}</div>
                    <ButtonInput
                        target={
                            triggeredBy === CONST.OPEN_ORDERS
                                ? CONST.TARGET_PRICE
                                : triggeredBy === CONST.OPEN_POSITIONS
                                ? 'stopOrLimitPrice'
                                : undefined
                        }
                        disabled={!isActive}
                        initialValue={
                            triggeredBy === CONST.OPEN_ORDERS
                                ? inputRef[CONST.TARGET_PRICE]
                                : triggeredBy === CONST.OPEN_POSITIONS
                                ? inputRef.stopOrLimitPrice
                                : 0
                        }
                        handleChange={handleChange}
                    />
                </Grid>
                <ErrorMsg>{getErrorMessage()}</ErrorMsg>
                <Grid
                    container
                    justify="flex-end"
                    style={{ padding: 0, position: 'absolute', top: '80%', right: '6%' }}
                >
                    {/* <div style={{ ...paddingRightSix }}>
            {!isNaN(
              triggeredBy === CONST.OPEN_POSITIONS
                ? inputRef.stopOrLimitPrice
                : inputRef.fOrderPrice
            )
              ? formatNumber(
                  triggeredBy === CONST.OPEN_POSITIONS
                    ? inputRef.stopOrLimitPrice
                    : inputRef.fOrderPrice
                )
              : 0}
          </div>
          <div>USDT</div> */}
                </Grid>
            </Grid>

            <Grid
                container
                direction="column"
                style={{ position: 'relative', ...borderBottomStyle, padding: '14px 0 25px 0' }}
            >
                <Grid container alignItems="center" justify="space-between">
                    <div>{TRANSLATOR.AMOUNT(language)}</div>
                    <ButtonInput
                        target={CONST.TARGET_AMOUNT}
                        disabled={!isActive}
                        initialValue={inputRef[CONST.TARGET_AMOUNT] ? inputRef[CONST.TARGET_AMOUNT] : 0}
                        handleChange={handleChange}
                    />
                </Grid>
                <ErrorMsg>{sumError}</ErrorMsg>
            </Grid>
            <Grid container justify="space-between">
                <div>{TRANSLATOR.ORDER_VALUE(language)}</div>
                <Flex>
                    <div style={{ ...paddingRightSix, ...fontBold }}>{getTotalOrderPrice(false)}</div>
                    <div>USDT</div>
                </Flex>
            </Grid>
            <Grid container justify="space-between">
                <div>{TRANSLATOR.AVAILABLE_MARGIN(language)}</div>
                <Flex>
                    <div style={{ ...paddingRightSix, ...fontBold }}>{getTotalOrderPrice(true)}</div>
                    <div>USDT</div>
                </Flex>
            </Grid>
            <div style={{ height: 15, position: 'relative', padding: 0 }}>
                <ResultMsg>{resultMsg}</ResultMsg>
            </div>

            <Grid container justify="space-between">
                <ModifyButton variant="contained" onClick={getClickEventForModify()}>
                    {getLeftButtonText()}
                </ModifyButton>

                <CancelButton variant="outlined" onClick={getClickEventForCancel()}>
                    {getRightButtonText()}
                </CancelButton>
            </Grid>
        </NewOrderWrapper>
    );
};

export default React.memo(ModifyCancelForm);

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const NewOrderWrapper = styled.div`
    height: ${({ theme }) => theme.orderTabMenu.height};
    font-size: ${({ theme }) => theme.fontSizes.content};
    padding: ${({ theme }) => theme.orderTabMenu.containerPadding};

    & > div {
        padding: ${({ theme }) => theme.orderTabMenu.divPadding};
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
    height: 40px;
    width: 47%;
    font-size: ${({ theme }) => theme.fontSizes.content} !important;
    border-radius: 2px !important;
    font-weight: 700 !important;
    text-align: center;
`;
const ModifyButton = styled(BaseButton)`
    background: #5461bd !important;
    color: white !important;
    text-transform: none;
`;
const CancelButton = styled(BaseButton)`
    border: 1px solid #5461bd !important;
    color: #5461bd !important;
    text-transform: none;
`;

const ErrorMsg = styled.span`
    position: absolute;
    bottom: -7px;
    color: red;
    font-size: 14px;
`;

const ResultMsg = styled.div`
    position: absolute;
    color: #3883e6;
    font-size: 14px;
`;
