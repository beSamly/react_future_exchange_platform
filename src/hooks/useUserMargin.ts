import { useEffect, useState } from 'react';
import formatNumber from '../lib/formatNumber';
import socketService from '../states/socketAgent/SocketService';
import { useTypedSelector } from '../states/useTypedSelector';
import { TransactionInputType } from '../types';
import useUsersData from './useUserData';

type UserMarginOutput = {
    data: Array<number>;
    dataColumn: Array<string>;
    refetch: () => void;
};

const dataColumn = [
    '예탁총액',
    '평가총액',
    '청산손익',
    '평가손익',
    '증거금 총액',
    '사용가능 자금',
    '주문 증거금',
    '마진셀비율',
];

const getTrInfo = ({ szAccNo, email, jwt }): TransactionInputType => {
    return {
        Header: { function: 'D', termtype: 'HTS', trcode: 't3608', userid: email, token: jwt },
        Input1: { szAccNo: szAccNo },
    };
};

const useUserMargin = (): UserMarginOutput => {
    const { szAccNo, email, jwt } = useUsersData();
    const data = useTypedSelector((state) => state.stateReducer[`t3608`]);

    const refetch = () => {
        if (szAccNo) {
            socketService.sendToAgent(getTrInfo({ szAccNo, email, jwt }));
        }
    };

    useEffect(() => {
        refetch();
    }, [szAccNo]);

    return {
        data: data ? parseData(data.Output2[0]) : [],
        dataColumn,
        refetch,
    };
};

const parseData = (data) => {
    return data.map((d) => formatNumber(d));
};

export default useUserMargin;
