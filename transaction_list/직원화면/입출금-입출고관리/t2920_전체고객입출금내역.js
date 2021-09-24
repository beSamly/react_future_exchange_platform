const inputColumn = ["회원사", "적요코드", "시작일", "종료일"];

const inputColumnInEng = ["szMemberNo", "szPOcode", "nFromDate", "nToDate"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2920" },
  Input1: {
    szMemberNo: "",
    szPOcode: "",
    nFromDate: "",
    nToDate: "",
  },
};

// input
// 회원사,     szMemberNo,     char,   3;
// 적요코드,   szPOcode,       char,   3;
// 시작일,     nFromDate,      int,    4;
// 종료일,     nToDate,        int,    4;

const outputOneInKor = ["건수", "총액", "메시지", "건수"];

const outputOneInEng = ["nCnt", "fTotal", "szMsg", "szCnt"];

const outputTwoInKor = [
  "처리일자",
  "처리시각",
  "적요코드",
  "입출금액",
  "잔고",
  "계좌번호",
  "고객이름",
  "체결번호",
];
const outputTwoInEng = [
  "szDate",
  "szTime",
  "szPOCode",
  "dblAmount",
  "dblBalance",
  "szAccNo",
  "szFullName",
  "szPrOpen_No",
];