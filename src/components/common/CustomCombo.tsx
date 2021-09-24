import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

export const TypeEnum = {
    String: 'string',
    Text: 'text',
    Password: 'password',
    Email: 'email',
    Phone: 'phone',
    Number: 'number',
    ReadOnly: 'readOnly',
};

type TypeOfInput = typeof TypeEnum[keyof typeof TypeEnum];

type OptionType = {
    label: string;
    value: string | number;
};

type PropsType = {
    onChange?: (e) => void;
    options: Array<OptionType>;
    fontSize?: string | number;
};

const CustomCombo = ({ options, fontSize, onChange }: PropsType) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

    const handleChange = (e) => {
        const index = e.target.value;
        setSelectedOptionIndex(index);
    };

    return (
        <div>
            <FormControl variant="outlined" fullWidth={true}>
                <StSelect native onChange={handleChange} style={{ fontSize: fontSize }}>
                    {options.map((option, index) => (
                        <option key={index} value={index}>
                            {option.label}
                        </option>
                    ))}
                </StSelect>
            </FormControl>
        </div>
    );
};

export default CustomCombo;

const StSelect = styled(Select)`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    option {
        /* font-size: 16px; */
    }
`;
