import React from 'react';
import { KOREAN, ENGLISH } from '../../../constants/Language';
import LogoPng from '../../../assets/logo_white.png';
import BackgroundImg from '../../../assets/mobile_landing_background.png';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import PageNameList from '../../../constants/PageNameLIst';

const goToLoginText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Login';
        case [KOREAN]:
            return '거래소 로그인';
        default:
            return '거래소 로그인';
    }
};

const goToTradingPageText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Go to Trading page';
        case [KOREAN]:
            return '거래소 바로가기';
        default:
            return '거래소 바로가기';
    }
};

const landingPageText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Trustworthy Trading Platform';
        case [KOREAN]:
            return '믿을수 있는 가상화폐 거래소';
        default:
            return '믿을수 있는 가상화폐 거래소';
    }
};

const MobileLandingPage = withRouter(({ history }: RouteComponentProps) => {
    const { currentLanguage } = useCurrentLanguage();

    const handleRedirect = (page) => () => {
        history.push(page);
    };

    return (
        <Wrapper container justify="center" style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <TextWrapper container direction="column" alignItems="center">
                <ImageWrapper>
                    <img src={LogoPng} />
                </ImageWrapper>
                <LandingPageText>{landingPageText(currentLanguage)}</LandingPageText>
            </TextWrapper>
            <RedirectOptionsWrapper>
                <RedirectToLogin onClick={handleRedirect(PageNameList.MOBILE_SIGNIN)}>
                    {goToLoginText(currentLanguage)}
                </RedirectToLogin>
                <RedirectToTrading onClick={handleRedirect(PageNameList.TRADE)}>
                    {goToTradingPageText(currentLanguage)}
                </RedirectToTrading>
            </RedirectOptionsWrapper>
        </Wrapper>
    );
});

export default MobileLandingPage;

const Wrapper = styled(Grid)`
    width: 100vw;
    height: 100vh;
    background-color: #14144d;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const TextWrapper = styled(Grid)`
    position: absolute;
    top: 30%;
`;

const LandingPageText = styled.div`
    color: white;
    font-size: 13px;
    margin-top: 5px;
`;

const ImageWrapper = styled.div`
    width: 80px;
    height: 30px;
`;

const RedirectOptionsWrapper = styled.div`
    width: 80%;
    position: absolute;
    bottom: 20px;
`;

const RedirectOptionsBase = styled.div`
    width: 100%;
    height: 45px;
    line-height: 40px;
    text-align: center;
    border-radius: 4px;
    margin: 8px 0;
    cursor: pointer;
    font-size: 15px;
`;

const RedirectToLogin = styled(RedirectOptionsBase)`
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0);
    color: white;
`;

const RedirectToTrading = styled(RedirectOptionsBase)`
    border: 1px solid white;
    background-color: white;
    color: #0c144e;
    font-weight: 700;
`;
