const inputColumn = [
  "일자",
  "계좌정보",
  "직원아이디",
  "직원비밀번호",
  "직원부서코드",
];
const inputColumnInEng = [
  "nDate",
  "szAccNo",
  "szPNCszStaffIDode",
  "szStaffPwd",
  "szGRP_Code",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t211A" },
  Input1: {
    nDate: "",
    szAccNo: "",
    szPNCszStaffIDode: "",
    szStaffPwd: "",
    szGRP_Code: "",
  },
};

const outputOneInKor = ["A건수"];
const outputOneInEng = ["szCnt"];
const outputTwoInKor = [
  "예탁총액현금",
  "원장순번",
  "원원장번호",
  "입출금액",
  "현금잔액",
  "현금잔액",
  "처리시간",
  "체결번호",
  "입출금화폐",
  "입출금화폐금액",
  "적요",
  "비고",
  "입력오류위치",
  "처리응답 메시지",
  "정상처리여부",
];
const outputTwoInEng = [
  "fDepoTotalM",
  "nLedgerIdx",
  "nOrgLedgerIndex",
  "fInput_M",
  "fCashBalanceM",
  "szDate",
  "szPrOpen_No",
  "szInputCur",
  "fInput_Money",
  "szPO_Name",
  "szMemo",
  "szErrPlace",
  "szMessage",
  "szReturn",
];
