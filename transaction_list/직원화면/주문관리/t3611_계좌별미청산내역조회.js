const inputColumn = ['szMember_No', 'szAccNo', 'szDate'];

const inputColumnInKor = ['회원사번호', '계좌 번호', '날자'];

const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't3611' },
    Input1: {
        szMember_No: '',
        szAccNo: '',
        szDate: '',
    },
};

const outputOneInKor = ['미청산포지션수', '미청산건수', '처리결과 메시지'];
const outputOne = ['nPosCnt', 'nOpenCnt', 'szMsg'];

const outputTwoColumn = [
    'szPrOpen_No',
    'szCur_No',
    'nLot',
    'szPO_Code',
    'fOpenPrice',
    'fCurrentPrice',
    'nDailyPL',
    'fTotPL',
    'fGrossPL',
    'fInterest',
    'fCommission',
    'fOMCM',
    'fNetPL',
    'szOrdType',
    'szDueDate',
    'szPrOpen_DateTime',
    'nPipLowest',
    'fLimit',
];

const outputTwoInKor = [
    '체결번호',
    '종목코드',
    '수량',
    '매매구분',
    '진입환율',
    '현재환율',
    '일일손익',
    '총손익(pip)',
    '총손익',
    '이자',
    '수수료',
    '체결수수료',
    '순손익',
    '주문형태',
    '만기일',
    '오픈시각',
    'Pip Lowest',
    'limit 가격',
];

const inputExample = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't3611',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        szMember_No: '999',
        szAccNo: '99910057100001',
        szDate: '',
    },
};
