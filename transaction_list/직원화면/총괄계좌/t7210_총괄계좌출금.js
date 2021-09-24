const inputColumn = [
    'nDate',
    'szAccNo',
    'szPasswd',
    'szPNCode',
    'szPOCode',
    'fCashOutM',
    'szRACode',
    'szOutputCur',
    'fMoney',
    'szMemo',
    'szUserID',
    'szStaffID',
    'szStaffPwd',
];
const inputColumnInKor = [
    '일자',
    '계좌번호',
    '계좌비밀번호',
    '계정번호',
    '적요번호',
    '출금액',
    '업무구분',
    '출금 화폐',
    '출금 원화폐금액',
    '비고',
    'user 아이디',
    '직원 아이디',
    '직원 비밀번호',
];

const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't7110' },
    Input1: {
        nDate: '',
        szAccNo: '',
        szPasswd: '',
        szPNCode: '',
        szPOCode: '',
        fCashOutM: '',
        szRACode: '',
        szOutputCur: '',
        fMoney: '',
        szMemo: '',
        szUserID: '',
        szStaffID: '',
        szStaffPwd: '',
    },
};

const outputOneInKor = [
    '계좌번호',
    '이름',
    '계정번호',
    '적요번호',
    '출금액',
    '미수금액',
    '금일기타수표액',
    '원장번호',
    '예수금 잔금',
];

const outputOne = [
    'szAccNo',
    'szName',
    'szPNCode',
    'szPOCode',
    'fCachOutM',
    'fRecM',
    'fEtcBillM',
    'fLedgerIndex',
    'fDepoTotalM',
];

const trExample = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't7210',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        nDate: '20210718',
        szAccNo: '99910057100001',
        szPNCode: '526',
        szPOCode: '002',
        fCashOutM: '5000',
        szRACode: '0011',
        szStaffID: 'teller01',
        szStaffPwd: '1234',
    },
};
