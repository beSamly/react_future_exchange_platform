const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "nDate",
];
const inputColumnInKor = [
  "회원사",
  "부서코드",
  "부서팀코드",
  "상품구분",
  "조회일자",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3632" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nDate: "",
  },
};

const outputOneInKor = ["전체거래량", "메세지", "A건수"];
const outputOne = ["nTotPosCnt", "szMsg", "szCnt"];

const outputTwoColumn = [
  "szCurrency",
  "nNewPosCnt_Buy",
  "nNewPosCnt_Sell",
  "nClosedPosCnt_Buy",
  "nClosedPosCnt_Sell",
  "nOpenPosCnt_Buy",
  "nOpenPosCnt_Sell",
  "nRolPosCnt_Buy",
  "nRolPosCnt_Sell",
];

const outputTwoInKor = [
  "종목명",
  "신규포지션수(매수)",
  "신규포지션수(매도)",
  "청산포지션수(매수)",
  "청산포지션수(매도)",
  "미청산포지션수(매수)",
  "미청산포지션수(매도)",
  "롤오버포지션수(매수)",
  "롤오버포지션수(매도)",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 포지션",
  pageName: "종목별 포지션 요약",
  link: "7414",

  Header: { function: "D", termtype: "HTS", trcode: "t3632" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nDate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: [
    "회원사",
    "부서코드",
    "부서팀코드",
    "상품구분",
    "시작일자",
    "끝일자",
  ],

  outputOneColumnInKor: ["전체거래량", "메세지", "A건수"],

  outputTwoColumnInKor: [
    "종목명",
    "신규포지션수(매수)",
    "신규포지션수(매도)",
    "청산포지션수(매수)",
    "청산포지션수(매도)",
    "미청산포지션수(매수)",
    "미청산포지션수(매도)",
    "롤오버포지션수(매수)",
    "롤오버포지션수(매도)",
  ],
};

export default config;
