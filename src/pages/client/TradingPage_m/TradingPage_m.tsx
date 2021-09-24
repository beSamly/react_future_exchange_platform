import React, { useState } from 'react';
import Chart from '../../../components/client/Chart/Chart';
import MobileTabMenu from './MobileTabMenu';
import OrderTabMenu from '../../../components/client/OrderTabComponents/OrderTabs';
import OrderBook from '../../../components/client/OrderBook';
import SymbolList from '../../../components/client/SymbolList';
import OrderTabsMobile from '../../../components/client/OrderTabComponents/OrderTabs_m';
import Swipe from './Swipe';
// import Swipe from "./Swipe";

import MobileLayout from '../../../components/common/MobileLayout';
import Trades from '../../../components/client/Trades';
import FavoriteList from '../../../components/client/SymbolList/FavoriteList';
import { Grid } from '@material-ui/core';
import styled, { css } from 'styled-components';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import { KOREAN, ENGLISH } from '../../../constants/Language';

const tabMenuText = {
    [KOREAN]: ['거래소', '호가', '차트', '주문'],
    [ENGLISH]: ['Trade', 'Order books', 'Chart', 'Order'],
};

export default function TradingPageForMobile() {
    const { currentLanguage } = useCurrentLanguage();
    return (
        <MobileLayout>
            <Swipe
                menus={tabMenuText[currentLanguage]}
                components={[
                    <SymbolListWrapper key={0} />,
                    <OrderBook key={1} />,
                    <Chart key={2} />,
                    <OrderTabsMobile key={3} />,
                ]}
            />
        </MobileLayout>
    );
}

const SymbolListWrapper = () => {
    const [isSymbolList, setIsSymbolList] = useState(true);

    const handleToggle = (i) => () => {
        setIsSymbolList(i);
    };

    return (
        <div>
            <Grid container justify="flex-end" alignItems="center" style={{ height: 36 }}>
                <OptionBtn isSelected={isSymbolList === true} onClick={handleToggle(true)}>
                    종목
                </OptionBtn>
                <OptionBtn isSelected={isSymbolList === false} onClick={handleToggle(false)}>
                    관심종목
                </OptionBtn>
            </Grid>
            {isSymbolList ? <SymbolList /> : <FavoriteList />}
        </div>
    );
};
const OptionBtn = styled.div<{ isSelected: boolean }>`
    border: 1px solid #dbdbdb;
    color: #dbdbdb;
    font-size: 14px;
    border-radius: 4px;
    padding: 2px 13px;
    margin-right: 3px;
    ${({ isSelected }) =>
        isSelected &&
        css`
            border-color: #5461bd;
            color: #5461bd;
        `}
`;
