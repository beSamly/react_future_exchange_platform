import React from 'react';
import { useEffect, useState } from 'react';
import useCurrentLanguage from '../../../hooks/useCurrentLanguage';
import useUsersData from '../../../hooks/useUserData';
import socketService from '../../../states/socketAgent/SocketService';
import { useTypedSelector } from '../../../states/useTypedSelector';
import { TransactionInputType } from '../../../types';
// import formatNumber from '../lib/formatNumber';

const dataColumnInKor = [
    '원장번호',
    '원원장순번',
    '적요코드',
    '입출금액',
    '예탁금',
    '일자',
    '시각',
    '체결번호',
    '대용화폐구분',
    '대용화폐입출금액',
];

const getTrInfo = ({ szAccNo, startDate, endDate, jwt, email }): TransactionInputType => {
    return {
        Header: { function: 'D', termtype: 'HTS', trcode: 't2910', userid: email, token: jwt },
        Input1: {
            szAccNo: szAccNo,
            nFromDate: startDate,
            nToDate: endDate,
            szPOcode: '999',
            szMemberNo: process.env.REACT_APP_SZ_MEMBER_NO,
        },
    };
};

type ReturnType = {
    data: Array<Array<string | number>>;
    dataColumn: Array<string>;
    refetch: ({ startDate, endDate }: { startDate: string; endDate: string }) => void;
};

const useExchangeHistory = (): ReturnType => {
    const { szAccNo, jwt, email } = useUsersData();
    const data = useTypedSelector((state) => state.stateReducer[`t2910`]);

    const refetch = ({ startDate, endDate }) => {
        if (!szAccNo || !jwt || !email) return;
        socketService.sendToAgent(getTrInfo({ szAccNo, startDate, endDate, jwt, email }));
    };

    return {
        data: data ? (data.Output2 !== undefined ? data.Output2 : [['내역 없음']]) : [],
        dataColumn: dataColumnInKor,
        refetch,
    };
};

export default useExchangeHistory;

// const parseData = (data) => {
//     return data.map((d) => formatNumber(d));
// };
