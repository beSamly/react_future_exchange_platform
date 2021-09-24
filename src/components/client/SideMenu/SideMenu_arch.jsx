import React, { createRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { TweenMax, Power2 } from 'gsap/gsap-core';
import Button from '@material-ui/core/Button';
import useAgentToSend from '../../../hooks/useAgentToSend';
import { useDispatch } from 'react-redux';
import { SET_CURRENT_USER, USER_LOG_IN } from '../../../states/reducers/userReducer';
import useCurrentUser from '../../../hooks/useCurrentUser';
import useRegisterLiveData from '../../../hooks/useRegisterLiveData';
import { KOREAN, ENGLISH } from '../../../constants/Language';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import { withRouter } from 'react-router';

const leftMenus = ['상품설명', '서비스 내용', '거래도구', '수수료 비용'];
const rightMenus = ['거래', '오토 트레이닝', '주문/거래 현황', '정액 쿠폰', '투자유의 지정 안내'];

const goToLoginText = {
    [ENGLISH]: 'Login',
    [KOREAN]: '로그인',
};

const SideMenu = ({ handleClose, isOpened, history }) => {
    const { result, sendTransaction } = useAgentToSend();
    const sideMenuRef = createRef();
    const dispatch = useDispatch();
    const { register } = useRegisterLiveData();
    const { currentLanguage } = useCurrentLanguage();

    useEffect(() => {
        if (isOpened) {
            TweenMax.to(sideMenuRef.current, 0.2, {
                left: '0',
                ease: Power2.easeOut,
            });
        } else {
            TweenMax.to(sideMenuRef.current, 0.2, {
                left: '-100%',
                ease: Power2.easeOut,
            });
        }
    }, [isOpened]);

    useEffect(() => {
        console.log(`result ,`, result);
        if (result.Output1) {
            dispatch(USER_LOG_IN());
        }
    }, [result]);

    let userId = result.Output1 ? result.Output1.userid : null;
    const { data: currentUserData } = useCurrentUser({ szCustNo: userId });

    useEffect(() => {
        if (!currentUserData[0]) return;
        const lastThreeAccNo = currentUserData[0][0].slice(11, 14);
        const szPasswd = lastThreeAccNo === '001' ? '0000' : lastThreeAccNo === '003' ? '1234' : '';
        dispatch(SET_CURRENT_USER({ szAccNo: currentUserData[0][0], szPasswd: szPasswd }));
        register({ szAccNo: currentUserData[0][0] });
    }, [currentUserData[0]]);

    var handleLogin = ({ userid, passwd }) => (e) => {
        let info = {
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
        sendTransaction(info);
    };

    const handleRedirect = () => {
        history.push('/mobile/signin');
    };
    return (
        <SideMenuWrapper ref={sideMenuRef} container direction="column" justify="flex-start">
            <NavigationBar container alignItems="center" justify="space-between">
                <Grid style={{ color: '#4D4D4D' }}>
                    <Grid container alignItems="center">
                        <ExitToAppIcon fontSize="large" />
                        <span style={{ paddingLeft: 10 }}>로그인</span>
                    </Grid>
                </Grid>
                <Grid onClick={handleClose}>
                    <CloseIcon fontSize="large" style={{ color: '#909090' }} />
                </Grid>
            </NavigationBar>
            <Grid container justify="flex-end">
                <Button variant="contained" size="small" color="primary" onClick={handleRedirect}>
                    {goToLoginText[currentLanguage]}
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
            </Grid>

            <Grid container style={{ flex: '1' }}>
                <LeftGrid>
                    {leftMenus.map((menu) => (
                        <LeftMenu>{menu}</LeftMenu>
                    ))}
                </LeftGrid>
                <RightGrid>
                    {rightMenus.map((menu) => (
                        <RightMenu>{menu}</RightMenu>
                    ))}
                </RightGrid>
            </Grid>
        </SideMenuWrapper>
    );
};

export default withRouter(SideMenu);

const NavigationBar = styled(Grid)`
    padding: 10px 15px;
    height: 70px;
    border-bottom: 1px solid #ededed;
`;
const SideMenuWrapper = styled(Grid)`
    font-size: 15px;
    position: absolute;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 100vw;
    background-color: white;
    z-index: 9999;
`;

const LeftMenu = styled.div``;
const LeftGrid = styled(Grid)`
    width: 37%;
    background-color: #f3f3f3;
    height: 100%;

    ${LeftMenu} {
        padding: 22px 26px 0 22px;
        color: #4d4d4d;
    }
`;
const RightMenu = styled.div``;
const RightGrid = styled(Grid)`
    flex: 1;
    height: 100%;
    ${RightMenu} {
        padding: 22px 26px 0 22px;
        color: #838383;
    }
`;
