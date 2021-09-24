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
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "계좌별 자산/거래내역",
  pageName: "계좌입출금내역",
  link: "/7400",

  Header: { function: "D", termtype: "HTS", trcode: "t2500" },
  Input1: {
    szAccNo: "",
    nFromDate: "",
    nToDate: "",
  },
  outputOneOrTwo: "two",
  inputColumnInKor: ["계좌번호", "기준 시작 일자", "기준 끝 일자"],
  outputColumnInKor: [
    "순번",
    "원원장거래순번",
    "적요번호",
    "입출입금액",
    "현금잔액",
    "처리년월일",
    "처리 시간",
    "체결번호",
  ],
};

export default config;
