import React from 'react';
import styled from 'styled-components';
import * as LANGUAGE from '../../../constants/Language';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import Grid from '@material-ui/core/Grid';

type PropsType = {
    isLoggedIn: boolean;
    usersAssetData: Array<string | number>;
    usersAssetDataColumn: Array<string | number>;
};

const getMyAssetText = (currentLanguage) => {
    switch (currentLanguage) {
        case LANGUAGE.KOREAN:
            return '내 보유자산';
        case LANGUAGE.ENGLISH:
            return 'My asset';
        default:
            return '내 보유자산';
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

const UsersAsset = ({ isLoggedIn, usersAssetData, usersAssetDataColumn }: PropsType) => {
    const { currentLanguage } = useCurrentLanguage();

    return (
        <UsersAssetWrapper>
            <MyAssetText>{getMyAssetText(currentLanguage)}</MyAssetText>

            {isLoggedIn ? (
                <AssetListWrapper>
                    {usersAssetData.map((userData, index) => (
                        <Grid container justify="space-between" key={index}>
                            <AssetTitle>{usersAssetDataColumn[index]}</AssetTitle>
                            <AssetValue>{userData}</AssetValue>
                        </Grid>
                    ))}
                </AssetListWrapper>
            ) : (
                <AssetListWrapper>
                    <div>{loginText(currentLanguage)}</div>
                </AssetListWrapper>
            )}
        </UsersAssetWrapper>
    );
};

export default UsersAsset;

const UsersAssetWrapper = styled.div``;

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
