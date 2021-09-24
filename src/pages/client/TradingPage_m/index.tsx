import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { KOREAN, ENGLISH } from '../../../constants/Language';
import Logo from '../../../assets/logo.png';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import TradingPageForMobile from './TradingPage_m';

export default function Index() {
    return <MobileLandingPage />;
}

const MobileLandingPage = withRouter(({ history }) => {
    const { currentLanguage } = useCurrentLanguage();

    return <TradingPageForMobile />;
});
