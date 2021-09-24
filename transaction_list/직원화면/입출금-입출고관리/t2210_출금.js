const inputColumn = [
    '일자',
    '지점코드',
    '계좌번호',
    '출납번호',
    '계정번호',
    '적요구분',
    '업무구분',
    '직원 아이디',
    '직원 비밀번호',
];

const inputColumnInEng = [
    'nDate',
    'szBranchCode',
    'szAccNo',
    'cashierNo',
    'szPN_Code',
    'szPO_Code',
    'szRA_Code',
    'szStaffID',
    'szStaffPwd',
];

// config file format
const config = {
    firstLevelMenu: '입출금/입출고 관리',
    secondLevelMenu: '',
    pageName: '출금',
    link: '7215',

    Header: { function: 'D', termtype: 'HTS', trcode: 't2210' },
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
        szStaffID: '',
        szStaffPwd: '',
    },
    outputOneOrTwo: 'one',
    inputColumnInKor: [
        '일자',
        '계좌정보',
        '계좌비밀번호',
        '계정번호',
        '적요번호',
        '출금액',
        '업무구분',
        '출금 화폐',
        '출금 원화폐금액',
        '비고',
        '직원아이디',
        '직원비밀번호',
    ],

    outputOneColumnInKor: [
        '계좌번호',
        '이름',
        '계정번호',
        '적요번호',
        '출금액',
        '미수금액',
        '금일기타수표액',
        '원장번호',
        '예수금 잔액',
    ],
};

// szPOCode = 001 for 입금, 002 for 출금
const trExample = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't2110',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        nDate: '20210718',
        szAccNo: '00010057300067',
        szPNCode: '526',
        szPOCode: '002',
        fCashOutM: '123000',
        szRACode: '00011',
        szStaffID: '000teller01',
        szStaffPwd: '1234',
    },
};
