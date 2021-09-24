const inputColumn = ["szMemberNo", "szAccNo", "nFromDate", "nToDate"];
const inputColumnInKor = ["회원사", "계좌번호", "시작일", "종료일"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2913" },
  Input1: {
    szMemberNo: "",
    szAccNo: "",
    nFromDate: "",
    nToDate: "",
  },
};

const outputOneInKor = ["A건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [
  "nDate",
  "fInitialBalance",
  "fEndingBalance",
  "fDeposit",
  "fWithdrawal",
  "fInterestCredit",
  "fInterestDebit",
  "fCommission",
  "fOM",
  "fCM",
  "fTradingProfit",
  "fTradingLoss",
  "fGrossPL",
  "fTotalBalance",
];

const outputTwoInKor = [
  "날자",
  "기초잔고",
  "최종잔고",
  "입금액",
  "출금액",
  "이자입금",
  "이자출금",
  "수수료",
  "매입비용",
  "청산비용",
  "매입차익",
  "매입차손",
  "미청산 손익",
  "총자산현황",
];

// config file format
const config = {
  firstLevelMenu: "총괄계좌",
  secondLevelMenu: "",
  pageName: "기간별 총괄계좌 입출금요약",
  link: "7451",

  Header: { function: "D", termtype: "HTS", trcode: "t2913" },
  Input1: {
    szMemberNo: "",
    szAccNo: "",
    nFromDate: "",
    nToDate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["회원사", "계좌번호", "시작일", "종료일"],

  outputOneColumnInKor: ["A건수"],

  outputTwoColumnInKor: [
    "날자",
    "기초잔고",
    "최종잔고",
    "입금액",
    "출금액",
    "이자입금",
    "이자출금",
    "수수료",
    "매입비용",
    "청산비용",
    "매입차익",
    "매입차손",
    "미청산 손익",
    "총자산현황",
  ],
};

export default config;
