/*
    계좌번호,           szAccNo,            char,   14;
    시작일,             nFromDate,          int,    4;
    종료일,             nToDate,            int,    4;
    적요코드,           szPOcode,           char,   3;
    회원사,             szMemberNo,         char,   3;

                "원장번호",           nIdx,               int,    4;
            "원원장순번",         nOrgLedger,         int,    4;
            "적요코드",           szPOCode,           char,   3;
            "입출금액",           fInput_M,           double, 22.8;
            "예탁금",             fCashBalance_M,     double, 22.8;
            "일자",               szDate,             char,   8;
            "시각",               szTime,             char,   14;
            "체결번호",           szPrOpen_No,        char,   20;
            "대용화폐구분",       szInputCur,         char,   2;
            "대용화폐입출금액",   fInput_Money,       double, 22.8;

*/

const dataColumnInKor = [
    '원장번호',
    '원원장순번',
    '적요코드',
    '입출금액',
    '예탁금',
    '일자',
    '시각',
    '체결번호',
    '대용화폐구분',
    '대용화폐입출금액',
];

const test = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't2910' },
    Input1: {
        szAccNo: '00010057100005',
        nFromDate: '20200101',
        nToDate: '20210631',
        szPOcode: '999',
        szMemberNo: '000',
    },
};
