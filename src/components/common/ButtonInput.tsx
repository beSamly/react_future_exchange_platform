import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import * as CONST from '../../constants/OrderTab';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import formatNumber from '../../lib/formatNumber';
import { StringLiteralLike } from 'typescript';

const priceSteps = [1, 10, 100, 1000, 10000];
const amountSteps = [1, 5, 10, 15, 20];

interface IButtonInputProps {
    target: string | undefined;
    handleChange: (target: string | undefined, value: number) => void;
    initialValue: number | undefined;
    disabled?: boolean;
    width?: string | number;
    stepButtonVisible?: boolean;
}

const ButtonInput = ({
    target,
    initialValue = 0,
    disabled = false,
    width = '65%',
    stepButtonVisible = true,
    handleChange = () => {
        alert('function not provided');
    },
}: IButtonInputProps) => {
    const [step, setStep] = useState<number>(target === CONST.TARGET_AMOUNT ? 1 : 100);
    const [value, setValue] = useState<number>();
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleIncreaseDecrease = (type: 'increase' | 'decrease') => () => {
        if (disabled || target === undefined) return;
        const value = type === 'increase' ? initialValue + step : initialValue - step;
        handleChange(target, value > 1 ? value : 1);
    };

    const handleOptionClick = (step: number) => () => {
        setIsOpened(false);
        setStep(step);
    };

    const handleMouseEnter = () => {
        setIsOpened(true);
    };

    const handleMouseLeave = () => {
        setIsOpened(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: width }}>
            <InputWrapper>
                <Input
                    onValueChange={(values) => {
                        handleChange(target, values.floatValue);
                    }}
                    thousandSeparator
                    isNumericString
                    allowLeadingZeros={false}
                    allowNegative={false}
                    value={initialValue !== 0 ? initialValue : ''}
                    disabled={disabled}
                />
                <MinusButton onClick={handleIncreaseDecrease('decrease')}>-</MinusButton>
                <PlusButton onClick={handleIncreaseDecrease('increase')}>+</PlusButton>
            </InputWrapper>
            {stepButtonVisible && (
                <IncreateOptionBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <ArrowDropDownIcon fontSize="large" style={{ cursor: 'pointer' }} />
                    <OptionsWrapper isOpened={isOpened}>
                        {(target === CONST.TARGET_AMOUNT ? amountSteps : priceSteps).map((option, index) => (
                            <Options key={index} onClick={handleOptionClick(option)}>
                                {option}
                            </Options>
                        ))}
                    </OptionsWrapper>
                </IncreateOptionBtn>
            )}
        </div>
    );
};

export default ButtonInput;

const Options = styled.div`
    padding: 6px 10px 6px 5px;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
        background-color: #f0ecec;
    }
`;
const OptionsWrapper = styled.div<{ isOpened: boolean }>`
    border-radius: 6px;
    border: 1px solid #8282d6;
    background-color: white;
    display: none;
    position: absolute;
    left: 100%;
    top: 0;
    ${({ isOpened }) =>
        css`
            display: ${isOpened ? 'block' : 'none'};
        `}
`;
const IncreateOptionBtn = styled.span`
    position: relative;
    &:hover {
        ${OptionsWrapper} {
            /* display: block; */
        }
    }
`;

const InputWrapper = styled(Grid)`
    align-items: center;
    display: flex;
    border: 1px solid #e7e7e7;
    padding: 0 0;
    margin: 3px 3px;

    &:hover {
        border: 1px solid #6e6eff;
        border-radius: 2px;
    }
`;

const Input = styled(NumberFormat)`
    width: 100%;
    /* width: 120px; */
    outline: none;
    height: 30px;
    padding: 5px;
    border: none;
    color: grey;
    border-radius: 2px;
`;
const BaseCalButton = styled.div`
    cursor: pointer;
    height: 100%;
    font-size: 20px;

    padding: 5px 10px 5px 10px;
    color: #a0a0a0;

    background-color: #fcfbfb;

    &:hover {
        color: #525252;
    }
`;
const PlusButton = styled(BaseCalButton)``;
const MinusButton = styled(BaseCalButton)`
    border-left: 1px solid #e7e7e7;
    border-right: 1px solid #e7e7e7;
`;
