import React from 'react';
import styled from 'styled-components';
import UsersCoinList from './UsersCoinList';
import CoinRateList from './CoinRateList';
import { useState } from 'react';
import { useTypedSelector } from '../../../states/useTypedSelector';
import useUserMargin from '../../../hooks/useUserMargin';
import { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { Grid, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useHandleExchange from './useHandleExchange';
import useGetUsersCoinList from '../../../hooks/useGetUsersCoinList';
import UsersAsset from './UsersAsset';
import useUsersData from '../../../hooks/useUserData';
import * as LANGUAGE from '../../../constants/Language';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';

const noCoinText = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '보유중인 코인이 없습니다.';
        case LANGUAGE.ENGLISH:
            return 'You have no coin to exchange';
        default:
            return 'You have no coin to exchange';
    }
};

const CoinToPoint = () => {
    const { data: userMarginData, dataColumn: userDataMarginColumn, refetch: refetchUserMargin } = useUserMargin();
    const [selectedCoin, setSelectedCoin] = useState<string | undefined>(undefined);
    const [amountOfCointToExchange, setAmountOfCointToExchange] = useState<number>(0);
    const { minusCoinPlusPoint } = useHandleExchange();
    const { szAccNo, email, jwt, szPasswd } = useUsersData();
    const {
        data: usersCoinListData,
        dataColumn: usersCoinListDataColumn,
        refetch: refetchUsersCoinList,
    } = useGetUsersCoinList();
    const { currentLanguage } = useCurrentLanguage();

    const latestData = useTypedSelector((state) => state.stateReducer[`91_BNC_${selectedCoin}USDT`]);
    const latestRate = latestData ? latestData[0].Output1.szClose - 10 : undefined;

    const handleChange = (e) => {
        setSelectedCoin(e.target.value);
    };

    useEffect(() => {
        //do something
    }, []);

    const handleExchange = () => {
        if (!szAccNo || !selectedCoin || !latestRate || amountOfCointToExchange === 0 || !email || !jwt || !szPasswd)
            return;

        minusCoinPlusPoint({
            szAccNo,
            szPasswd,
            szCurNo: selectedCoin,
            amount: amountOfCointToExchange,
            pointToPlus: Number(latestRate) * Number(amountOfCointToExchange),
            email,
            jwt,
        });

        setTimeout(() => {
            refetchUsersCoinList();
            refetchUserMargin();
        }, 500);
    };

    return (
        <Wrapper>
            <UsersAsset
                isLoggedIn={szAccNo ? true : false}
                usersAssetData={userMarginData}
                usersAssetDataColumn={userDataMarginColumn}
            />

            <UsersCoinList
                isLoggedIn={szAccNo ? true : false}
                usersCoinListData={usersCoinListData}
                usersCoinListDataColumn={usersCoinListDataColumn}
            />

            <div style={{ height: 14 }}></div>

            {usersCoinListData.length > 0 ? (
                <>
                    <Grid container justify="space-between">
                        <div style={{ width: '45%' }}>
                            <Text>통화</Text>
                            <FormControl variant="outlined" fullWidth={true}>
                                <StSelect native value={selectedCoin} onChange={handleChange}>
                                    <option style={{ display: 'none' }}></option>
                                    {usersCoinListData.map((coin, index) => (
                                        <option key={index} value={coin.name}>
                                            {coin.name}
                                        </option>
                                    ))}
                                </StSelect>
                            </FormControl>
                        </div>
                        <div style={{ width: '45%' }}>
                            <Text>수량</Text>
                            <div>
                                <Input
                                    onValueChange={(values) => {
                                        setAmountOfCointToExchange(values.floatValue);
                                    }}
                                    thousandSeparator
                                    isNumericString
                                    allowLeadingZeros={false}
                                    allowNegative={false}
                                    // value={initialValue !== 0 ? initialValue : ''}
                                    // disabled={disabled}
                                />
                            </div>
                        </div>
                    </Grid>
                    <div style={{ height: 14 }}></div>
                    <Text>환전 금액</Text>
                    <ValuePresentWrapper>
                        {amountOfCointToExchange && latestRate
                            ? Number(latestRate) * Number(amountOfCointToExchange)
                            : 0}
                    </ValuePresentWrapper>
                    <div style={{ height: 14 }}></div>
                    <ExchangeButton onClick={handleExchange}>환전</ExchangeButton>
                </>
            ) : (
                szAccNo && <ErrorMessage>{noCoinText(currentLanguage)} </ErrorMessage>
            )}

            <div style={{ height: 14 }}></div>
            <Text>환율</Text>
            <CoinRateList symbol={selectedCoin} />
        </Wrapper>
    );
};

export default CoinToPoint;

const Wrapper = styled.div`
    padding: 16px;
`;

const Input = styled(NumberFormat)`
    width: 100%;
    outline: none;
    height: 48px;
    border: none;
    color: grey;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding-left: 6px;

    &:hover {
        border: 1px solid #01011c;
    }
`;

const ValuePresentWrapper = styled.div`
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 11px 16px;
`;

const ExchangeButton = styled.div`
    background: #5461bd;
    border-radius: 4px;
    color: white;
    text-align: center;
    line-height: 42px;
    height: 42px;
    cursor: pointer;

    &:hover {
        background: #4d59b5;
    }
`;

const StSelect = styled(Select)`
    /* height: 40px !important; */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    option {
        font-size: 16px;
    }
`;

const Text = styled.div`
    color: #63677b;
    margin-bottom: 8px;
`;

const ErrorMessage = styled.div`
    height: 30px;
    line-height: 30px;
    padding-left: 5px;
    border-radius: 4px;
    background: #e8e8e8;
    color: #313131;
    border: 2px solid #aeaeae;
`;
