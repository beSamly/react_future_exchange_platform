import React from 'react';
import useExchangeHistory from './useExchangeHistory';
import Calendar from '../../common/Calendar';
import { useState } from 'react';
import styled from 'styled-components';
import BaseTable from '../../common/BaseTable';
import { Grid } from '@material-ui/core/';
import * as LANGUAGE from '../../../constants/Language';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';

const exchangeHistoryText = (language) => {
    switch (language) {
        case LANGUAGE.KOREAN:
            return '환전 신청내역';
        case LANGUAGE.ENGLISH:
            return 'Exchnage history';
        default:
            return '환전 신청내역';
    }
};

const ExchangeHistory = () => {
    const { data, dataColumn, refetch } = useExchangeHistory();
    const { currentLanguage } = useCurrentLanguage();
    const [startDate, setStartDate] = useState<string>();
    const [endDate, setEndDate] = useState<string>();

    const handleDateSelect = (isStartDate) => (date) => {
        isStartDate ? setStartDate(date) : setEndDate(date);
    };

    const handleSubmit = () => {
        //do smtm
        if (!startDate || !endDate) return;
        refetch({ startDate, endDate });
    };

    return (
        <Wrapper>
            <Grid container alignItems="center" justify="space-between">
                <div style={{ width: '47%' }}>
                    <Calendar label="시작 일" handleDateSelect={handleDateSelect(true)} />
                </div>
                <div style={{ width: '47%' }}>
                    <Calendar label="마지막 일" handleDateSelect={handleDateSelect(false)} />
                </div>
            </Grid>
            <ExchangeButton onClick={handleSubmit}>조회</ExchangeButton>
            {data.length > 0 && (
                <>
                    <div style={{ height: 10 }}></div>
                    <Text>{exchangeHistoryText(currentLanguage)}</Text>
                    <BaseTable
                        data={data}
                        dataColumn={dataColumn}
                        maxWidth="100%"
                        maxHeight={660}
                        disableClick={true}
                    />
                </>
            )}
        </Wrapper>
    );
};

export default ExchangeHistory;

const Wrapper = styled.div`
    padding: 6px;
`;

const ExchangeButton = styled.div`
    background: #5461bd;
    border-radius: 4px;
    color: white;
    text-align: center;
    line-height: 42px;
    height: 42px;
    cursor: pointer;

    &:hover {
        background: #4d59b5;
    }
`;

const Text = styled.div`
    color: #63677b;
    margin-bottom: 8px;
`;
