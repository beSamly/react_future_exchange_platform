import React, { useMemo, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ScrollBar from '../../styled/ScrollBar';
import { TweenMax } from 'gsap';
import usePipLowest from '../../hooks/usePipLowest';
import formatNumber from '../../lib/formatNumber';
import TableSkeleton from '../client/UserTabComponents/common/TableSkeleton';
import { useTypedSelector } from '../../states/useTypedSelector';

const DEAL_DIV_INDEX_IN_OPEN_ORDERS = 2;
const SYMBOL_ID_INDEX = 1;

interface IEachRowProps {
    d: any;
    originalData: any;
    keys: any;
    rowIndex: any;
    rowStyle: any;
    handleClickForStopLimitMarket?: (data: Record<string, any>, stopOrLimit: 'stop' | 'limit' | 'market') => () => void;
    handleClickForStopAndLimitModifyCancel?: (data: Record<string, any>, stopOrLimit: 'stop' | 'limit') => () => void;
    handleClickForOpenOrders?: (data: Record<string, any>, dealDiv: '079' | '080' | '081' | '082') => () => void;
    rowFor: string;
}

const EachRow = React.memo<IEachRowProps>(
    ({
        d,
        originalData,
        keys,
        rowIndex,
        rowStyle,
        handleClickForStopLimitMarket = () => () => {
            alert('function not provided');
        },
        handleClickForStopAndLimitModifyCancel = () => () => {
            alert('function not provided');
        },
        handleClickForOpenOrders = () => () => {
            alert('function not provided');
        },
        rowFor,
    }) => {
        const szCurLiveData = useTypedSelector((state) => state.stateReducer[`91_${d[SYMBOL_ID_INDEX]}`]);
        const pipLowest = usePipLowest({ symbolId: d[SYMBOL_ID_INDEX] });

        const element = React.createRef();
        const [row, setRow] = useState(d);

        const updateRowForOpenOrders = (currentPrice) => {
            const newRow = [...row];
            newRow[5] = currentPrice;
            setRow(newRow);
        };

        const updateRowForPositionDetails = (currentPrice) => {
            const newRow = [...row];
            newRow[5] = currentPrice;
            setRow(newRow);
        };

        useEffect(() => {
            if (szCurLiveData) {
                const lastElement = szCurLiveData[szCurLiveData.length - 1];
                let currentPrice = lastElement.Output1.szClose;
                currentPrice = formatNumber(currentPrice, pipLowest);
                rowFor === 'open-orders'
                    ? updateRowForOpenOrders(currentPrice)
                    : updateRowForPositionDetails(currentPrice);
            }
        }, [szCurLiveData?.length]);

        useEffect(() => {
            // element.current.setAttribute("style", "background-color:none");
            // TweenMax.from(element.current, 1, {
            //   backgroundColor: "rgba(250,250,250,0.3)",
            // });
        }, []);

        const renderForOpenOrders = () => {
            return (
                <ContentRow
                    key={d[0]}
                    style={{ ...rowStyle, cursor: 'pointer' }}
                    onClick={handleClickForOpenOrders(originalData[rowIndex], d[DEAL_DIV_INDEX_IN_OPEN_ORDERS])}
                >
                    {keys.map((key, fieldIndex) => (
                        <Field key={fieldIndex} value={row[fieldIndex]} />
                    ))}
                </ContentRow>
            );
        };

        const renderForOpenPositions = () => {
            return (
                <ContentRow key={d[0]} style={rowStyle}>
                    {keys.map((key, fieldIndex) => {
                        // indx 6 = stop / index 7 = limit
                        if (fieldIndex === 6) {
                            return (
                                <Field
                                    key={fieldIndex}
                                    value={row[fieldIndex]}
                                    onClick={
                                        parseInt(row[fieldIndex]) === 0
                                            ? handleClickForStopLimitMarket(originalData[rowIndex], 'stop')
                                            : handleClickForStopAndLimitModifyCancel(originalData[rowIndex], 'stop')
                                    }
                                    fieldStyle={{
                                        color: 'red',
                                        cursor: 'pointer',
                                    }}
                                />
                            );
                        } else if (fieldIndex === 7) {
                            return (
                                <Field
                                    key={fieldIndex}
                                    value={row[fieldIndex]}
                                    onClick={
                                        parseInt(row[fieldIndex]) === 0
                                            ? handleClickForStopLimitMarket(originalData[rowIndex], 'limit')
                                            : handleClickForStopAndLimitModifyCancel(originalData[rowIndex], 'limit')
                                    }
                                    fieldStyle={{
                                        color: 'blue',
                                        cursor: 'pointer',
                                    }}
                                />
                            );
                        } else if (fieldIndex === keys.length - 1) {
                            return (
                                <Field
                                    key={fieldIndex}
                                    value={'Market'}
                                    onClick={handleClickForStopLimitMarket(originalData[rowIndex], 'market')}
                                    fieldStyle={{
                                        color: 'red',
                                        cursor: 'pointer',
                                    }}
                                />
                            );
                        } else {
                            return <Field key={fieldIndex} value={row[fieldIndex]} />;
                        }
                    })}
                </ContentRow>
            );
        };

        return rowFor === 'open-orders' ? renderForOpenOrders() : renderForOpenPositions();
    },
);

interface ICustomerTableProps {
    isSuccess: boolean;
    data: Record<string, any>;
    dataColumn;
    tableFor: 'open-positions' | 'open-orders';
    originalData: Array<any>;
    maxWidth: number;
    maxHeight: number;
    rowHeight: number;
    handleClickForOpenOrders: () => () => void;
    clickEventForOpenPositions: {
        handleClickForStopLimitMarket: () => () => void;
        handleClickForStopAndLimitModifyCancel: () => () => void;
    };
}

const CustomerTable = ({
    isSuccess = false,
    data = [],
    dataColumn = [],
    originalData = [],
    maxWidth = 580,
    maxHeight = 580,
    rowHeight = 60,
    tableFor,
    handleClickForOpenOrders = () => () => {
        alert('handle click function not provided');
    },
    clickEventForOpenPositions = {
        handleClickForStopLimitMarket: () => () => {
            alert('StopLimitMarket not provided');
        },
        handleClickForStopAndLimitModifyCancel: () => () => {
            alert('StopAndLimitModifyCancel function not provided');
        },
    },
}: ICustomerTableProps) => {
    const keys = dataColumn;

    const tableStyle = useMemo(() => ({ maxWidth, maxHeight, minHeight: maxHeight }), []);
    const rowStyle = useMemo(() => ({ height: rowHeight }), []);
    const { handleClickForStopLimitMarket, handleClickForStopAndLimitModifyCancel } = clickEventForOpenPositions;

    const renderTableBodyForOpenPositions = () => {
        return data.map((d, rowIndex) => (
            //here
            <EachRow
                d={d}
                key={JSON.stringify(d)}
                originalData={originalData}
                keys={keys}
                rowIndex={rowIndex}
                rowStyle={rowStyle}
                handleClickForStopLimitMarket={handleClickForStopLimitMarket}
                handleClickForStopAndLimitModifyCancel={handleClickForStopAndLimitModifyCancel}
                rowFor={tableFor}
            />
        ));
    };

    const renderTableBodyForOpenOrders = () => {
        return data.map((d, rowIndex) => (
            <EachRow
                key={JSON.stringify(d)}
                d={d}
                originalData={originalData}
                keys={keys}
                rowIndex={rowIndex}
                rowStyle={rowStyle}
                handleClickForStopLimitMarket={handleClickForStopLimitMarket}
                handleClickForStopAndLimitModifyCancel={handleClickForStopAndLimitModifyCancel}
                handleClickForOpenOrders={handleClickForOpenOrders}
                rowFor={tableFor}
            />
        ));
    };
    return (
        <Wrapper style={tableStyle}>
            {data.length || isSuccess ? (
                <StTable>
                    <thead>
                        <HeaderRow>{keys && keys.map((key, i) => <th key={key}>{key}</th>)}</HeaderRow>
                    </thead>

                    <tbody>
                        {tableFor === 'open-positions'
                            ? renderTableBodyForOpenPositions()
                            : renderTableBodyForOpenOrders()}
                    </tbody>
                </StTable>
            ) : (
                <TableSkeleton style={tableStyle} />
            )}
        </Wrapper>
    );
};

export default React.memo(CustomerTable);

const Wrapper = styled(ScrollBar)`
    overflow: auto;
`;

const HeaderRow = styled.tr``;
const ContentRow = styled.tr`
    height: ${({ theme }) => theme.tabMenu.rowHeight};

    td:first-child {
        text-align: end;
        padding-right: 20px;
    }

    &:hover {
        td {
            border-spacing: 0;
            border-bottom: 1px;
            border-top: 1px;
            border-style: double;
            border-top-color: #8d92dd;
            border-bottom-color: #8d92dd;
        }

        td:first-child {
            border-left: 1px;
            border-left-color: #8d92dd;
            border-style: double;
        }
        td:last-child {
            border-right: 1px;
            border-right-color: #8d92dd;
            border-style: double;
        }
    }
`;
const StTable = styled.table`
    border-radius: 15px;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.content};

    ${HeaderRow} {
        white-space: nowrap;

        th {
            border-bottom: 1px solid #ebebeb;
            text-align: center;
            color: #818181;
            background: #f2f2f2;
            font-size: 14px;

            padding: 7px 14px;
            position: sticky;
            top: 0;
        }
    }
`;

interface IFieldProps {
    value: string | number;
    key: number;
    fieldStyle?: Record<string, any>;
    onClick?: () => void;
}

const Field = ({ value, fieldStyle = {}, onClick }: IFieldProps) => {
    return (
        <Td style={fieldStyle} onClick={onClick}>
            {value}
        </Td>
    );
};

const Td = styled.td`
    padding: 0 4px;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #e3e3e3;
`;
