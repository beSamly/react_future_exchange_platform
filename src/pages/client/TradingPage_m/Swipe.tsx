import { Grid } from '@material-ui/core';
import React, { useState, createRef } from 'react';
import styled, { css } from 'styled-components';
import useScrollableMenuTab from './useScrollableMenuTab';

export default function Swipe({ components, menus, reloadComponent = false }) {
    const [touchStart, setTouchStart] = useState(0);
    const [screenWidth] = useState(window.screen.width);
    const [numOfComponents] = useState(components.length);
    const [touchEnd, setTouchEnd] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentSlideRef = createRef();

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 170) {
            moveSliderRight();
        } else if (touchStart - touchEnd < -170) {
            moveSliderLeft();
        }
    }

    const moveSliderLeft = () => {
        currentIndex === 0 ? setCurrentIndex(numOfComponents - 1) : setCurrentIndex(currentIndex - 1);
    };
    const moveSliderRight = () => {
        currentIndex === numOfComponents - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    };

    const handleClick = (index) => () => {
        setCurrentIndex(index);
    };

    return (
        <Grid container>
            <HeaderComponent menus={menus} handleClick={handleClick} currentIndex={currentIndex} />
            <ContentWrapper>
                {reloadComponent ? (
                    <>
                        <Content isCurrent={true}>{components[currentIndex]}</Content>
                    </>
                ) : (
                    components.map((component, index) => (
                        <Content key={index} isCurrent={currentIndex === index}>
                            {component}
                        </Content>
                    ))
                )}
            </ContentWrapper>
        </Grid>
    );
}

const HeaderComponent = ({ menus, handleClick, currentIndex }) => {
    return (
        <Header>
            <MenuWrapper style={{ minWidth: menus.length * 100 }}>
                {menus.map((menu, index) => (
                    <Menu key={index} isCurrent={index === currentIndex ? true : false} onClick={handleClick(index)}>
                        {menu}
                    </Menu>
                ))}
            </MenuWrapper>
        </Header>
    );
};

const Menu = styled.div<{ isCurrent: boolean }>`
    height: 100%;
    margin: 0px 10px;
    line-height: 46px;
    color: #959595;
    ${({ isCurrent }) =>
        isCurrent &&
        css`
            font-weight: 700;
            border-bottom: 3px solid #1c266d;
            color: #1c266d;
        `}
`;
const Header = styled.div`
    width: 100vw;
    height: 52px;
    overflow-x: auto;
    transform: translate(0, 0);

    background: #ffffff;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Content = styled.div<{ isCurrent: boolean }>`
    height: 100%;
    width: 100%;
    display: ${({ isCurrent }) => (isCurrent ? 'block' : 'none')};
`;

const ContentWrapper = styled.div`
    height: calc(100vh - 112px);
    width: 100vw;
    overflow: auto;
`;

const ContentSlide = styled.div`
    position: relative;
    display: flex;
    height: 100%;
`;
