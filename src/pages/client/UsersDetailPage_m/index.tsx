import React from 'react';
import MobileLayout from '../../../components/common/MobileLayout';
import Swipe from '../TradingPage_m/Swipe';
import OpenOrders from '../../../components/client/UserTabComponents/OpenOrders';
import TradingHistory from '../../../components/client/UserTabComponents/TradingHistory';
import OpenPositions from '../../../components/client/UserTabComponents/OpenPositions';
import PositionDetail from '../../../components/client/UserTabComponents/PositionDetail';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';

const Index = () => {
    const { currentLanguage } = useCurrentLanguage();

    return (
        <MobileLayout>
            <Swipe
                reloadComponent={true}
                menus={['미체결내역', '거래내역', '종목잔고', '미청산내역']}
                components={[
                    <OpenOrders key={0} />,
                    <TradingHistory key={1} />,
                    <OpenPositions key={2} />,
                    <PositionDetail key={3} />,
                ]}
            />
        </MobileLayout>
    );
};

export default Index;
