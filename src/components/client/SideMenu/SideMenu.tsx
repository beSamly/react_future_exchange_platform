import React, { createRef, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import styled, { css } from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { TweenMax, Power2 } from 'gsap/gsap-core';
import gsap from 'gsap';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useRegisterLiveData from '../../../hooks/useRegisterLiveData';
import { KOREAN, ENGLISH } from '../../../constants/Language';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import { withRouter, RouteComponentProps } from 'react-router';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import PageNameList from '../../../constants/PageNameLIst';
import TokenTimer from '../../common/TokenTimer';

const Menus = [
    {
        name: {
            [KOREAN]: '플랫폼',
            [ENGLISH]: 'Platform',
        },
        isOpened: false,
        child: [
            {
                name: {
                    [KOREAN]: '거래소',
                    [ENGLISH]: 'Trading',
                },
                link: PageNameList.TRADE,
            },
        ],
    },
    {
        name: {
            [KOREAN]: '거래도구',
            [ENGLISH]: 'Trading tool',
        },
        isOpened: false,
        child: [
            {
                name: {
                    [KOREAN]: '유저잔고',
                    [ENGLISH]: 'Trading',
                },
                link: '/mobile/user/detail',
            },
            {
                name: {
                    [KOREAN]: '오토 트레이딩',
                    [ENGLISH]: 'Auto trading',
                },
            },
        ],
    },
    {
        name: {
            [KOREAN]: '환전',
            [ENGLISH]: 'Exchange',
        },
        isOpened: false,
        child: [
            {
                name: {
                    [KOREAN]: '환전 신청',
                    [ENGLISH]: 'Exchange coin',
                },
                link: PageNameList.EXCHANGE,
            },
            {
                name: {
                    [KOREAN]: '환전내역 조회',
                    [ENGLISH]: 'Exchange history',
                },
                link: PageNameList.EXCHANGE_HISTORY,
            },
        ],
    },
];

interface PropsType extends RouteComponentProps {
    handleClose: () => void;
    isOpened: boolean;
}

const SideMenu = ({ handleClose, isOpened, history }: PropsType) => {
    const sideMenuRef = createRef<HTMLDivElement>();
    const dispatch = useDispatch();
    const { register } = useRegisterLiveData();
    const { currentLanguage } = useCurrentLanguage();

    const [menus, setMenus] = useState(Menus);

    useEffect(() => {
        if (isOpened) {
            gsap.to(sideMenuRef.current, {
                left: '0',
                duration: 0.2,
                ease: Power2.easeOut,
            });
        } else {
            gsap.to(sideMenuRef.current, {
                left: '-100%',
                duration: 0.2,
                ease: Power2.easeOut,
            });
        }
    }, [isOpened]);

    const handleToggle = (index) => () => {
        const newMenu = menus.map((menu, i) => {
            if (index === i) {
                menu.isOpened = !menu.isOpened;
            }
            return menu;
        });
        setMenus(newMenu);
    };

    return (
        <>
            <SideMenuWrapper container ref={sideMenuRef} direction="column" justify="flex-start">
                <NavigationBar container direction="column">
                    <Grid container alignItems="center" justify="space-between">
                        <Grid>
                            <Grid container alignItems="center">
                                <ExitToAppIcon fontSize="large" />
                                <span style={{ paddingLeft: 10 }}>BMX</span>
                            </Grid>
                        </Grid>
                        <Grid onClick={handleClose}>
                            <CloseIcon />
                        </Grid>
                    </Grid>
                    <div style={{ height: 14 }}></div>
                    <Grid container alignItems="center" justify="space-between">
                        <TokenTimer isForMobile={true} />
                    </Grid>
                </NavigationBar>

                {menus.map((menu, index) => {
                    return (
                        <MenuWrapper key={index}>
                            <ParentMenuWrapper onClick={handleToggle(index)}>
                                <ParentMenu>{menu.name[currentLanguage]} </ParentMenu>
                                {menu.child && (
                                    <PlusMinus isMinus={menu.isOpened}>
                                        {menu.isOpened ? <RemoveIcon /> : <AddIcon />}
                                    </PlusMinus>
                                )}
                            </ParentMenuWrapper>
                            {menu.child && menu.isOpened && (
                                <ChildMenuWrapper>
                                    {menu.child.map((child, index) => (
                                        <ChildMenu
                                            key={index}
                                            onClick={() => {
                                                history.push(child.link as string);
                                            }}
                                        >
                                            {child.name[currentLanguage]}
                                        </ChildMenu>
                                    ))}
                                </ChildMenuWrapper>
                            )}
                        </MenuWrapper>
                    );
                })}
            </SideMenuWrapper>
            {isOpened && <BackgroundShadow onClick={handleClose} />}
        </>
    );
};

export default withRouter(SideMenu);

const PlusMinus = styled.div<{ isMinus: boolean }>`
    color: ${({ isMinus }) => (isMinus ? '#aaadbd' : '#a8b0da')};
`;
const ParentMenu = styled.div``;
const ParentMenuWrapper = styled.div`
    margin: 0 15px;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #e1e1e1;
    color: #4d4d4d;
`;
const ChildMenu = styled.div`
    padding: 10px 10px 10px 30px;
    color: #838383;
`;
const ChildMenuWrapper = styled.div`
    border-bottom: 1px solid #e1e1e1;
    margin: 0 15px;
`;
const MenuWrapper = styled.div`
    width: 100%;
`;

const NavigationBar = styled(Grid)`
    padding: 10px 15px;
    background-color: #5461bd;
    color: white;

    border-bottom: 1px solid #ededed;
`;

const SideMenuWrapper = styled(Grid)`
    font-size: 15px;
    position: absolute;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 80vw !important;
    background-color: white;
    z-index: 9999;
`;
const Wrapper = styled(Grid)`
    z-index: 1;
    width: 80vw !important;
    /* font-size: 15px;
    position: absolute;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 80vw !important;
    background-color: white;
    z-index: 9999; */
`;

const BackgroundShadow = styled.div`
    background-color: black;
    position: absolute;
    opacity: 0.3;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;
