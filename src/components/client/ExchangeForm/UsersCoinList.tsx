import React from 'react';
import styled from 'styled-components';
import * as LANGUAGE from '../../../constants/Language';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import Grid from '@material-ui/core/Grid';

type PropsType = {
    isLoggedIn: boolean;
    usersCoinListData: Array<Record<string, number | string>>;
    usersCoinListDataColumn: Array<string>;
};

const getMyCoinText = (currentLanguage) => {
    switch (currentLanguage) {
        case LANGUAGE.KOREAN:
            return '내 보유 코인';
        case LANGUAGE.ENGLISH:
            return 'My coin';
        default:
            return '내 보유 코인';
    }
};

const loginText = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '로그인 해주세요';
        case LANGUAGE.ENGLISH:
            return 'Please log in';
        default:
            return 'Please log in';
    }
};
const symbolText = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '종목';
        case LANGUAGE.ENGLISH:
            return 'Symbol';
        default:
            return 'Symbol';
    }
};
const amountText = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '수량';
        case LANGUAGE.ENGLISH:
            return 'Amount';
        default:
            return 'Amount';
    }
};

const UsersCoinList = ({ isLoggedIn, usersCoinListData, usersCoinListDataColumn }: PropsType) => {
    const { currentLanguage } = useCurrentLanguage();

    console.log(`usersCoinListData w:  `, usersCoinListData, ' usersCoinListDataColumn:  ', usersCoinListDataColumn);

    return (
        <UsersCoinListWrapper>
            <MyAssetText>{getMyCoinText(currentLanguage)}</MyAssetText>

            {isLoggedIn ? (
                <AssetListWrapper>
                    <Grid container justify="space-between">
                        <AssetTitle>{symbolText(currentLanguage)}</AssetTitle>
                        <AssetValue>{amountText(currentLanguage)}</AssetValue>
                    </Grid>

                    {usersCoinListData.length > 0 && (
                        <>
                            {usersCoinListData.map((coin, index) => (
                                <Grid key={index} container justify="space-between" style={{ display: 'flex' }}>
                                    <div>{coin.name}</div>
                                    <div>{coin.amount}</div>
                                </Grid>
                            ))}
                        </>
                    )}
                </AssetListWrapper>
            ) : (
                <AssetListWrapper>
                    <div>{loginText(currentLanguage)}</div>
                </AssetListWrapper>
            )}
        </UsersCoinListWrapper>
    );
};

export default UsersCoinList;

const UsersCoinListWrapper = styled.div``;

const AssetListWrapper = styled.div`
    background-color: #f4f6f9;
    padding: 18px;

    & > div {
        padding: 5px 0px;
    }
`;

const MyAssetText = styled.div`
    margin: 10px 0px;
    line-height: 17.38px;
    font-weight: 600;
`;

const AssetTitle = styled.div`
    color: #63677b;
`;
const AssetValue = styled.div`
    color: #5461bd;
`;
