import React, { useState, useEffect } from 'react';
import { KOREAN, ENGLISH } from '../../../constants/Language';
import Logo from '../../../assets/logo_white.png';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Grid, TextField, Button } from '@material-ui/core';
import useSignIn from '../../../hooks/useSignIn';
import BackgroundImg from '../../../assets/mobile_landing_background.png';
import PageNameList from '../../../constants/PageNameLIst';
import CustomInput, { TypeEnum } from '../../common/CustomInput';
import socketService from '../../../states/socketAgent/SocketService';

const landingPageText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Trustworthy Trading Platform';
        case KOREAN:
            return '믿을수 있는 가상화폐 거래소';
        default:
            return '믿을수 있는 가상화폐 거래소';
    }
};
const signUpText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Sign Up';
        case KOREAN:
            return '회원가입';
        default:
            return '회원가입';
    }
};
const signInText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Sign In';
        case KOREAN:
            return '로그인';
        default:
            return '로그인';
    }
};
const emailText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Email';
        case KOREAN:
            return '이메일 주소';
        default:
            return '이메일 주소';
    }
};

const passwordText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Password';
        case KOREAN:
            return '비밀번호';
        default:
            return '비밀번호';
    }
};
const otpTokenText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'OTP Token';
        case KOREAN:
            return 'OTP 토큰';
        default:
            return 'OTP 토큰';
    }
};

const SignIn = ({ history }) => {
    const { currentLanguage } = useCurrentLanguage();
    const [input, setInput] = useState({
        password: '',
        email: '',
        otp_token: '',
    });

    const { handleSignIn, handleDemoLogin, error, success, data } = useSignIn();

    useEffect(() => {
        if (success) {
            history.push(`${PageNameList.TRADE}`);
            localStorage.setItem('elpist', JSON.stringify({ isLoggedIn: true }));
        }
    }, [success]);

    const handleChange = (target) => (e) => {
        setInput({
            ...input,
            [target]: e.target.value,
        });
    };

    const handleSubmit = () => {
        handleSignIn({ ...input });
    };

    const handleRedirect = () => {
        history.push(`${PageNameList.MOBILE_SIGNUP}`);
    };

    const handleDemoSignInAndRedirect = () => {
        handleDemoLogin();
        history.push(`${PageNameList.TRADE}?debug=true`);
    };

    return (
        <Wrapper container justify="center" style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <TextWrapper container direction="column" alignItems="center">
                <ImageWrapper>
                    <img src={Logo} style={{ width: '100%', height: '100%' }} />
                </ImageWrapper>
                <LandingPageText>{landingPageText(currentLanguage)}</LandingPageText>
            </TextWrapper>

            <InputWrapper>
                {error && <ErrorMsg>{error}</ErrorMsg>}
                <div style={{ height: 4 }}></div>

                <CustomInput
                    label={emailText(currentLanguage)}
                    onChange={handleChange('email')}
                    type={TypeEnum.Text}
                    color="white"
                />
                <div style={{ height: 4 }}></div>
                <CustomInput
                    label={passwordText(currentLanguage)}
                    onChange={handleChange('password')}
                    type={TypeEnum.Password}
                    color="white"
                />
                <div style={{ height: 4 }}></div>
                <CustomInput
                    label={otpTokenText(currentLanguage)}
                    onChange={handleChange('otp_token')}
                    type={TypeEnum.Number}
                    allowLeadingZeros={true}
                    maxLength={6}
                    color="white"
                />

                <LoginButton onClick={handleRedirect}>{signUpText(currentLanguage)}</LoginButton>
                <LoginButton onClick={handleSubmit}>{signInText(currentLanguage)}</LoginButton>
                <LoginButton onClick={handleDemoSignInAndRedirect}>{'강남 데모 로그인'}</LoginButton>
            </InputWrapper>
        </Wrapper>
    );
};

export default withRouter(SignIn);

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

const InputWrapper = styled.div`
    width: 80%;
    position: absolute;
    bottom: 50px;
`;

const StTextField = styled(TextField)`
    margin: 5px 0 !important;
    fieldset {
        border-color: #ffffff !important;
    }

    input {
        color: #ffffff !important;
    }

    label {
        color: #ffffff !important;
    }
`;

const LoginButton = styled.div`
    cursor: pointer;
    margin-top: 5px;
    background-color: white;
    color: #0c144e;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
`;

const ErrorMsg = styled.div`
    color: red;
`;
