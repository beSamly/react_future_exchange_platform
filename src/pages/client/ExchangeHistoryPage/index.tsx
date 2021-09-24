import React from 'react';
import ExchangeHistory from './ExchangeHistoryPage';
import ClientLayout from '../../../components/client/ClientLayout';
import MobileLayout from '../../../components/common/MobileLayout';
import useScreenSize from '../../../hooks/useScreenSize';

const index = () => {
    const { isMobile } = useScreenSize();

    return isMobile ? (
        <MobileLayout>
            <ExchangeHistory />
        </MobileLayout>
    ) : (
        <ClientLayout>
            <ExchangeHistory />
        </ClientLayout>
    );
};
export default index;
