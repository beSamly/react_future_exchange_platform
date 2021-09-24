const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "nDate",
  "fPiprebate",
];
const inputColumnInKor = [
  "회원사",
  "부서코드",
  "팀코드",
  "상품구분",
  "일자",
  "수익",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2941" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nDate: "",
    fPiprebate: "",
  },
};

const outputOneInKor = ["수익합계", "건수", "메시지", "A건수"];
const outputOne = ["fTotRevenue", "nCnt", "szMsg", "szCnt"];

const outputTwoColumn = [
  "szCurNo",
  "nSu",
  "fInterest",
  "fInterest_Omni",
  "fInterest_Net",
  "fCommission",
  "fOM",
  "fCM",
  "nSu_Omni",
  "fPiprebate",
  "fTotSum",
];

const outputTwoInKor = [
  "종목코드",
  "수량",
  "계좌이자",
  "총괄이자",
  "차감이자",
  "수수료",
  "진입수수료",
  "청산수수료",
  "총괄수량",
  "수익",
  "행소계",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 거래내역",
  pageName: "7431",
  link: "일별 종목별 거래수수료",

  Header: { function: "D", termtype: "HTS", trcode: "t2941" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nDate: "",
    fPiprebate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: [
    "회원사",
    "부서코드",
    "팀코드",
    "상품구분",
    "일자",
    "수익",
  ],

  outputOneColumnInKor: ["수익합계", "건수", "메시지", "A건수"],

  outputTwoColumnInKor: [
    "종목코드",
    "수량",
    "계좌이자",
    "총괄이자",
    "차감이자",
    "수수료",
    "진입수수료",
    "청산수수료",
    "총괄수량",
    "수익",
    "행소계",
  ],
};

export default config;
