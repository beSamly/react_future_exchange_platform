import React from 'react';
import styled from 'styled-components';
import useLatestSymbolInfo from '../../../hooks/useLatestSymbolInfo';
import useSymbolList from '../../../hooks/useSymbolList';
import { useTypedSelector } from '../../../states/useTypedSelector';
import CoinPrice from './CoinPrice';
import CoinSelect from './CoinSelect';
import SpotCoinList from './SpotCoinList';

const Index = () => {
    const currentSymbol = useTypedSelector((state) => state.symbolReducer.currentSymbol);
    const { symbols: symbolList } = useSymbolList();

    const symbolInfo = symbolList.length ? symbolList.find((symbolInfo) => symbolInfo.CUR_NO === currentSymbol) : {};
    const { close, volume, curNo, preClose, status, changePerc } = useLatestSymbolInfo({ symbolInfo });

    return (
        <CoinInfoWrapper>
            <CoinInfoLowerWrapper>
                <CoinPriceUpperWrapper>
                    <div>
                        <CoinSelect />
                        <CoinPrice price={preClose} changePerc={changePerc} status={status} />
                    </div>
                    <SpotCoinList />
                </CoinPriceUpperWrapper>
            </CoinInfoLowerWrapper>
        </CoinInfoWrapper>
    );
};

export default Index;

const CoinInfoWrapper = styled.div`
    width: 986px;
    height: 115px;
    border: 1px solid #e3e3e3;
    border-radius: 6px;
`;

const CoinInfoLowerWrapper = styled.div`
    border-top: 1px solid #e3e3e3;
    padding: 20px;
`;

const CoinPriceUpperWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
