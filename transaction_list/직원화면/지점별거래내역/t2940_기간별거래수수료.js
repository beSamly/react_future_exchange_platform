const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "nFromDate",
  "nToDate",
  "fPiprebate",
];
const inputColumnInKor = [
  "회원사",
  "부서코드",
  "팀코드",
  "상품구분",
  "시작일",
  "종료일",
  "Piprebate",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2940" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nFromDate: "",
    nToDate: "",
    fPiprebate: "",
  },
};

const outputOneInKor = ["수익합계", "건수", "메시지", "A건수"];
const outputOne = ["fTotRevenue", "nCnt", "szMsg", "szCnt"];

const outputTwoColumn = [
  "nDateNo",
  "fInterest",
  "fInterest_Omni",
  "fInterest_Net",
  "fCommission",
  "fOM",
  "fCM",
  "fPiprebate",
  "fTotSum",
];

const outputTwoInKor = [
  "일자",
  "계좌이자",
  "총괄이자",
  "차감이자",
  "수수료",
  "매입수익",
  "청산수익",
  "수익",
  "행소계",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 거래내역",
  pageName: "기간별 거래 수수료",
  link: "7430",

  Header: { function: "D", termtype: "HTS", trcode: "t2940" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nFromDate: "",
    nToDate: "",
    fPiprebate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: [
    "회원사",
    "부서코드",
    "팀코드",
    "상품구분",
    "시작일",
    "종료일",
    "Piprebate",
  ],

  outputOneColumnInKor: ["수익합계", "건수", "메시지", "A건수"],

  outputTwoColumnInKor: [
    "일자",
    "계좌이자",
    "총괄이자",
    "차감이자",
    "수수료",
    "매입수익",
    "청산수익",
    "수익",
    "행소계",
  ],
};

export default config;
