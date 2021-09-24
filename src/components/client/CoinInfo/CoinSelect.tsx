import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import useSymbolList from '../../../hooks/useSymbolList';
import CoinOptionList from './CoinOptionList';
import coinSvg from './coinSvg';

const CoinSelect = () => {
    const [symbolListOpen, setSymbolListOpen] = useState(false);

    const { currentSymbol } = useSymbolList();

    const toggleSymbolListOpen = useCallback(() => {
        setSymbolListOpen((prev) => !prev);
    }, []);

    return (
        <CoinSelectWrapper>
            <CoinSelectedWrapper onClick={toggleSymbolListOpen}>
                {/* <CoinSelectedIcon>{coinSvg['ETH']}</CoinSelectedIcon> */}
                <CoinSelected>{currentSymbol}</CoinSelected>
                <CoinSelectedArrow symbolListOpen={symbolListOpen} />
            </CoinSelectedWrapper>
            {symbolListOpen && <CoinOptionList toggleSymbolListOpen={toggleSymbolListOpen} />}
        </CoinSelectWrapper>
    );
};

export default React.memo(CoinSelect);

const CoinSelectWrapper = styled.div`
    /* height: 72px; */
    /* padding: 20px; */
    z-index: 10;
`;

const CoinSelectedWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 38px;
    border: none;
`;

const CoinSelected = styled.span`
    font-weight: 700;
    size: 26px;
    line-height: 37.65px;
    margin: 0px 10px;
    cursor: pointer;
    &:hover {
        color: black;
    }
`;

const CoinSelectedIcon = styled.div`
    width: 33px;
    height: 33px;
`;

const CoinSelectedArrow = styled.div<{ symbolListOpen: boolean }>`
    height: 0;
    width: 0;
    position: relative;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #a6a6a8;
    top: 1px;
    ${({ symbolListOpen }) =>
        symbolListOpen &&
        css`
            transform: rotate(180deg);
            top: -1px;
        `}
`;
