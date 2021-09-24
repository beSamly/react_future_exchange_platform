const inputColumn = ['nFromDate', 'nToDate', 'szMemberNo', 'szTradeType'];

const inputColumnInKor = ['시작일', '종료일', '회원사', '상품구분'];

const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't2931' },
    Input1: {
        nFromDate: '',
        nToDate: '',
        szMemberNo: '',
        szTradeType: '',
    },
};

const outputOneInKor = ['롤오버수수료합계', '거래손익', '건수', 'A건수'];
const outputOne = ['nTotPosLot', 'fTotPL', 'nCnt', 'szCnt'];

const outputTwoColumn = ['nDate', 'nPosLot', 'fPL', 'fCommission', 'fRoverFee', 'fInterest', 'fGrossPL'];

const outputTwoInKor = ['일자', '수량', '손익', '수수료', '롤오버피', '이자', '총손익'];

const inputExample = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't2931',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjE0NDk1MywiZXhwIjoxNjI2MTQ2MTUzfQ.5ykOIoGvtoZarLk7RkYRYYBJLMjDF_iV1aFRaAD703g',
    },
    Input1: {
        nFromDate: '20200611',
        nToDate: '20210711',
        szMemberNo: '000',
        szTradeType: '57',
    },
};

// config file format
const config = {
    firstLevelMenu: '선물포지션/거래내역',
    secondLevelMenu: '계좌별 자산/거래내역',
    pageName: '일자별 거래손익',
    link: '7404',

    Header: { function: 'D', termtype: 'HTS', trcode: 't2931' },
    Input1: {
        nFromDate: '',
        nToDate: '',
        szMemberNo: '',
        szTradeType: '',
    },
    outputOneOrTwo: 'both',
    inputColumnInKor: ['시작일', '종료일', '회원사', '상품구분'],

    outputOneColumnInKor: ['롤오버수수료합계', '거래손익', '건수', 'A건수'],

    outputTwoColumnInKor: ['일자', '수량', '손익', '수수료', '롤오버피', '이자', '총손익'],
};

export default config;
