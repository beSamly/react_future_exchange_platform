import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { SWITCH_LANGUAGE, USER_LOG_IN, SET_CURRENT_USER } from '../../states/reducers/userReducer';
import * as LANGUAGE from '../../constants/Language';
import { useTypedSelector } from '../../states/useTypedSelector';
import socketService from '../../states/socketAgent/SocketService';
import axios from 'axios';
import { AxiosRequest } from '../../lib/axiosRequest';

export default function Layout({ children, isVisible }) {
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
        }
    }, [loginBy]);

    useEffect(() => {
        if (loginState) {
            dispatch(USER_LOG_IN());
        }
    }, [loginState]);

    const userId = loginState && loginState.Output1 ? loginState.Output1.userid : null;

    const handleLogin = ({ userid, passwd }) => () => {
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
        agent_result && setLoginKey(agent_result);
    };

    const handleSwitchLang = (lang) => () => {
        dispatch(SWITCH_LANGUAGE({ language: lang }));
    };

    const handleAuthenticate = async () => {
        await AxiosRequest.post(`/authenticate`, {}, { withCredentials: true })
            .then((res) => {
                if (res.data.error) {
                    console.log(`res.data.error : `, res.data.error);
                } else if (res.data.success) {
                    console.log(`res.success : `, res.data);

                    // dispatch(
                    //     SET_CURRENT_USER({
                    //         szAccNo: res.data.accNo,
                    //         szPasswd: 'mypassword',
                    //         email: res.data.email,
                    //         jwt: res.data.jwt,
                    //     }),
                    // );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (!isVisible) return <div></div>;

    return (
        <>
            <Grid container justify="flex-end">
                <div>
                    <div>테스팅용 네비바 | 현재 접속된 유저 </div>
                    <Button variant="outlined" size="small" color="primary" onClick={handleSwitchLang(LANGUAGE.KOREAN)}>
                        Kor
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={handleSwitchLang(LANGUAGE.ENGLISH)}
                    >
                        Eng
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={handleLogin({ userid: 'test01 ', passwd: 'test01' })}
                    >
                        Login 0001
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={handleLogin({ userid: 'test03 ', passwd: 'test03' })}
                    >
                        Login 0003
                    </Button>
                    <Button variant="contained" size="small" color="primary" onClick={handleAuthenticate}>
                        User authenticate
                    </Button>
                </div>
            </Grid>
            <div>{children}</div>
        </>
    );
}
