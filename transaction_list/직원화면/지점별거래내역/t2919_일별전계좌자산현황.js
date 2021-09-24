const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "nDate",
];
const inputColumnInKor = ["회원사", "부서코드", "팀코드", "상품구분", "일자"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2919" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nDate: "",
  },
};

const outputOneInKor = ["A건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [
  "szAccNo",
  "szFullName",
  "fInitialBalance",
  "fDeposit",
  "fWithdrawal",
  "fInterestCredit",
  "fInterestDebit",
  "fCommission",
  "fOM",
  "fCM",
  "fTradingProfit",
  "fTradingLoss",
  "fEndingBalance",
  "fGrossPL",
  "fTotalBalance",
];

const outputTwoInKor = [
  "계좌번호",
  "성명",
  "예탁금",
  "입금액",
  "출금액",
  "이자수익",
  "이자손실",
  "수수료",
  "매입비용",
  "청산비용",
  "매매수익",
  "매매손실",
  "최종잔고",
  "평가손익",
  "총잔액",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 거래내역",
  pageName: "일별 전계좌 자산현황",
  link: "7424",

  Header: { function: "D", termtype: "HTS", trcode: "t2919" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nDate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["회원사", "부서코드", "팀코드", "상품구분", "일자"],

  outputOneColumnInKor: ["A건수"],

  outputTwoColumnInKor: [
    "계좌번호",
    "성명",
    "예탁금",
    "입금액",
    "출금액",
    "이자수익",
    "이자손실",
    "수수료",
    "매입비용",
    "청산비용",
    "매매수익",
    "매매손실",
    "최종잔고",
    "평가손익",
    "총잔액",
  ],
};

export default config;
