const inputColumn = [
    'nDate',
    'szAccNo',
    'szPNCode',
    'szPOCode',
    'fCashBalanceM',
    'fInputBillM',
    'fEtcBillM',
    'szRACode',
    'szInputCur',
    'fMoney',
    'szStaffID',
    'szStaffPwd',
    'szMemo',
    'szUserID',
    'szRequest_Name',
];
const inputColumnInKor = [
    '일자',
    '계좌정보',
    '계정번호',
    '적요번호',
    '현금입금액',
    '수표입금액',
    '기타수표액',
    '업무구분',
    '입금 화폐',
    '입금 원화폐금액',
    '직원아이디',
    '직원비밀번호',
    '비고',
    'user 아이디',
    '의뢰인성명',
];

const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't7110' },
    Input1: {
        nDate: '',
        szAccNo: '',
        szPNCode: '',
        szPOCode: '',
        fCashBalanceM: '',
        fInputBillM: '',
        fEtcBillM: '',
        szRACode: '',
        szInputCur: '',
        fMoney: '',
        szStaffID: '',
        szStaffPwd: '',
        szMemo: '',
        szUserID: '',
        szRequest_Name: '',
    },
};

const outputOneInKor = [
    '계좌번호',
    '이름',
    '계정번호',
    '적요번호',
    '현금',
    '수표',
    '기타수표',
    '원장번호',
    '예수금 잔금',
];
const outputOne = [
    'szAccNo',
    'szName',
    'szPNCode',
    'szPOCode',
    'fCashBalanceM',
    'fInputBillM',
    'fEtcBillM',
    'fLedgerIndex',
    'fInputM',
];

// config file format
const config = {
    firstLevelMenu: '총괄계좌',
    secondLevelMenu: '',
    pageName: '총괄계좌 입금',
    link: '7460',

    Header: { function: 'D', termtype: 'HTS', trcode: 't7110' },
    Input1: {
        nDate: '',
        szAccNo: '',
        szPNCode: '',
        szPOCode: '',
        fCashBalanceM: '',
        fInputBillM: '',
        fEtcBillM: '',
        szRACode: '',
        szInputCur: '',
        fMoney: '',
        szStaffID: '',
        szStaffPwd: '',
        szMemo: '',
        szUserID: '',
        szRequest_Name: '',
    },
    outputOneOrTwo: 'one',
    inputColumnInKor: [
        '일자',
        '계좌정보',
        '계정번호',
        '적요번호',
        '현금입금액',
        '수표입금액',
        '기타수표액',
        '업무구분',
        '입금 화폐',
        '입금 원화폐금액',
        '직원아이디',
        '직원비밀번호',
        '비고',
        'user 아이디',
        '의뢰인성명',
    ],

    outputColumnInKor: [
        '계좌번호',
        '이름',
        '계정번호',
        '적요번호',
        '현금',
        '수표',
        '기타수표',
        '원장번호',
        '예수금 잔금',
    ],
};

export default config;

const trExample = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't7110',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        nDate: '20210718',
        szAccNo: '99910057100001',
        szPNCode: '526',
        szPOCode: '001',
        fCashBalanceM: '123000',
        szRACode: '0001',
        szStaffID: 'teller01',
        szStaffPwd: '1234',
    },
};
