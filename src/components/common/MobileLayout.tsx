import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import SideMenu from '../client/SideMenu/SideMenu';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../assets/maxdaq_logo.png';
// import Logo from '../../assets/logo.png';
import CoinSelect from '../client/CoinInfo/CoinSelect';

const MobileLayout = ({ children }) => {
    const [sideMenuOpened, setSideMenuOpened] = useState<boolean>(false);

    const handleClick = () => {
        setSideMenuOpened(true);
    };

    const handleClose = () => {
        setSideMenuOpened(false);
    };

    return (
        <Wrapper>
            <SideMenu handleClose={handleClose} isOpened={sideMenuOpened} />
            <Grid style={{ width: '100vw', height: '100vh' }}>
                <NavigationBar container justify="space-between" alignItems="center">
                    <Grid>
                        <LogoWrapper>
                            <img src={Logo} style={{ width: '100%', height: '100%' }} />
                        </LogoWrapper>
                    </Grid>
                    <CoinSelect />
                    <Grid onClick={handleClick}>
                        <MenuIcon fontSize="large" />
                    </Grid>
                </NavigationBar>
                <ChildrenWrapper>{children}</ChildrenWrapper>
            </Grid>
        </Wrapper>
    );
};

export default MobileLayout;

const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const LogoWrapper = styled.div`
    width: 63px;
`;
const NavigationBar = styled(Grid)`
    /* width: 100vw; */
    padding: 0px 15px;
    height: 60px;
    border-bottom: 1px solid #fafafa;
`;

const ChildrenWrapper = styled(Grid)`
    overflow: auto;
    max-height: calc(100% - 60px);
`;
