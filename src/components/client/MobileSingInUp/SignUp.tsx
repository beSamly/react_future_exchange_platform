import React, { useState } from 'react';
import { KOREAN, ENGLISH } from '../../../constants/Language';
import Logo from '../../../assets/logo_white.png';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Grid, TextField } from '@material-ui/core';
import BackgroundImg from '../../../assets/mobile_landing_background.png';
import useSignUp from '../../../hooks/useSignUp';
import PageNameList from '../../../constants/PageNameLIst';
import Modal from '../../common/Modal';
import { useEffect } from 'react';
import QRCode from './QRCode';
import CustomInput, { TypeEnum } from '../../common/CustomInput';

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
            return '이메일';
        default:
            return '이메일';
    }
};

const familyNameText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Family name';
        case KOREAN:
            return '성';
        default:
            return 'Family name';
    }
};

const surNameText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Surname';
        case KOREAN:
            return '이름';
        default:
            return 'Surname';
    }
};
const passwordText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Password';
        case KOREAN:
            return '패스워드';
        default:
            return 'Password';
    }
};

const checkPasswordText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Check password';
        case KOREAN:
            return '패스워드 확인';
        default:
            return 'Check password';
    }
};

const countryCodeText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Country code';
        case KOREAN:
            return '국가 번호';
        default:
            return 'Country code';
    }
};

const phoneNumberText = (language) => {
    switch (language) {
        case ENGLISH:
            return 'Phone number';
        case KOREAN:
            return '전화번호';
        default:
            return 'Phone number';
    }
};

const SignUp = ({ history }: RouteComponentProps) => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        check_password: '',
        szFamilyName: '',
        szUserName: '',
        szNation_Name: '',
        szTelNo2: '',
    });

    const [isOpened, setIsOpened] = useState(false);

    const { currentLanguage } = useCurrentLanguage();

    const handleChange = (target) => (e) => {
        setInput({
            ...input,
            [target]: e.target.value,
        });
    };

    const { handleSignUp, success, data, error } = useSignUp();

    const handleSubmit = () => {
        handleSignUp({ ...input });
    };

    const handleRedirect = () => {
        history.push(PageNameList.MOBILE_SIGNIN);
    };

    useEffect(() => {
        if (success) {
            setIsOpened(true);
        }
    }, [success]);

    console.log(`error i!! : `, error, ' success : ', success);

    return (
        <Wrapper container justify="center" style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <InputWrapper>
                {error && <ErrorMsg>{JSON.stringify(error)}</ErrorMsg>}
                <div style={{ height: 4 }}></div>

                <CustomInput
                    label={emailText(currentLanguage)}
                    onChange={handleChange('email')}
                    type={TypeEnum.Email}
                    color="white"
                />
                <div style={{ height: 4 }}></div>
                <CustomInput
                    label={familyNameText(currentLanguage)}
                    onChange={handleChange('szFamilyName')}
                    type={TypeEnum.String}
                    color="white"
                />
                <div style={{ height: 4 }}></div>
                <CustomInput
                    label={surNameText(currentLanguage)}
                    onChange={handleChange('szUserName')}
                    type={TypeEnum.String}
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
                    label={checkPasswordText(currentLanguage)}
                    onChange={handleChange('check_password')}
                    type={TypeEnum.Password}
                    color="white"
                />
                <div style={{ height: 4 }}></div>
                <CustomInput
                    label={countryCodeText(currentLanguage)}
                    onChange={handleChange('szNation_Name')}
                    allowLeadingZeros={true}
                    type={TypeEnum.Number}
                    color="white"
                />
                <div style={{ height: 4 }}></div>
                <CustomInput
                    label={phoneNumberText(currentLanguage)}
                    onChange={handleChange('szTelNo2')}
                    allowLeadingZeros={true}
                    maxLength={11}
                    type={TypeEnum.Number}
                    color="white"
                />
                <div style={{ height: 4 }}></div>
                <LoginButton onClick={handleSubmit}>{signUpText(currentLanguage)}</LoginButton>
                <LoginButton onClick={handleRedirect}>{signInText(currentLanguage)}</LoginButton>
            </InputWrapper>
            <Modal opened={isOpened} setOpened={setIsOpened} closeButtonVisible={true} positions={{ y: '25%' }}>
                <QRCode data={data} setOpened={setIsOpened} />
            </Modal>
        </Wrapper>
    );
};
export default withRouter(SignUp);

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
    top: 7%;
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
    margin: 10px;
`;
