/*=======================================================================
선택된종목에 근거하여 등록해야할 실시간 및 tr.
1.t9731 차트조회 => Trade,Chart 컴포넌트에서 사용
3.92 실시간 호가 10단
=========================================================================*/
import { useEffect, useMemo, useState } from 'react';
import socketService from '../states/socketAgent/SocketService';
import { useTypedSelector } from '../states/useTypedSelector';
import { TransactionInputType } from '../types';

// 92번 호가10단 실시간
const getInputForNinetyTwo = ({ symbol }): TransactionInputType => {
    return {
        Header: {
            function: 'A', // 응답시 'F'
            termtype: 'HTS',
            trcode: '92',
        },
        Input1: {
            Key1: symbol, // symbol name
        },
    };
};

// 차트조회 tr
const getInputForChart = ({ symbol }): TransactionInputType => ({
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't9731',
        trid: '1',
    },
    Input1: {
        szCurNo: symbol,
        cTermDiv: '3',
        szCritDate: '99999999',
        szCritTime: '999999999',
        nMinTerm: '1',
        nReqCnt: '2000',
    },
});

const useInitUponSymbolSelection = () => {
    const currentSymbol = useTypedSelector((state) => state.symbolReducer.currentSymbol);
    useEffect(() => {
        socketService.sendToAgent(getInputForChart({ symbol: currentSymbol }));
        socketService.sendToAgent(getInputForNinetyTwo({ symbol: currentSymbol }), 'Key1');
        console.log('fucking sent : ', getInputForNinetyTwo({ symbol: currentSymbol }));
    }, [currentSymbol]);

    return {};
};

export default useInitUponSymbolSelection;
