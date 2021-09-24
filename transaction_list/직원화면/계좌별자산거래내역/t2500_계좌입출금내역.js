const inputColumn = ['szAccNo', 'nFromDate', 'nToDate'];

const inputColumnInKor = ['계좌번호', '기준 시작 일자', '기준 끝 일자'];

const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't2500' },
    Input1: {
        szAccNo: '',
        nFromDate: '',
        nToDate: '',
    },
};

const outputOneInKor = ['A건수'];
const outputOne = ['szCnt'];

const outputTwoColumn = [
    'nIdx',
    'nOrgLedger',
    'szPO_Code',
    'lfInput_M',
    'nCashBalance_M',
    'szDate',
    'szTime',
    'szPrOpen_No',
];

const outputTwoInKor = [
    '순번',
    '원원장거래순번',
    '적요번호',
    '입출입금액',
    '현금잔액',
    '처리년월일',
    '처리 시간',
    '체결번호',
];

const inputExample = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't2500',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNTQyNCwiZXhwIjoxNjI2MzE2NjI0fQ.DrU7zYtz2MoAjGv2J8WmlHR1xfHjzrkJNNZpqVoHVmY',
    },
    Input1: {
        szAccNo: '00010057300067',
        nFromDate: '20210611',
        nToDate: '202100713',
    },
};

// config file format
const config = {
    firstLevelMenu: '선물포지션/거래내역',
    secondLevelMenu: '계좌별 자산/거래내역',
    pageName: '계좌입출금내역',
    link: '7400',

    Header: { function: 'D', termtype: 'HTS', trcode: 't2500' },
    Input1: {
        szAccNo: '',
        nFromDate: '',
        nToDate: '',
    },
    outputOneOrTwo: 'two',
    inputColumnInKor: ['계좌번호', '시작 날짜', '마지막 날짜'],
    outputColumnInKor: [
        '순번',
        '원원장거래순번',
        '적요번호',
        '입출입금액',
        '현금잔액',
        '처리년월일',
        '처리 시간',
        '체결번호',
    ],
};

export default config;
