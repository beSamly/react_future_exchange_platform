import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BaseTable from '../../../common/BaseTable';
import LogInRequired from '../../../common/LogInRequired';
import Options from './Options';
import useData from './useData';
import { getPastday, getToday } from './calendarDateFormat';
import { style, mobileStyle } from '../common/tableStyle';
import useScreenSize from '../../../../hooks/useScreenSize';

export default function Index() {
    const operatingHourData = useSelector((state) => state.userReducer.operatingHour);

    const [date, setDate] = useState({
        // fromDate: undefined,
        // toDate: undefined,
        fromDate: getPastday(7),
        toDate: getToday(),
    });

    useEffect(() => {
        if (!operatingHourData.nCurBusiDate) return;
        setDate({
            fromDate: operatingHourData.nPrevBusiDate.toString(),
            toDate: operatingHourData.nCurBusiDate.toString(),
        });
    }, [operatingHourData.nCurBusiDate]);

    const { data: tradingHistoryData, dataColumn } = useData({
        date,
    });

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [availablePages, setAvailablePages] = useState();
    const [limit, setLimit] = useState(15);

    const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
    const { isMobile } = useScreenSize();

    useEffect(() => {
        let newData = tradingHistoryData.slice(0, limit);
        setAvailablePages(Math.ceil(tradingHistoryData.length / limit));
        setData(newData);
        setCurrentPage(1);
    }, [tradingHistoryData.length]);

    useEffect(() => {
        let start = limit * (currentPage - 1);
        let end = start + limit;
        let newData = tradingHistoryData.slice(start, end);
        setData(newData);
    }, [currentPage]);

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handlePage = (value) => () => {
        if (value === -1) {
            currentPage !== 1 && setCurrentPage(currentPage + value);
        } else if (value === 1) {
            currentPage !== availablePages && setCurrentPage(currentPage + value);
        }
    };

    const tradingHistroyProps = {
        data,
        dataColumn,
        tableFor: 'trading-history',
    };

    const optionsProps = {
        date,
        availablePages,
        currentPage,
        handlePage,
        handleDateChange,
    };

    const PcStyle = {
        ...style,
        maxHeight: style.maxHeight - 40,
    };
    const styleProps = isMobile ? mobileStyle : PcStyle;

    const logInStyleProps = isMobile
        ? {
              width: '100%',
              height: '200px',
          }
        : {};

    return isLoggedIn ? (
        <>
            <Options {...optionsProps} />
            <BaseTable {...tradingHistroyProps} {...styleProps} />
        </>
    ) : (
        <LogInRequired {...logInStyleProps} />
    );
}
