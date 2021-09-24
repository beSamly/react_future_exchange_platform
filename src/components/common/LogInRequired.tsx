import styled from 'styled-components';
import React from 'react';
import useCurrentLanguage from '../../hooks/useCurrentLanguage';
import { ENGLISH, KOREAN } from '../../constants/Language';

interface PropsType {
    width: number;
    height: number;
}

const logInText = {
    [KOREAN]: '로그인 해주세요.',
    [ENGLISH]: 'Please log in.',
};

const LogInRequired = ({ width = 756, height = 341 }: PropsType) => {
    const { currentLanguage } = useCurrentLanguage();
    return <Wrapper style={{ width, height }}>{logInText[currentLanguage]}</Wrapper>;
};
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
`;

export default LogInRequired;
