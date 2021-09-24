import useAgentWhenSignedIn from '../../../../hooks/useAgentWhenSignedIn';
import { useTypedSelector } from '../../../../states/useTypedSelector';
import { TransactionInputType } from '../../../../types';

type InputPropsType = {
    szAccNo: string | undefined;
    email: string | undefined;
    szAccNoPW: string | undefined;
    jwt: string | undefined;
};

const input = ({ szAccNo, szAccNoPW, email, jwt }: InputPropsType) => ({
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't3600',
        userid: email,
        token: jwt,
    },
    Input1: {
        szAccNo,
        szAccNoPW,
    },
});

const output2Column = [
    '회원처리항목',
    '종목코드',
    '매매구분',
    '주문가격',
    '주문수량',
    '현재가',
    'Stop',
    'Limit',
    '주문상태',
    '주문시각',
    '주문유형',
];

const output2ColumnInEng = [
    'szCustItem char(80)',
    'szCurNo char(12)',
    'szSide char(3)',
    'szRate double(22.8)',
    'fLot double(22.8)',
    'szQuote double(22.8)',
    'szStop double(22.8)',
    'szLimit double(22.8)',
    'szStatus char(1)',
    'szOrderDateTime char(30)',
    'szOrderType char(5)',
];

type ReturnType = {
    data: any;
    dataColumn: Array<string>;
    isSuccess: boolean;
};

const useData = (): ReturnType => {
    const userReducerData = useTypedSelector((state) => state.userReducer.data);
    const { szAccNo, szPasswd, email, jwt } = userReducerData;

    const { trResult } = useAgentWhenSignedIn({
        input: input({ szAccNo, szAccNoPW: szPasswd, email, jwt }) as TransactionInputType,
    });

    return {
        data: trResult && trResult.Output2 ? trResult.Output2 : [],
        dataColumn: output2Column,
        isSuccess: trResult && trResult.Output1 ? true : false,
    };
};

export default useData;
