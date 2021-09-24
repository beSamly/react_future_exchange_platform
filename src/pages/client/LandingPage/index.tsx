import React from 'react';
import useScreenSize from '../../../hooks/useScreenSize';
import MobileLandingPage from './MobileLandingPage';

const Index = () => {
    const { isMobile } = useScreenSize();
    return isMobile ? <MobileLandingPage /> : <MobileLandingPage />;
};

export default Index;
