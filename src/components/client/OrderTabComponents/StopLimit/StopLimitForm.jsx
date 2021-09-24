import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useAgentToSend from '../../../../hooks/useAgentToSend';
import { useSelector } from 'react-redux';
import { buildInputForStopLimit, buildInputForMarket } from './util';
import * as TRANSLATOR from '../../../../Translator/OrderTab';
import * as CONST from '../../../../constants/OrderTab';
import ButtonInput from '../../../common/ButtonInput';
import { consoleLogWithColor, consoleWarnWithColor } from '../common/consoleWithColor';
import useUsersData from '../../../../hooks/useUserData';

const borderBottomStyle = {
    borderBottom: '1px solid #dfdfdf',
};

const fontBold = {
    fontWeight: 'bold',
};

const paddingRightSix = {
    paddingRight: '6px',
};
const paddingRightEight = {
    paddingRight: '8px',
};

const colorGrey = {
    color: '#E56060',
};

const STOP_LIMIT_FORM_INDEX = 1;
const StopLimitForm = ({ language }) => {
    const [inputRef, setInputRef] = useState({});
    const [sumError, setSumError] = useState();
    const [stopPriceError, setStopPriceError] = useState();
    const [limitPriceError, setLimitPriceError] = useState();
    const [resultMsg, setResultMsg] = useState('');
    const [isActive, setIsActive] = useState(false);

    const { result, sendTransaction } = useAgentToSend();
    const orderReducerState = useSelector((state) => state.orderReducer);
    const { szPasswd, szAccNo, email, jwt } = useUsersData();
    const { data, stopOrLimitOrMarket, index } = orderReducerState;
    const { szRate, fLot, szCurNo, szDealDiv, szCustItem } = data;

    useEffect(() => {
        setInputRef({
            fOrderSu: fLot,
            fOrderPrice: szRate,
            stopOrLimitPrice: szRate,
        });
        setIsActive(
            szRate !== undefined &&
                fLot !== undefined &&
                szCurNo !== undefined &&
                szDealDiv !== undefined &&
                szCustItem !== undefined &&
                index === STOP_LIMIT_FORM_INDEX
                ? true
                : false,
        );
        setResultMsg('');
    }, [orderReducerState]);

    useEffect(() => {
        if (result?.Message?.data) {
            setResultMsg(result.Message.data);
            setIsActive(false);
            setInputRef({});
        }
    }, [result?.Message?.data]);

    // Incomplete
    const handleValidation = () => {
        let isValid = true;

        // if (false && !inputRef.fOrderPrice) {
        //   setEntryPriceError("가격을 확인해주세요");
        //   isValid = false;
        // }
        // if (false && !inputRef.fOrderSu) {
        //   setSumError("수량을 확인해주세요");
        //   isValid = false;
        // }
        // console.log(stopOrLimitOrMarket, " : ", inputRef);
        if (stopOrLimitOrMarket === CONST.STOP && inputRef.stopOrLimitPrice >= inputRef.fOrderPrice) {
            setStopPriceError(TRANSLATOR.PRICE_ERROR(language));
            isValid = false;
        }
        if (stopOrLimitOrMarket === CONST.LIMIT && inputRef.stopOrLimitPrice <= inputRef.fOrderPrice) {
            setLimitPriceError(TRANSLATOR.PRICE_ERROR(language));
            isValid = false;
        }

        return isValid;
    };

    const handleMarket = () => {
        if (!isActive) return;
        const inputToSend = buildInputForMarket({
            fOrderPrice: inputRef.fOrderPrice,
            fOrderSu: inputRef.fOrderSu,
            szAccNo: szAccNo,
            szPasswd: szPasswd,
            szOrdType: CONST.UCM,
            szDealDiv,
            szCurNo,
            szSLCustItem: szCustItem,
            jwt,
            email,
        });
        // build transaction input and send
        consoleLogWithColor(`유저가 시장가청산 주문을 클릭했습니다 Input은 `, inputToSend);

        handleValidation() && sendTransaction(inputToSend);
    };

    const handleStopLimit = () => {
        if (!isActive) return handleInactivity();
        setResultMsg('');
        const inputToSend = buildInputForStopLimit({
            stopOrLimitPrice: inputRef.stopOrLimitPrice,
            stopOrLimitPriceKey: stopOrLimitOrMarket === CONST.STOP ? CONST.STOP_PRICE : CONST.LIMIT_PRICE,
            fOrderPrice: inputRef.fOrderPrice,
            fOrderSu: inputRef.fOrderSu,
            szAccNo,
            szPasswd: szPasswd,
            szOrdType: stopOrLimitOrMarket === CONST.STOP ? CONST.UCES : CONST.UCEL,
            szDealDiv,
            szCurNo,
            szSLCustItem: szCustItem,
            email,
            jwt
        });
        // build transaction input and send
        consoleLogWithColor(`유저가 ${stopOrLimitOrMarket} 주문을 클릭했습니다 Input은`, inputToSend);
        handleValidation() && sendTransaction(inputToSend);
    };

    const resetErrorMsg = (target) => {
        if (target === CONST.TARGET_AMOUNT) {
            setSumError();
        } else if (target === CONST.TARGET_PRICE) {
            // setEntryPriceError();
        } else if (stopOrLimitOrMarket === CONST.STOP) {
            setStopPriceError();
        } else if (stopOrLimitOrMarket === CONST.LIMIT) {
            setLimitPriceError();
        }
    };

    const handleChange = (target, value) => {
        if (target === CONST.TARGET_PRICE) {
            return;
        }
        resetErrorMsg(target);
        setInputRef({
            ...inputRef,
            [target]: value,
        });
    };

    const handleInactivity = () => {
        consoleWarnWithColor(
            '주문이 다음과 같은 이유로 불가능합니다 : 비로그인, 미체결내역 혹은 종목잔고에서 정정/취소하고자 하는 항목 미선택',
        );
    };

    const getTextForPrice = () => {
        switch (stopOrLimitOrMarket) {
            case CONST.STOP:
                return TRANSLATOR.STOP_PRICE(language) + '(USDT)';
            case CONST.LIMIT:
                return TRANSLATOR.LIMIT_PRICE(language) + '(USDT)';
            case CONST.MARKET:
                return TRANSLATOR.PRICE(language) + '(USDT)';
            default:
                return TRANSLATOR.PRICE(language) + '(USDT)';
        }
    };

    return (
        <NewOrderWrapper>
            <Grid container justify="space-between" style={borderBottomStyle}>
                <div style={{ ...fontBold, fontSize: 16 }}>{szCurNo ? szCurNo : 'Not selected'}</div>
                <Flex>
                    <div style={{ ...paddingRightEight }}>Leverage</div>
                    <div style={{ ...colorGrey }}>x 20</div>
                </Flex>
            </Grid>

            <Grid>
                <RadioGroup>
                    <Grid container>
                        <StFormControlLabel
                            value={CONST.UOE}
                            control={<Radio />}
                            label={TRANSLATOR.STOP(language)}
                            checked={stopOrLimitOrMarket === CONST.STOP && true}
                        />
                        <StFormControlLabel
                            value={CONST.UOM}
                            control={<Radio />}
                            label={TRANSLATOR.LIMIT(language)}
                            checked={stopOrLimitOrMarket === CONST.LIMIT && true}
                        />
                        <StFormControlLabel
                            value={CONST.UOM}
                            control={<Radio />}
                            label={TRANSLATOR.MARKET(language)}
                            checked={stopOrLimitOrMarket === CONST.MARKET && true}
                        />
                    </Grid>
                </RadioGroup>
            </Grid>
            <Grid container style={{ position: 'relative' }}>
                <Grid container alignItems="center" justify="space-between">
                    <div>{getTextForPrice()}</div>
                    {stopOrLimitOrMarket === CONST.MARKET ? (
                        <ButtonInput
                            target={CONST.TARGET_PRICE}
                            disabled={!isActive}
                            handleChange={handleChange}
                            initialValue={inputRef.fOrderPrice ? inputRef.fOrderPrice : 0}
                        />
                    ) : (
                        <ButtonInput
                            target={'stopOrLimitPrice'}
                            disabled={!isActive}
                            handleChange={handleChange}
                            initialValue={inputRef.stopOrLimitPrice ? inputRef.stopOrLimitPrice : 0}
                        />
                    )}
                </Grid>
                <ErrorMsg>{stopOrLimitOrMarket === CONST.STOP ? stopPriceError : limitPriceError}</ErrorMsg>
            </Grid>
            <Grid container style={{ ...borderBottomStyle, padding: '14px 0 25px 0' }}>
                <Grid container alignItems="center" justify="space-between">
                    <div>{TRANSLATOR.AMOUNT(language)}</div>
                    <ButtonInput
                        target={CONST.TARGET_AMOUNT}
                        handleChange={handleChange}
                        disabled={!isActive}
                        initialValue={inputRef.fOrderSu ? inputRef.fOrderSu : 0}
                    />
                </Grid>
                <ErrorMsg>{sumError}</ErrorMsg>
            </Grid>

            <Grid container justify="space-between" style={{ opacity: '0' }}>
                <div>Order Value</div>
                <Flex>
                    <div style={{ ...paddingRightSix, ...fontBold }}>0</div>
                    <div>BTC</div>
                </Flex>
            </Grid>
            <Grid container justify="space-between " style={{ opacity: '0' }}>
                <div>Available margin</div>
                <Flex>
                    <div style={{ ...paddingRightSix, ...fontBold }}>0</div>
                    <div>BTC</div>
                </Flex>
            </Grid>
            <div style={{ height: 15, position: 'relative', padding: 0 }}>
                <ResultMsg>{resultMsg}</ResultMsg>
            </div>

            <Grid container justify="space-between">
                <OrderButton
                    variant="contained"
                    onClick={stopOrLimitOrMarket === CONST.MARKET ? handleMarket : handleStopLimit}
                >
                    {/* get text for order button */}
                    {(() => {
                        switch (stopOrLimitOrMarket) {
                            case CONST.MARKET:
                                return TRANSLATOR.MARKET(language);
                            case CONST.STOP:
                                return TRANSLATOR.SET_STOP(language);
                            case CONST.LIMIT:
                                return TRANSLATOR.SET_LIMIT(language);
                            default:
                                return TRANSLATOR.MARKET(language);
                        }
                    })()}
                </OrderButton>
            </Grid>
        </NewOrderWrapper>
    );
};

export default React.memo(StopLimitForm);

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
    /* width: 43%; */
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.content} !important;
    border-radius: 2px !important;
    font-weight: 700 !important;
    width: 370px;
    text-align: center;
`;
const OrderButton = styled(BaseButton)`
    background: #5461bd !important;
    color: white !important;
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
    /* bottom: -7px; */
    color: #3883e6;
    font-size: 14px;
`;
