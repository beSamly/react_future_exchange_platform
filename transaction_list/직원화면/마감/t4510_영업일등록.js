const inputColumn = ["szAccNo", "nDate_No"];
const inputColumnInKor = ["계좌번호", "조회일자"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t7110" },
  Input1: {
    szAccNo: "",
    nDate_No: "",
  },
};

const outputOneInKor = ["A건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [
  "fDepoTotalM",
  "nLedgerIdx",
  "nOrgLedgerIndex",
  "szPO_Name",
  "fInput_M",
  "fCashBalanceM",
  "szDate",
  "szPrOpen_No",
  "szMemo",
  "szErrPlace",
  "szMessage",
  "szReturn",
];

const outputTwoInKor = [
  "예탁총액현금",
  "원장순번",
  "원원장번호",
  "적요",
  "입출금액",
  "현금잔액",
  "처리시간",
  "체결번호",
  "비고",
  "입력오류위치",
  "처리응답 메시지",
  "정상처리여부",
];
