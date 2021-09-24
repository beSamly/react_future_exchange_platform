const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: '2110' },
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
        szRequest_Name: '',
    },
};

// config file format
const config = {
    firstLevelMenu: '입출금/입출고 관리',
    secondLevelMenu: '',
    pageName: '입금',
    link: '7210',

    Header: { function: 'D', termtype: 'HTS', trcode: 't2110' },
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
        szRequest_Name: '',
    },
    outputOneOrTwo: 'one',
    inputColumnInKor: [
        '일자',
        '계좌정보',
        '계정번호',
        '적요번호',
        '현금잔액',
        '수표입금액',
        '기타수표액',
        '업무구분',
        '입금 화폐',
        '입금 원화폐금액',
        '직원아이디',
        '직원비밀번호',
        '비고',
        '의뢰인성명',
    ],

    outputOneColumnInKor: [
        '계좌번호',
        '이름',
        '계정번호',
        '적요번호',
        '예수금 잔액',
        '수표입금액',
        '기타수표액',
        '원장번호',
        '현금 입금액',
    ],
};

const inputExample = {
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
        szPOCode: '001',
        fCashBalanceM: '123000',
        fInputBillM: '',
        fEtcBillM: '',
        szRACode: '0001',
        szInputCur: '',
        fMoney: '',
        szStaffID: '000teller01',
        szStaffPwd: '1234',
        szMemo: '',
        szRequest_Name: '',
    },
};

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
        szPOCode: '001',
        fCashBalanceM: '123000',
        szRACode: '0001',
        szStaffID: '000teller01',
        szStaffPwd: '1234',
    },
};
