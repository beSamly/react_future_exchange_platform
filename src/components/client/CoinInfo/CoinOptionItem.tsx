import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { UPDATE_CURRENT_SYMBOL } from '../../../states/reducers/symbolReducer';

interface PropsType {
    symbolCode: string;
    toggleSymbolListOpen: () => void;
}

const CoinOptionItem = ({ symbolCode, toggleSymbolListOpen }: PropsType) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(UPDATE_CURRENT_SYMBOL(symbolCode));
        toggleSymbolListOpen();
    };

    return (
        <OptionItem onClick={handleClick}>
            <OptionName>{symbolCode}</OptionName>
        </OptionItem>
    );
};

export default React.memo(CoinOptionItem);

const OptionItem = styled.li`
    width: 100%;
    font-size: 16px;
    border: 0;
    padding: 5px 15px;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
    }
`;

const OptionName = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 37.65px;
`;
