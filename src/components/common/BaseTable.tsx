import React, { useMemo } from 'react';
import styled from 'styled-components';
import ScrollBar from '../../styled/ScrollBar';

interface IBaseTableProps {
    data: Array<any>;
    dataColumn: Array<any>;
    maxWidth?: number | string;
    maxHeight?: number | string;
    rowHeight?: number;
    disableClick?: boolean;
    handleClick?: (data: Record<string, any>) => () => void;
}

const BaseTable = ({
    data = [],
    dataColumn = [],
    maxWidth = 580,
    maxHeight = 580,
    rowHeight = 60,
    disableClick = false,
    handleClick = () => () => {
        alert('function not provided');
    },
}: IBaseTableProps) => {
    const keys = dataColumn;

    const tableStyle = useMemo(() => ({ maxWidth, maxHeight, height: maxHeight }), []);
    const rowStyle = useMemo(() => ({ height: rowHeight }), []);

    const emptyHandleClick = () => () => {
        // click is disabled
    };

    return (
        <Wrapper style={tableStyle}>
            <StTable>
                <thead>
                    <HeaderRow>
                        {keys &&
                            keys.map((key, i) => (
                                <th key={key}>
                                    <div></div>
                                    {key}
                                </th>
                            ))}
                    </HeaderRow>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <ContentRow
                            key={i}
                            style={rowStyle}
                            onClick={!disableClick ? handleClick(d) : emptyHandleClick()}
                        >
                            {keys.map((key, index) => (
                                <TableData key={index}>{d[index]}</TableData>
                            ))}
                        </ContentRow>
                    ))}
                </tbody>
            </StTable>
        </Wrapper>
    );
};

export default React.memo(BaseTable);

const Wrapper = styled(ScrollBar)`
    overflow: auto;
`;

const HeaderRow = styled.tr``;
const ContentRow = styled.tr`
    /* &:hover {
    background-color: #f3ebeb !important;
  } */
`;
const StTable = styled.table`
    border-collapse: collapse;
    border-radius: 15px;
    width: 100%;

    ${HeaderRow} {
        white-space: nowrap;

        th {
            text-align: center;
            color: #818181;
            background: #f2f2f2;
            font-size: 14px;

            padding: 7px 15px;
            position: sticky;
            top: 0px;
        }
    }
`;

const TableData = styled.td`
    white-space: nowrap;
    text-align: center;
    font-size: 13px;
    vertical-align: middle;
    border-bottom: 1px solid #e3e3e3;
`;
