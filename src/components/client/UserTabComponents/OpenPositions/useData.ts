import useAgentWhenSignedIn from '../../../../hooks/useAgentWhenSignedIn';
import useSymbolList from '../../../../hooks/useSymbolList';
import { useTypedSelector } from '../../../../states/useTypedSelector';
import { TransactionInputType } from '../../../../types';

type InputPropsType = {
    szAccNo: string | undefined;
    email: string | undefined;
    szAccNoPW: string | undefined;
    jwt: string | undefined;
    currentSymbol: string | undefined;
};

const input = ({ szAccNo, szAccNoPW, email, jwt, currentSymbol }: InputPropsType): TransactionInputType => ({
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't3602',
        userid: email,
        token: jwt,
    },
    Input1: {
        szAccNo,
        szAccNoPW,
        szCurNo: '',
    },
});

const output2Column = [
    '포지션ID',
    '종목명',
    '매매구분',
    '주문가',
    '수량',
    '현재가',
    '스톱',
    '리밋',
    '총손익',
    '평가손익',
    '이자',
    '상태',
    '체결시각',
    '회원처리항목',
    'Stop회원처리항목',
    'Limit회원처리항목',
    '체결일자',
    'Market',
];

const output2ColumnInEng = [
    'szTicketNo',
    'szCurNo',
    'szSide',
    'szRate',
    'fLot',
    'szQuote',
    'szStop',
    'szLimit',
    'fTotalPL',
    'fGrossPL',
    'fInterest',
    'szStatus',
    'szOrderTime',
    'szCustItem',
    'szStopItem',
    'szLimitItem',
    'nPrOpenDate',
    'Market',
    'Stop M/C',
    'Limit M/C',
];

type ReturnType = {
    data: Array<Array<string | number>>;
    dataColumn: Array<string>;
    isSuccess: boolean;
    refetchData: () => void;
};

const useData = (): ReturnType => {
    const userReducerData = useTypedSelector((state) => state.userReducer.data);
    const { currentSymbol } = useSymbolList();
    const { szAccNo, szPasswd, email, jwt } = userReducerData;

    const { trResult, refetchData } = useAgentWhenSignedIn({
        input: input({ szAccNo, szAccNoPW: szPasswd, email, jwt, currentSymbol }),
    });

    return {
        data: trResult && trResult.Output2 ? trResult.Output2 : [],
        dataColumn: output2Column,
        isSuccess: trResult && trResult.Output1,
        refetchData,
    };
};

export default useData;
