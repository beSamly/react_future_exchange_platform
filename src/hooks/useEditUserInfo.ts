import React from 'react';
import socketService from '../states/socketAgent/SocketService';
import { useTypedSelector } from '../states/useTypedSelector';
import useUsersData from './useUserData';

const getTrInfo = ({ email, jwt, szFlag }: { email: string; jwt: string; szFlag: string }) => {
    return {
        Header: {
            function: 'D',
            termtype: 'HTS',
            trcode: 't113C',
            userid: email,
            token: jwt,
        },
        Input1: {
            szFlag,
            szMemberNo: '000',
            szCustNo: 'program2@gmail.com   ',
            szPasswd: 'password',
            szField_No: '01',
            szField_Data1: 'password',
            szField_Data2: 'password1',
        },
    };
};

type ReturnType = {
    sendTrToGetUserInfo: () => void;
    sendTrToEditUserInfo: () => void;
    result: any;
};

const useEditUserInfo = (): ReturnType => {
    const { email, jwt } = useUsersData();
    const trResult = useTypedSelector((state) => state.stateReducer['t113C']);

    const sendTrToGetUserInfo = () => {
        if (!email || !jwt) return;
        socketService.sendToAgent(getTrInfo({ email, jwt, szFlag: '0' }));
    };

    const sendTrToEditUserInfo = () => {
        if (!email || !jwt) return;
        socketService.sendToAgent(getTrInfo({ email, jwt, szFlag: '1' }));
    };

    return {
        sendTrToGetUserInfo,
        sendTrToEditUserInfo,
        result: trResult && trResult.Output1 ? parseResult(trResult.Output1) : {},
    };
};

const parseResult = (Output1) => {
    return {
        email: Output1.szEmail,
        phone: Output1.szTelNo2,
    };
};

export default useEditUserInfo;
