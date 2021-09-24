import React from 'react';
import { getToday } from '../../../lib/formatDate';
import socketService from '../../../states/socketAgent/SocketService';

type minusCoinPlusPointPropsType = {
    szAccNo: string;
    szPasswd: string;
    szCurNo: string;
    amount: number;
    pointToPlus: number;
    email: string;
    jwt: string;
};

type plusCoinMinusPointPropsType = {
    szAccNo: string;
    szPasswd: string;
    szCurNo: string;
    amount: number;
    pointToMinus: number;
    email: string;
    jwt: string;
};

type ReturnType = {
    minusCoinPlusPoint: (props: minusCoinPlusPointPropsType) => void;
    plusCoinMinusPoint: (props: plusCoinMinusPointPropsType) => void;
};

const getTrInfoForPlusPoint = ({ szAccNo, email, jwt, szPasswd = '0000', pointToPlus }) => {
    return {
        Header: { function: 'D', termtype: 'HTS', trcode: 't211C', userid: email, token: jwt },
        Input1: {
            nDate: getToday(),
            szAccNo: szAccNo,
            szPasswd: szPasswd,
            szPNCode: '526',
            szPOCode: '120',
            fCashBalanceM: pointToPlus,
            szRACode: '0001',
            szOutputCur: '00',
            fMoney: '',
            szMemo: '',
            szStaffID: '',
            szStaffPwd: '',
        },
    };
};

const getTrInfoForMinusPoint = ({ szAccNo, email, jwt, szPasswd = '0000', pointToMinus }) => {
    return {
        Header: { function: 'D', termtype: 'HTS', trcode: 't221C', userid: email, token: jwt },
        Input1: {
            nDate: getToday(),
            szAccNo: szAccNo,
            szPasswd: szPasswd,
            szPNCode: '526',
            szPOCode: '125',
            fCashOutM: pointToMinus,
            szRACode: '0011',
            szOutputCur: '00',
            fMoney: '',
            szMemo: '',
            szStaffID: '',
            szStaffPwd: '',
        },
    };
};

const getTrInfoForCoinUpdate = ({ szAccNo, email, jwt, szPasswd = '0000', szCurNo, amount, minusOrPlus }) => {
    return {
        Header: {
            function: 'D',
            termtype: 'HTS',
            trcode: 't365C',
            userid: email,
            token: jwt,
        },
        Input1: {
            szAccNo: szAccNo,
            szPasswd: szPasswd,
            szCurNo: szCurNo,
            fOrderSu: amount,
            fPrice: 34400,
            fExePrice: 34400,
            szOrdType: 'EOM',
            nRange: 0,
            nAlivingTerm: 0,
            szDealDiv: minusOrPlus === 'plus' ? '079' : '081',
            fNxOpenRate: '',
            szOrgCustItem: '',
            szNotMemberAccNo: '',
            szStaffID: '',
            szStaffPW: '',
            cIsStaff: '0',
            szAcceptTime: '20210624142507',
            szOrderID: '',
            szEXPosID: '',
            txid: '',
        },
    };
};

const useHandleExchange = (): ReturnType => {
    const minusPoint = ({ szAccNo, szPasswd, pointToMinus, email, jwt }) => {
        socketService.sendToAgent(getTrInfoForMinusPoint({ szAccNo, szPasswd, pointToMinus, email, jwt }));
    };

    const plusPoint = ({ szAccNo, szPasswd, pointToPlus, email, jwt }) => {
        const tr = getTrInfoForPlusPoint({ szAccNo, szPasswd, pointToPlus, email, jwt });
        console.log(`plus point tr : `, tr);
        socketService.sendToAgent(tr);
    };
    const minusCoin = ({ szAccNo, szPasswd, szCurNo, amount, email, jwt }) => {
        const tr = getTrInfoForCoinUpdate({ szAccNo, szPasswd, szCurNo, amount, minusOrPlus: 'minus', email, jwt });
        console.log(`minus coin tr : `, tr);
        socketService.sendToAgent(tr);
    };

    const plusCoin = ({ szAccNo, szPasswd, szCurNo, amount, email, jwt }) => {
        //do smts
        const tr = getTrInfoForCoinUpdate({ szAccNo, szPasswd, szCurNo, amount, minusOrPlus: 'plus', email, jwt });
        console.log(`plus coin tr : `, tr);
        socketService.sendToAgent(tr);
    };

    const plusCoinMinusPoint = ({ szAccNo, szPasswd, szCurNo, amount, pointToMinus, email, jwt }) => {
        plusCoin({ szAccNo, szPasswd, szCurNo, amount, email, jwt });
        minusPoint({ szAccNo, szPasswd, pointToMinus, email, jwt });
    };

    const minusCoinPlusPoint = ({ szAccNo, szPasswd, szCurNo, amount, pointToPlus, email, jwt }) => {
        minusCoin({ szAccNo, szPasswd, szCurNo, amount, email, jwt });
        plusPoint({ szAccNo, szPasswd, pointToPlus, email, jwt });
    };

    return { plusCoinMinusPoint, minusCoinPlusPoint };
};

export default useHandleExchange;
