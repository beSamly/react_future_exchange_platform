import React from 'react';
import NewOrderForm from '../NewOrder';
import OrderTabMenu from '../OrderTabs/OrderTabMenu';
import ModifyCancelForm from '../ModifyCancel';
import StopLimitForm from '../StopLimit/StopLimitForm';
import * as LANGUAGE from '../../../../constants/Language';
import OpenOrders from '../../UserTabComponents/OpenOrders';
import OpenPositions from '../../UserTabComponents/OpenPositions';
import TabMenu from '../../../common/TabMenu';
import { useTypedSelector } from '../../../../states/useTypedSelector';
import UserMargin from '../../UserMargin/UserMargin';

const Index = ({ language = LANGUAGE.KOREAN }) => {
    const currentLanguage = useTypedSelector((state) => state.userReducer.language);
    // get selected tab index
    // send it down to orderTabMenu props
    const currentTabIndex = useTypedSelector((state) => state.orderReducer.index);

    return (
        <div style={{}}>
            <OrderTabMenu
                tabHeight={45}
                tabWidth={`${window.screen.width / 3}px`}
                currentTabProp={currentTabIndex ? currentTabIndex : 0}
                // menu={["N/O", "S/L", "M/C", "N/O T"]}
                menu={
                    currentLanguage === LANGUAGE.KOREAN
                        ? ['신규주문', '스탑/리밋', '정정/취소']
                        : ['New Order', 'Stop/Limit', 'Modify/Cancel']
                }
                components={[
                    <NewOrderForm key={0} language={language} style={{ height: '400px' }} />,
                    <StopLimitForm key={1} language={language} />,
                    <ModifyCancelForm key={2} language={language} />,
                ]}
            />

            <TabMenu
                reloadComponent={true}
                menu={
                    currentLanguage === LANGUAGE.KOREAN
                        ? ['미체결내역', '종목잔고', '계좌 현황']
                        : ['Open Orders', 'Open Positions', `User's Detail`]
                }
                tabWidth={'50%'}
                components={[
                    <Wrapper key={0}>
                        <OpenOrders />
                    </Wrapper>,
                    <Wrapper key={1}>
                        <OpenPositions />
                    </Wrapper>,
                    <Wrapper key={1}>
                        <UserMargin style={{ width: '100%', height: '100%' }} />
                    </Wrapper>,
                ]}
            />
        </div>
    );
};

export default Index;

const Wrapper = ({ children }) => {
    return <div>{children}</div>;
};
