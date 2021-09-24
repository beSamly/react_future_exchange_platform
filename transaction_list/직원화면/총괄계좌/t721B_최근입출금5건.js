const inputColumn = ['szAccNo'];
const inputColumnInKor = ['계좌번호'];

const input = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't721B',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        szAccNo: '00010057300067',
    },
};

const outputOneInKor = [
    '예탁총액현금',
    '원장순번',
    '원원장번호',
    '적요코드',
    '입금액',
    '잔액',
    '처리일자',
    '체결번호',
    '업무구분',
    '비고',
    '입력오류위치',
    '처리응답 메시지',
    '정상처리여부',
];

const outputOne = [
    'fDepoTotalM',
    'nLedgerIdx',
    'nOrgLedgerIndex',
    'szPO_Name',
    'fInput_M',
    'fCashBalanceM',
    'szDate',
    'szPrOpen_No',
    'szRA_Code',
    'szMemo',
    'szErrPlace',
    'szMessage',
    'szReturn',
];
