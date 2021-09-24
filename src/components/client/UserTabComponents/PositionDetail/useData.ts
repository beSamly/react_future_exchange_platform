import useAgentWhenSignedIn from '../../../../hooks/useAgentWhenSignedIn';
import { useTypedSelector } from '../../../../states/useTypedSelector';
import { TransactionInputType } from '../../../../types';

type InputPropsType = {
    szAccNo: string | undefined;
    email: string | undefined;
    jwt: string | undefined;
};

const input = ({ szAccNo, email, jwt }: InputPropsType): TransactionInputType => ({
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't3720',
        userid: email,
        token: jwt,
    },
    Input1: {
        szAccNo: szAccNo,
    },
});

const output2Column = [
    '체결번호',
    '종목코드2',
    '동일 종목 수량',
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
    data: Array<Array<string | number>>;
    dataColumn: Array<string>;
};

const useData = (): ReturnType => {
    const userReducerData = useTypedSelector((state) => state.userReducer.data);
    const { szAccNo, email, jwt } = userReducerData;
    const { trResult } = useAgentWhenSignedIn({
        input: input({ szAccNo, email, jwt }),
    });

    return {
        data: trResult && trResult.Output2 ? trResult.Output2 : [],
        dataColumn: output2Column,
    };
};

export default useData;
