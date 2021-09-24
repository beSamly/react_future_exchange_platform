import React from 'react';
import NewOrderForm from '../NewOrder';
import NewOrderFormTest from '../NewOrder/NewOrderFormTest';
import OrderTabMenu from './OrderTabMenu';
import ModifyCancelForm from '../ModifyCancel';
import StopLimitForm from '../StopLimit/StopLimitForm';
import * as LANGUAGE from '../../../../constants/Language';
import { useTypedSelector } from '../../../../states/useTypedSelector';

export default function Index({ language = LANGUAGE.KOREAN }) {
    const currentLanguage = useTypedSelector((state) => state.userReducer.language);
    // get selected tab index
    // send it down to orderTabMenu props
    const currentTabIndex = useTypedSelector((state) => state.orderReducer.index);
    return (
        <OrderTabMenu
            tabHeight={45}
            tabWidth={140}
            currentTabProp={currentTabIndex ? currentTabIndex : 0}
            // menu={["N/O", "S/L", "M/C", "N/O T"]}
            menu={
                currentLanguage === LANGUAGE.KOREAN
                    ? ['신규주문', '스탑/리밋', '정정/취소']
                    : ['New Order', 'Stop/Limit', 'Modify/Cancel']
            }
            components={[
                <NewOrderForm key={0} language={language} />,
                <StopLimitForm key={1} language={language} />,
                <ModifyCancelForm key={2} language={language} />,
            ]}
        />
    );
}
