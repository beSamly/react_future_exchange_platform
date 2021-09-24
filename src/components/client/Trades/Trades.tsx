import React from 'react';
import styled, { css } from 'styled-components';
import ScrollBar from '../../../styled/ScrollBar';

/*===================================
| data type needs to be refactored  |
=====================================*/
type PropsType = {
    style: Record<string, any>;
    data: Array<any>;
};

const Trades = ({ style, data }: PropsType) => {
    return (
        <TradeTableWrapper style={style}>
            <TradeTable>
                <TableHead>
                    <TableHeadRow>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Time</th>
                    </TableHeadRow>
                </TableHead>

                <TableBody>
                    {data.map(({ close, volume, tradeType, time, buyOrSell }, index) => (
                        <TableBodyRow key={index}>
                            <TableCoinData tradeType={tradeType} buyOrSell={buyOrSell}>
                                {close}
                            </TableCoinData>
                            <TableCoinData>{volume}</TableCoinData>
                            <TableCoinData>{time.slice(0, 10)}</TableCoinData>
                        </TableBodyRow>
                    ))}
                </TableBody>
            </TradeTable>
        </TradeTableWrapper>
    );
};

export default Trades;

const TradeTableWrapper = styled(ScrollBar)``;

const TradeTable = styled.table`
    width: 100%;
    border-collapse: separate;
    font-size: ${({ theme }) => theme.fontSizes.content};
`;

const TableHead = styled.thead``;
const TableHeadRow = styled.tr`
    & > th {
        width: 33.33%;
        text-align: center;
        vertical-align: middle;
        height: 40px;
        line-height: 40px;
        color: #5461bd;

        position: sticky;
        top: 0;
        left: 0;
        background-color: white;
        border-bottom: 1px solid #e9e9e9;
        z-index: 1;
    }
`;

const TableBody = styled.tbody``;
const TableBodyRow = styled.tr`
    /* height: ${({ theme }) => theme.tabMenu.rowHeight}; */
    height: 40px;
`;

const TableCoinData = styled.td<{ tradeType?: string; buyOrSell?: string }>`
    width: 33.33%;
    text-align: right;
    vertical-align: middle;
    padding-right: 35px;
    position: relative;
    border-bottom: 1px solid #e9e9e9;

    &:first-child {
        padding-right: 20px;
        color: ${({ buyOrSell }) => (buyOrSell === 'B' ? '#e56060' : '#5461bd')};

        &::before {
            display: block;
            content: '';
            height: 0;
            width: 0;
            position: absolute;
            left: 22px;
            top: 16px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 6px solid #e56060;
            ${({ buyOrSell }) =>
                buyOrSell === 'S'
                    ? css`
                          transform: rotate(180deg);
                          border-bottom: 6px solid #5461bd;
                      `
                    : css`
                          /* transform: rotate(180deg); */
                          border-bottom: 6px solid #d02129;
                      `}
        }
    }

    &:last-child {
        padding-right: 20px;
        font-size: 12px;
    }
`;
