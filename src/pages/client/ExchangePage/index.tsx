import React from 'react';
import ExchangePage from './ExchangePage';
import ClientLayout from '../../../components/client/ClientLayout';
import MobileLayout from '../../../components/common/MobileLayout';
import useScreenSize from '../../../hooks/useScreenSize';

const index = () => {
    const { isMobile } = useScreenSize();

    return isMobile ? (
        <MobileLayout>
            <ExchangePage />
        </MobileLayout>
    ) : (
        <ClientLayout>
            <ExchangePage />
        </ClientLayout>
    );
};
export default index;
