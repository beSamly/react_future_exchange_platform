import useAgentWhenSignedIn from '../../../../hooks/useAgentWhenSignedIn';
import { useTypedSelector } from '../../../../states/useTypedSelector';
import { TransactionInputType } from '../../../../types';

const input = ({ date, szAccNo, email, jwt }): TransactionInputType => {
    return {
        Header: {
            function: 'D',
            termtype: 'HTS',
            trcode: 't3612',
            userid: email,
            token: jwt,
        },
        Input1: {
            szAccNo,

            nFromDate: date.fromDate,
            nToDate: date.toDate,
        },
    };
};

const output2Column = [
    '회원처리항목',
    '체결번호',
    '종목코드2',
    '주문수량',
    '체결수량',
    '매매구분',
    '주문환율',
    '체결환율',
    '주문형태',
    '주문시각',
    '체결시각',
    '소수최저자리',
];

type ReturnType = {
    data: Array<Array<string | number>>;
    dataColumn: Array<string>;
};

const useData = ({ date }): ReturnType => {
    const userReducerData = useTypedSelector((state) => state.userReducer.data);
    const { szAccNo, email, jwt } = userReducerData;

    const inputField = input({ date, szAccNo, email, jwt });
    const { trResult } = useAgentWhenSignedIn({
        input: inputField,
        dependency: [inputField.Input1.nFromDate, inputField.Input1.nToDate],
    });

    const parseData = (data) => {
        const newData = [...data];
        return newData.map((d, i) => {
            const newD = [...d];
            // 회원처리번호
            newD[0] = newD[0].slice(15, 21);
            // 체결번호
            newD[1] = newD[1].slice(10, 16);
            return newD;
        });
    };

    return {
        data: trResult && trResult.Output2 ? parseData(trResult.Output2) : [],
        dataColumn: output2Column,
    };
};

export default useData;
