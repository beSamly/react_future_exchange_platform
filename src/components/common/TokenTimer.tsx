import React, { useEffect, useState } from 'react';
import useCurrentLanguage from '../../hooks/useCurrentLanguage';
import useUsersData from '../../hooks/useUserData';
import { Grid, Button } from '@material-ui/core/';
import useExtendLogin from '../../hooks/useExtendLogin';
import { clearInterval } from 'timers';
import { USER_LOG_OUT } from '../../states/reducers/userReducer';
import { useDispatch } from 'react-redux';
import PageNameList from '../../constants/PageNameLIst';
import * as LANGUAGE from '../../constants/Language';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const extendLoginText = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '로그인 연장';
        case LANGUAGE.ENGLISH:
            return 'Extend login';
        default:
            return 'Extend login';
    }
};

const loginText = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '로그인';
        case LANGUAGE.ENGLISH:
            return 'Login';
        default:
            return 'Login';
    }
};
const signoutText = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '로그아웃';
        case LANGUAGE.ENGLISH:
            return 'Sign out';
        default:
            return 'Sign out';
    }
};
const remainingTimeText = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '남은 시간';
        case LANGUAGE.ENGLISH:
            return 'Remaining time';
        default:
            return 'Remaining time';
    }
};

let interval: NodeJS.Timeout = setInterval(() => {
    console.log(` `);
}, 100000000);

interface PropsType extends RouteComponentProps {
    isForMobile?: boolean;
}

const TokenTimer = ({ history, isForMobile = false }: PropsType) => {
    const { exp } = useUsersData();
    const [countdown, setCountdown] = useState<number>(100);
    const { currentLanguage } = useCurrentLanguage();
    const { szAccNo, isLoggedIn } = useUsersData();
    const dispatch = useDispatch();
    const { handleExtendLogin } = useExtendLogin();

    useEffect(() => {
        if (!exp) return;
        const now = new Date().getTime();
        const secondLeft = exp * 1000 - now;

        setCountdown(Math.floor(secondLeft / 1000));
        window.clearInterval(interval);
        interval = setInterval(() => {
            setCountdown((prev) => {
                return prev - 1 > 0 ? prev - 1 : 0;
            });
        }, 1000);
    }, [exp]);

    useEffect(() => {
        if (0 >= countdown && szAccNo) {
            dispatch(USER_LOG_OUT());
            history.push(PageNameList.MOBILE_SIGNIN);
        }
    }, [countdown]);

    const handleClick = () => {
        handleExtendLogin();
    };

    const handleRedirect = () => {
        history.push(PageNameList.MOBILE_SIGNIN);
    };

    const handleSignOut = () => {
        localStorage.removeItem('elpist');
        window.location.reload();
    };

    const convertSecToString = () => {
        return `${Math.floor(countdown / 60)}분 ${countdown % 60}초`;
    };

    return (
        <Grid container justify="flex-end" alignItems="center">
            {countdown > 0 && isLoggedIn && (
                <CountdownText style={{ fontSize: isForMobile ? 12 : 14 }}>
                    {remainingTimeText(currentLanguage)}
                    {convertSecToString()}
                </CountdownText>
            )}
            {szAccNo ? (
                <>
                    <StButton variant="outlined" onClick={handleClick} isForMobile={isForMobile}>
                        {extendLoginText(currentLanguage)}
                    </StButton>
                    <StButton variant="outlined" onClick={handleSignOut} isForMobile={isForMobile}>
                        {signoutText(currentLanguage)}
                    </StButton>
                </>
            ) : (
                <StButton variant="outlined" onClick={handleRedirect} isForMobile={isForMobile}>
                    {loginText(currentLanguage)}
                </StButton>
            )}
        </Grid>
    );
};

const StButton = styled(Button)<{ isForMobile: boolean }>`
    border-color: ${({ isForMobile }) => (isForMobile ? '#ffffff' : '#9781e6')} !important ;
    color: ${({ isForMobile }) => (isForMobile ? '#ffffff' : '#9781e6')} !important ;
`;

const CountdownText = styled.div`
    margin-right: 10px;
`;

export default withRouter(TokenTimer);
