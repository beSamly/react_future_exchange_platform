import React from 'react';
import Grid from '@material-ui/core/Grid';
import TabMenu from '../../../components/common/TabMenu';
import OpenOrders from '../../../components/client/UserTabComponents/OpenOrders';
import TradingHistory from '../../../components/client/UserTabComponents/TradingHistory';
import OpenPositions from '../../../components/client/UserTabComponents/OpenPositions';
import PositionDetail from '../../../components/client/UserTabComponents/PositionDetail';
import DebugHelper from '../../../components/common/DebugHelper';
import OrderTabMenu from '../../../components/client/OrderTabComponents/OrderTabs';
import CoinInfo from '../../../components/client/CoinInfo';
import FavoriteList from '../../../components/client/SymbolList/FavoriteList';
import SymbolList from '../../../components/client/SymbolList';
import Chart from '../../../components/client/Chart';
import OrderConcluded from '../../../components/client/OrderConcluded';
import OrderRegistered from '../../../components/client/OrderRegistered';
import Trades from '../../../components/client/Trades';
import UserMargin from '../../../components/client/UserMargin';
import OrderBook from '../../../components/client/OrderBook';
import SymbolDetail from '../../../components/client/SymbolDetail';
import { useSelector } from 'react-redux';
import * as LANGUAGE from '../../../constants/Language';
import NewOrderFormTest from '../../../components/client/OrderTabComponents/NewOrder/NewOrderFormTest';
import MessageBox from '../../../components/client/MessageBox';
import ClientLayout from '../../../components/client/ClientLayout';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';

const TradingPage = () => {
    const { currentLanguage } = useCurrentLanguage();
    const isDebugMode: string | null = new URLSearchParams(window.location.search).get('debug');

    return (
        <ClientLayout>
            <div
                style={{
                    maxWidth: 1440,
                    margin: 'auto',
                    minWidth: 1440,
                    overflow: 'auto',
                }}
            >
                <Grid container justify="center" alignItems="flex-start">
                    <Grid item xs={'auto'}>
                        <Grid style={{ marginRight: '15px' }}>
                            <CoinInfo />
                        </Grid>
                        <Grid
                            container
                            style={{
                                margin: '15px 15px 15px 0',
                            }}
                        >
                            <Grid>
                                <Chart />
                            </Grid>
                            <Grid>
                                <TabMenu
                                    menu={
                                        currentLanguage === LANGUAGE.KOREAN
                                            ? ['호가', '체결']
                                            : ['Order Book', 'Trades']
                                    }
                                    components={[<OrderBook key={0} />, <Trades key={1} />]}
                                    tabWidth={200}
                                />
                            </Grid>
                        </Grid>
                        <Grid container alignItems="flex-start" style={{ marginRight: '15px' }}>
                            <Grid
                                style={{
                                    marginRight: '10px',
                                }}
                            >
                                <TabMenu
                                    menu={
                                        currentLanguage === LANGUAGE.KOREAN ? ['현황', '디테일'] : ['Margin', 'Detail']
                                    }
                                    components={[<UserMargin key={0} />, <SymbolDetail key={1} />]}
                                    tabHeight={45}
                                    tabWidth={108}
                                />
                            </Grid>
                            <Grid>
                                <TabMenu
                                    reloadComponent={true}
                                    menu={
                                        currentLanguage === LANGUAGE.KOREAN
                                            ? ['미체결내역', '거래내역', '종목잔고', '미청산내역']
                                            : ['Open Orders', 'Trading History', 'Open Positions', 'Positions Detail']
                                    }
                                    tabWidth={189}
                                    components={[
                                        <OpenOrders key={0} />,
                                        <TradingHistory key={1} />,
                                        <OpenPositions key={2} />,
                                        <PositionDetail key={3} />,
                                    ]}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <OrderTabMenu language={currentLanguage} />
                        <Grid style={{ marginTop: '15px' }}>
                            <TabMenu
                                menu={
                                    currentLanguage === LANGUAGE.KOREAN ? ['종목', '관심종목'] : ['Symbol', 'Favorite']
                                }
                                components={[<SymbolList key={0} />, <FavoriteList key={1} />]}
                                tabWidth={210}
                                tabHeight={45}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <MessageBox />
                <DebugHelper isVisible={isDebugMode ? true : false}>{isDebugMode && <DebugKits />}</DebugHelper>
            </div>
        </ClientLayout>
    );
};
export default TradingPage;

const DebugKits = () => {
    return (
        <>
            <div style={{ width: 450, border: '1px solid grey' }}>
                <NewOrderFormTest />,
            </div>
            <OrderRegistered />
            <OrderConcluded />
        </>
    );
};
