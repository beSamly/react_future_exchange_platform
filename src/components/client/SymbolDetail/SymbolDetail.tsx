import React from 'react';
import styled from 'styled-components';
import useSymbolDetail from '../../../hooks/useSymbolDetail';
import formatNumber from '../../../lib/formatNumber';
import { useTypedSelector } from '../../../states/useTypedSelector';
import ScrollBar from '../../../styled/ScrollBar';

const menuData = [
    '종목코드',
    '명칭영문',
    '명칭한글',
    '거래소코드',
    '주기-1',
    '주기-2',
    '주기-3',
    '종목코드',
    '상품코드',
    '만기일자',
    '잔존일수',
    '최초거래일자',
    '최종거래일자',
    '최초거래시간',
    '최종거래시간',
    '만기종료시간',
    '최대주문수량',
    '최소주문수량',
    '호가최저단위',
    '호가가치',
    '거래가능',
];

const SymbolDetail = ({ style }: { style: Record<string, string | number> }) => {
    const currentSymbol = useTypedSelector((state) => state.symbolReducer.currentSymbol);

    const detail = useSymbolDetail(currentSymbol);

    const dataArr = detail && Object.values(detail);

    return (
        <Menu style={style}>
            {menuData.map((menu, index) => (
                <Item key={index}>
                    <Category>{menuData[index]}</Category>
                    <Data>{detail && dataArr[index]}</Data>
                </Item>
            ))}
        </Menu>
    );
};

export default React.memo(SymbolDetail);

const Menu = styled(ScrollBar)`
    padding: 10px 0;
    font-size: ${({ theme }) => theme.fontSizes.content};
`;

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({ theme }) => theme.tabMenu.rowHeight};
    width: 100%;
    padding: 0 10px;
    &:hover {
        background-color: #f5f6fb;
        font-weight: 500;
        color: #5461bd;
    }
    & > span {
        display: inline-block;
        line-height: 16px;
        vertical-align: middle;
    }
`;

const Category = styled.span``;

const Data = styled.span`
    width: 100px;
    text-align: right;
    letter-spacing: -1.5px;
`;
