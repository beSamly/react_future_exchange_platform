const inputColumn = ['szMemberNo', 'szPVCode', 'szGrpTeamCode', 'szTradeType'];

const inputColumnInKor = ['회원사', '부서코드', '부서팀코드', '상품구분'];

const input = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't1223',
        userid: 'program@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        szMemberNo: '000',
        szPVCode: '000',
        szGrpTeamCode: '100000',
        szTradeType: '57',
    },
};

const outputOneInKor = ['미체결주문수량', '신규체결수량', '청산체결수량', '미청산수량', '건수', '건수2'];
const outputOne = ['nTotActOrder', 'nTotNewPos', 'nTotClosePos', 'nTotOpenPos', 'nCnt', 'szCnt'];

const outputTwoColumn = ['계좌번호', '고객ID', '미체결주문수량', '신규주문수량', '청산주문수량', '미청산수량'];

const outputTwoInKor = ['szAccNo', 'szCustNo', 'nActOrderLot', 'nNewPosLot', 'nClosedPosLot', 'nOpenPosLot'];

// config file format
const config = {
    firstLevelMenu: '선물포지션/거래내역',
    secondLevelMenu: '지점별 포지션',
    pageName: '전체계좌 포지션 집계',
    link: '7410',

    Header: { function: 'D', termtype: 'HTS', trcode: 't1223' },
    Input1: {
        szMemberNo: '',
        szPVCode: '',
        szGrpTeamCode: '',
        szTradeType: '',
    },
    outputOneOrTwo: 'both',
    inputColumnInKor: ['회원사', '부서코드', '부서팀코드', '상품구분'],

    outputOneColumnInKor: ['미체결주문수량', '신규체결수량', '청산체결수량', '미청산수량', '건수', '건수2'],

    outputTwoColumnInKor: ['계좌번호', '고객ID', '미체결주문수량', '신규주문수량', '청산주문수량', '미청산수량'],
};

export default config;
