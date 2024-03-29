import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../../assets/maxdaq_logo.png';
// import LogoImage from '../../../assets/logo.png';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import { Power2 } from 'gsap/gsap-core';
import gsap from 'gsap';

import { withRouter, RouteComponentProps } from 'react-router';
import TokenTimer from '../../common/TokenTimer';

interface PropsType extends RouteComponentProps {
    menus: Array<Record<string, any>> | undefined;
    children: React.ReactNode;
}

const ClientLayout = ({ menus = [], children, history }: PropsType) => {
    const { currentLanguage } = useCurrentLanguage();
    const NavbarRef = React.createRef<HTMLDivElement>();

    const handleHover = () => {
        gsap.to(NavbarRef.current, {
            height: '260px',
            ease: Power2.easeOut,
            duration: 0.5,
        });

        gsap.to(NavbarRef.current, {
            boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.17)',
            // duration: 0.5,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(NavbarRef.current, {
            height: '80px',
            ease: Power2.easeOut,
            duration: 0.5,
        });
        gsap.to(NavbarRef.current, {
            boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
        });
    };

    const handleRedirect = (link) => () => {
        history.push(link);
    };

    return (
        <>
            <NavibarContainer
                container
                alignItems="center"
                direction="column"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className="navibar-container"
                ref={NavbarRef}
            >
                <NavibarWrapper container alignItems="flex-start" justify="flex-start">
                    <ImageWrapper>
                        <img src={LogoImage} />
                    </ImageWrapper>
                    {menus.map((menu, index) => (
                        <Menu key={index}>
                            <MenuHeader>{menu[currentLanguage]}</MenuHeader>

                            {menu.subMenus &&
                                menu.subMenus.map((subMenu, index) => (
                                    <SubMenu key={index} onClick={handleRedirect(subMenu.link)}>
                                        {subMenu[currentLanguage]}
                                    </SubMenu>
                                ))}
                        </Menu>
                    ))}
                    <TokenTimerWrapper>
                        <TokenTimer />
                    </TokenTimerWrapper>
                </NavibarWrapper>
            </NavibarContainer>
            <ChildrenWrppaer>{children}</ChildrenWrppaer>
        </>
    );
};
export default withRouter(ClientLayout);

const TokenTimerWrapper = styled.div`
    height: 80px;
    line-height: 80px;
    position: absolute;
    right: 5px;
    display: flex;
    align-items: center;
`;

const ImageWrapper = styled.div`
    line-height: 75px;
    height: 40px;
    width: 110px;
    margin: 12.5px 0;
    margin-right: 10px;
`;
const NavibarContainer = styled(Grid)`
    width: 100vw;
    height: 80px;
    overflow: hidden;
    border: 1px solid #f0f0f0;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 9999;
`;

const NavibarWrapper = styled(Grid)`
    max-width: 1440px;
    position: relative;
`;
const MenuHeader = styled.div`
    height: 75px;
    line-height: 75px;
    color: #4d4d4d;

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 4px;
        background: #1890ff;
        transition: all 0.3s ease;
    }
`;
const Menu = styled.div`
    cursor: default;
    color: #4d4d4d;
    font-size: ${({ theme }) => theme.fontSizes.NavigationMenu};
    /* border-bottom: 5px solid #2e3a92; */
    padding: 0 30px;

    &:hover {
        ${MenuHeader}::after {
            width: 100%;
        }
    }
`;
const SubMenu = styled.div`
    height: 40px;
    line-height: 40px;
    color: #717171;

    font-size: ${({ theme }) => theme.fontSizes.NavigationSubMenu};
    cursor: pointer;
    &:hover {
        color: #2e3a92;
    }
`;

const ChildrenWrppaer = styled.div`
    margin-top: 100px;
`;
