const inputColumn = ['szAccNo', 'nFromDate', 'nToDate'];

const inputColumnInKor = ['계좌번호', '시작일', '종료일'];

const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't3612' },
    Input1: {
        szAccNo: '',
        nFromDate: '',
        nToDate: '',
    },
};

double, 22.8;
int, 4;
char, 4;

const outputOneInKor = ['체결수량', '체결건수', '건수'];
const outputOne = ['fExecPosCnt', 'nExecCnt', 'szCnt'];

const outputTwoColumn = [
    'szCustItem',
    'szPrOpen_No',
    'szCurNo',
    'fOrderSu',
    'fNxOpenSu',
    'szPOCode',
    'fOrderPrice',
    'fExecPrice',
    'szOrderType',
    'szOrderDateTime',
    'szExecDateTime',
    'fPipLowest',
];

const outputTwoInKor = [
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

const inputExample = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't3612',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjE0MzQ2NiwiZXhwIjoxNjI2MTQ0NjY2fQ.gmsmgBBr3aXsVUqzQPCYi7vtJGfDPih3uOo5NU4D7wo',
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
    pageName: '계좌별 포지션 거래내역',
    link: '7401',

    Header: { function: 'D', termtype: 'HTS', trcode: 't3612' },
    Input1: {
        szAccNo: '',
        nFromDate: '',
        nToDate: '',
    },
    outputOneOrTwo: 'both',
    inputColumnInKor: ['계좌번호', '시작 날짜', '마지막 날짜'],

    outputOneColumnInKor: ['체결수량', '체결건수', '건수'],

    outputTwoColumnInKor: [
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
    ],
};

export default config;
