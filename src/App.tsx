import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TradingPage from './pages/client/TradingPage/';
import WalletPage from './pages/client/WalletPage/';
import LandingPage from './pages/client/LandingPage/';
import ClientRoute from './routes/ClientRoute';
import useInitScreenSize from './hooks/useInitScreenSize';
import SignIn from './components/client/MobileSingInUp/SignIn';
import SignUp from './components/client/MobileSingInUp/SignUp';
import UsersDetailPage from './pages/client/UsersDetailPage_m/';
import TradingViewChart from './components/client/TradingViewChart/';
import { useTypedSelector } from './states/useTypedSelector';
import socketService from './states/socketAgent/SocketService';
import PageNameList from './constants/PageNameLIst';
import ExchangePage from './pages/client/ExchangePage/ExchangePage';
import InitComponent from './components/common/InitComponent';
import ExchangeHistoryPage from './pages/client/ExchangeHistoryPage';
import UserAuthenticate from './components/common/UserAuthenticate';
import EditUserInfoPage from './pages/client/EditUserInfoPage';

const App = () => {
    const dispatch = useDispatch();
    const state = useTypedSelector((state) => state.agentState);
    const {} = useInitScreenSize();

    const { ws } = state;

    useEffect(() => {
        socketService.setDispatch(dispatch);
        socketService.init();
    }, [ws, dispatch]);

    process.env.REACT_APP_AUTH_SERVER_HOST =
        process.env.NODE_ENV === 'production'
            ? process.env.REACT_APP_AUTH_SERVER_HOST_PROD
            : process.env.REACT_APP_AUTH_SERVER_HOST_DEV;
    console.log(`NODE_ENV : `, process.env.NODE_ENV, process.env.REACT_APP_AUTH_SERVER_HOST);

    if (!state.connected) return <div>Socket connecting....</div>;

    return (
        <BrowserRouter>
            <InitComponent />
            <UserAuthenticate />
            <Switch>
                <ClientRoute path={PageNameList.MAIN} exact component={LandingPage} />
                <ClientRoute path={PageNameList.TRADE} exact component={TradingPage} />
                <ClientRoute path={PageNameList.WALLET} exact component={WalletPage} />
                <ClientRoute path={PageNameList.EXCHANGE} exact component={ExchangePage} />
                <ClientRoute path={PageNameList.EXCHANGE_HISTORY} exact component={ExchangeHistoryPage} />
                <ClientRoute path={PageNameList.EDIT_USER_INFO_PAGE} exact component={EditUserInfoPage} />
                <Route path={PageNameList.MOBILE_SIGNUP} exact component={SignUp} />
                <Route path={PageNameList.MOBILE_SIGNIN} exact component={SignIn} />
                <Route path={PageNameList.MOBILE_USERS_DETAIL} exact component={UsersDetailPage} />
                {/* <Route path="/chart" exact component={TradingViewChart} />  */}
            </Switch>
        </BrowserRouter>
    );
};

export default App;
