import React, { useEffect } from 'react';
import styled from 'styled-components';
import useUserMargin from '../../../hooks/useUserMargin';
import formatNumber from '../../../lib/formatNumber';

type PropsType = {
    style: Record<string, any>;
};

const UserMargin = ({ style }: PropsType) => {
    const { data: userMargin, dataColumn: menuData } = useUserMargin();

    return (
        <Menu style={style}>
            {menuData.map((menu, index) => (
                <Item key={index}>
                    <Category>{menuData[index]}</Category>
                    <Data>{userMargin.length > 0 && userMargin[index]}</Data>
                </Item>
            ))}
        </Menu>
    );
};

export default React.memo(UserMargin);

const Menu = styled.ul`
    padding: 10px 0;
    font-size: ${({ theme }) => theme.fontSizes.content};
`;

const Item = styled.li`
    display: flex;
    height: ${({ theme }) => theme.tabMenu.rowHeight};
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    &:hover {
        /* cursor: pointer; */
        background-color: #f5f6fb;
        font-weight: 700;
        color: #5461bd;
    }
    & > span {
        display: inline-block;
        line-height: 40px;
        vertical-align: middle;
    }
`;

const Category = styled.span``;

const Data = styled.span`
    width: 100px;
    text-align: right;
`;
