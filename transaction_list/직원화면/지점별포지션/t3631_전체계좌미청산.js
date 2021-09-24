const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "nFromDate",
  "nToDate",
];
const inputColumnInKor = [
  "회원사",
  "부서코드",
  "부서팀코드",
  "상품구분",
  "시작일자",
  "끝일자",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3631" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nFromDate: "",
    nToDate: "",
  },
};

const outputOneInKor = ["메세지", "A건수"];
const outputOne = ["szMsg", "szCnt"];

const outputTwoColumn = [
  "nPrOpen_Date",
  "nNewPosition",
  "nClosedPosition",
  "nOpenPosition",
  "nRolledOverPosition",
];

const outputTwoInKor = [
  "날짜",
  "신규 수량",
  "청산 수량",
  "미청산 수량",
  "롤오버 수량",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 포지션",
  pageName: "일자별 포지션거래 내역",
  link: "7413",

  Header: { function: "D", termtype: "HTS", trcode: "t3631" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nFromDate: "",
    nToDate: "",
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

  outputOneColumnInKor: ["메세지", "A건수"],

  outputTwoColumnInKor: [
    "날짜",
    "신규 수량",
    "청산 수량",
    "미청산 수량",
    "롤오버 수량",
  ],
};

export default config;
