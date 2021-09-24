import { useEffect } from 'react';
import socketService from '../states/socketAgent/SocketService';
import { useTypedSelector } from '../states/useTypedSelector';
import { TransactionInputType } from '../types';
import useAgentWhenSignedIn from './useAgentWhenSignedIn';

const input = ({ szAccNo, email, jwt }): TransactionInputType => ({
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't372C',
        userid: email,
        token: jwt,
    },
    Input1: {
        szAccNo,
    },
});

// const outputColumnInEng = ['nCurBusiDate', 'nPrevBusiDate', 'nNextBusiDate '];
const outputColumnInKor = [
    '체결번호',
    '종목코드2',
    ' 동일 종목 수량 ',
    '매매구분',
    '진입환율나중에구현',
    '현재환율',
    '일일손익',
    '체결환율',
    '손익(지수)',
    '총손익',
    '이자율',
    '수수료',
    '체결수수료',
    '롤오버',
    '순손익',
    '주문유형',
    '만기일',
    '체결 시각',
    '소수최저자리',
];

type ReturnType = {
    data: Array<Record<string, number | string>>;
    dataColumn: Array<string>;
    refetch: () => void;
};

const useGetUsersCoinList = (): ReturnType => {
    const userReducerData = useTypedSelector((state) => state.userReducer.data);
    const { szAccNo, email, jwt } = userReducerData;

    const data = useTypedSelector((state) => state.stateReducer[`t372C`]);

    const refetch = () => {
        if (szAccNo) {
            socketService.sendToAgent(input({ szAccNo, email, jwt }));
        }
    };

    useEffect(() => {
        refetch();
    }, [szAccNo]);

    return {
        data: data && data.Output2 ? parseData(data.Output2) : [],
        dataColumn: outputColumnInKor,
        refetch,
    };
};

const parseData = (data) => {
    return data.map((d) => ({
        name: d[1].trim(),
        amount: Number(d[2]),
    }));
};

export default useGetUsersCoinList;
