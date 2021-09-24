// 계좌번호,       accno,          char,   14;
// 종목코드,       cur_no,         char,   12;
// 매매구분,       po_code,        char,   3;
// 시작일,         from_dt,        int,    4;
// 종료일,         to_dt,          int,    4;

/*
{"Header" : {"function" : "D","termtype" : "HTS","trcode" : "t3653"},"Input1" : {"accno" : "00010057100005","cur_no" : "0000","po_code" : "BTC","from_dt" : "1.5","to_dt" : "34400"}}



*/

const test = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't3615',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: { accno: '00010057100005', cur_no: 'BTC', po_code: '999', from_dt: '20200101', to_dt: '20210731' },
};

// config file format
const config = {
    firstLevelMenu: '입출금/입출고 관리',
    secondLevelMenu: '',
    pageName: '코인입출고내역',
    link: '7231',

    Header: { function: 'D', termtype: 'HTS', trcode: 't3615' },
    Input1: { accno: '00010057100005', cur_no: 'BTC', po_code: '999', from_dt: '20200101', to_dt: '20210731' },

    outputOneOrTwo: 'both',
    inputColumnInKor: ['계좌번호', '종목코드', '매매구분', '시작일', '종료일'],

    outputTwoColumnInKor: [
        '회원처리항목',
        '종목코드',
        '매매구분',
        '주문유형',
        '수량',
        '가격',
        '처리시각',
        '소수최저자리',
    ],
};

export default config;
