import React, { useEffect, useState } from 'react';
import socketService from '../states/socketAgent/SocketService';
import { useTypedSelector } from '../states/useTypedSelector';
import { TransactionInputType } from '../types';
import useAgentWhenNotSignedIn from './useAgentWhenNotSignedIn';

const dataColumn = ['일자', '시간', '시가', '고가', '저가', '종가', '거래량'];
const dataColumnInKor = ['통화', '매수', '매도', '기준율'];
const dataColumnInEng = ['Currency', 'Buy', 'Sell', 'Reference rate'];

// 차트조회 tr
const getInputForChart = ({ symbol }): TransactionInputType => ({
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't9731',
    },
    Input1: {
        szCurNo: `BNC_${symbol}USDT`,
        cTermDiv: '3',
        szCritDate: '99999999',
        szCritTime: '999999999',
        nMinTerm: '1',
        nReqCnt: '2000',
    },
});

type ReturnType = {
    data: Array<Array<string | number>>;
    dataColumn: Array<string>;
    latestSzClose: number;
};

const useCoinRate = ({ symbol }): ReturnType => {
    const trResult = useTypedSelector((state) => state.stateReducer[`t9731`]);
    const latestDataArr = useTypedSelector((state) => state.stateReducer[`91_BNC_${symbol}USDT`]);
    const latestRate = latestDataArr ? latestDataArr[0].Output1.szClose : undefined;
    const [data, setData] = useState<Array<Array<string | number>>>([]);
    const [latestSzClose, setLatestSzClose] = useState<number>(0);

    useEffect(() => {
        if (!latestDataArr || !latestRate) return;
        const newRate = [symbol, Number(latestRate) - 10, Number(latestRate) + 10, Number(latestRate)];
        setData([newRate, ...data.slice(0, 9)]);
        setLatestSzClose(Number(latestRate));
    }, [latestRate]);

    useEffect(() => {
        if (!trResult || !trResult.Output1) return;
        const arr = trResult.Output1.reverse().slice(0, 10);
        setData(formatData(arr));
    }, [trResult]);

    useEffect(() => {
        if (!symbol) return;
        socketService.sendToAgent(getInputForChart({ symbol }));
    }, [symbol]);

    const formatData = (data) => {
        return data.map((d) => [symbol, d[4] - 10, d[4] + 10, d[4]]);
    };

    return { data: symbol ? data : [], dataColumn: dataColumnInKor, latestSzClose };
};

export default useCoinRate;
