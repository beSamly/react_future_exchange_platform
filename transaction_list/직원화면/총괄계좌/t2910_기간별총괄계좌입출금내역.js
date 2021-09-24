const inputColumn = [
  "szAccNo",
  "nFromDate",
  "nToDate",
  "szPOcode",
  "szMemberNo",
];
const inputColumnInKor = ["계좌번호", "시작일", "종료일", "적요코드", "회원사"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2910" },
  Input1: {
    szAccNo: "",
    nFromDate: "",
    nToDate: "",
    szPOcode: "",
    szMemberNo: "",
  },
};

const outputOneInKor = ["건수", "초기잔고", "입출금", "최종잔고", "건수2"];
const outputOne = [
  "nCnt",
  "fInitialBalance",
  "fCreditOrDebit",
  "fEndingBalance",
  "szCnt",
];

const outputTwoColumn = [
  "nIdx",
  "nOrgLedger",
  "szPOCode",
  "fInput_M",
  "fCashBalance_M",
  "szDate",
  "szTime",
  "szPrOpen_No",
  "szInputCur",
  "fInput_Money",
];

const outputTwoInKor = [
  "원장번호",
  "원원장순번",
  "적요코드",
  "입출금액",
  "예탁금",
  "일자",
  "시각",
  "체결번호",
  "대용화폐구분",
  "대용화폐입출금액",
];

// config file format
const config = {
  firstLevelMenu: "총괄계좌",
  secondLevelMenu: "",
  pageName: "기간별 총괄계좌 입출금내역",
  link: "7450",

  Header: { function: "D", termtype: "HTS", trcode: "t2910" },
  Input1: {
    szAccNo: "",
    nFromDate: "",
    nToDate: "",
    szPOcode: "",
    szMemberNo: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["계좌번호", "시작일", "종료일", "적요코드", "회원사"],

  outputOneColumnInKor: ["건수", "초기잔고", "입출금", "최종잔고", "건수2"],

  outputTwoColumnInKor: [
    "원장번호",
    "원원장순번",
    "적요코드",
    "입출금액",
    "예탁금",
    "일자",
    "시각",
    "체결번호",
    "대용화폐구분",
    "대용화폐입출금액",
  ],
};

export default config;
