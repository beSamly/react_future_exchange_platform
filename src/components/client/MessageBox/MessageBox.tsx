import styled from 'styled-components';
import React, { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default function MessageBox({ data }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <MessageBoxWrapper>
            <div>{data[0]}</div>
            <ExpandButton onClick={handleClick} />
            <HiddenMessages isVisible={isExpanded}>
                {data.map((d, i) => (
                    <div key={i}>{d}</div>
                ))}
            </HiddenMessages>
        </MessageBoxWrapper>
    );
}

MessageBox.defaultProps = {
    data: [],
};

const MessageBoxWrapper = styled.div`
    position: relative;
    border: 1px solid blue;
    border-radius: 2px;
    box-sizing: border-box;
`;
const HiddenMessages = styled.div<{ isVisible: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
const ExpandButton = styled(ArrowDropDownIcon)`
    font-size: 18px;
    position: absolute;
    top: 0;
    right: 0;
`;
