const inputColumn = ["szMemberNo", "szPVCode", "szGrpTeamCode", "szTradeType"];
const inputColumnInKor = ["회원사", "부서코드", "부서팀코드", "상품구분"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3712" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
  },
};

const outputOneInKor = ["A건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [
  "계좌번호",
  "예탁총액",
  "미결제약정금액",
  "평가손익",
  "평가자산",
  "유지증거금",
  "사용증거금",
  "가용자산",
  "마진콜 비율",
];

const outputTwoInKor = [
  "szAccNo",
  "fBalance",
  "fOutstanding",
  "fGrossPL",
  "fEquity",
  "fMarginReq",
  "fMtMargin",
  "fUsableEquity",
  "fUEquityRate",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 거래내역",
  pageName: "현재 전계좌 잔액",
  link: "7436",

  Header: { function: "D", termtype: "HTS", trcode: "t3712" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["회원사", "부서코드", "부서팀코드", "상품구분"],

  outputOneColumnInKor: ["A건수"],

  outputTwoColumnInKor: [
    "계좌번호",
    "예탁총액",
    "미결제약정금액",
    "평가손익",
    "평가자산",
    "유지증거금",
    "사용증거금",
    "가용자산",
    "마진콜 비율",
  ],
};

export default config;
