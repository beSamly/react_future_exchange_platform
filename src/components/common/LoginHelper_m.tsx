import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { SWITCH_LANGUAGE, USER_LOG_IN, SET_CURRENT_USER } from '../../states/reducers/userReducer';
import useCurrentUser from '../../hooks/useCurrentUser';
import * as LANGUAGE from '../../constants/Language';
import { useTypedSelector } from '../../states/useTypedSelector';
import socketService from '../../states/socketAgent/SocketService';

const MobileLoginHelper = ({ isVisible = false }) => {
    const [loginKey, setLoginKey] = useState<string>('');
    const agent = useTypedSelector((state) => state.agentState);
    const loginState = useTypedSelector((state) => state.stateReducer[loginKey]);
    const isLoggedIn = useTypedSelector((state) => state.userReducer.isLoggedIn);

    const dispatch = useDispatch();

    // Only for demo purpose
    const loginBy = new URLSearchParams(window.location.search).get('login');

    useEffect(() => {
        if (loginBy === '0001') {
            handleLogin({ userid: 'test01 ', passwd: 'test01' })();
        } else if (loginBy === '0003') {
            handleLogin({ userid: 'test03 ', passwd: 'test03' })();
        } else if (loginBy === '0005') {
            handleLogin({ userid: 'leokim88 ', passwd: 'kim1962' })();
        }
    }, [loginBy]);

    useEffect(() => {
        if (loginState) {
            dispatch(USER_LOG_IN());
        }
    }, [loginState]);

    const userId = loginState && loginState.Output1 ? loginState.Output1.userid : null;
    const { data: currentUserData } = useCurrentUser({ szCustNo: userId });

    useEffect(() => {
        if (!currentUserData[0]) return;
        const lastThreeAccNo = currentUserData[0][0].slice(11, 14);
        const szPasswd = lastThreeAccNo === '001' ? '0000' : lastThreeAccNo === '003' ? '1234' : '';
        dispatch(SET_CURRENT_USER({ szAccNo: currentUserData[0][0], szPasswd: szPasswd }));
    }, [currentUserData[0]]);

    const handleLogin = ({ userid, passwd }) => () => {
        // e.preventDefault();
        // 0001 account
        // let info = {
        //   Header: { function: "D", termtype: "HTS", trcode: "login" },
        //   Input1: {
        //     userid: "test01",
        //     passwd: "test01",
        //     ipaddr: "211.13.238.186",
        //     ibno: "000",
        //     usertype: "4",
        //     demo: "0",
        //     retry: "1",
        //     usecert: "",
        //     version: "00",
        //     mac_addr: "",
        //   },
        // };
        // 0003 account
        const info = {
            Header: { function: 'D', termtype: 'HTS', trcode: 'login' },
            Input1: {
                userid,
                passwd,
                // ipaddr: "211.13.238.186",
                ibno: '000',
                usertype: '4',
                demo: '0',
                retry: '1',
                usecert: '',
                version: '00',
                mac_addr: '',
            },
        };

        //tr은 sendToAgent의 세번째 parameter로 key name를 지정해주지 않습니다
        const agent_result = socketService.sendToAgent(info);
        console.log(`login key in login helper : `, agent_result);
        agent_result && setLoginKey(agent_result);
    };

    const handleSwitchLang = (lang) => () => {
        dispatch(SWITCH_LANGUAGE({ language: lang }));
    };

    if (!isVisible) return <div></div>;

    return <></>;
};

export default MobileLoginHelper;
