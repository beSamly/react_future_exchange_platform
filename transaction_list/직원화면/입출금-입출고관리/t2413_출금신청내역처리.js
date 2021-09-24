const inputColumn = [
  "일자",
  "계좌번호",
  "출금신청금액",
  "직원ID",
  "계정번호",
  "직원비번",
  "비고",
  "의뢰인성명",
];

const inputColumnInEng = [
  "nDate",
  "szAccNo",
  "fMoney",
  "szStaffID",
  "szStaffPwd",
  "szMemo",
  "szRequest_Name",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2413" },
  Input1: {
    nDate: "",
    szAccNo: "",
    fMoney: "",
    szStaffID: "",
    szStaffPwd: "",
    szMemo: "",
    szRequest_Name: "",
  },
};
// input
// 일자,           nDate,              int,    4;
// 계좌번호,       szAccNo,            char,   14;
// 출금신청금액,   fMoney,             double, 22.8;
// 직원ID,         szStaffID,          char,   67;
// 직원비번,       szStaffPwd,         char,   20;
// 비고,           szMemo,             char,   60;
// 의뢰인성명,     szRequest_Name,     char,   40;


const outputOneInKor = ["결과"];

const outputOneInEng = ["szResult"];

const outputOneInKor = [
  "신청일시",
  "출금신청금액",
  "시간",
  "확인금액",
  "성명",
  "계좌번호",
  "원장번호",
  "취급상태",
  "취급확인상태",
  "은행명",
  "은행계좌번호",
];

const outputOneInEng = [
  "szDate_no",
  "szOrder_InOut_M",
  "szDateTime",
  "fInputM",
  "szName",
  "szAccNo",
  "fLedgerIndex",
  "szSSTreat_Stat",
  "szCHK_With_Stat",
  "szBank_Name",
  "szBank_AccNo",
];
