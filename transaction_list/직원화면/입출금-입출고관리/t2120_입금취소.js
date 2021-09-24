const inputColumn = [
  "일자",
  "지점코드",
  "계좌번호",
  "출납번호",
  "계정번호",
  "적요구분",
  "업무구분",
  "직원 아이디",
  "직원 비밀번호",
];

const inputColumnInEng = [
  "nDate",
  "szBranchCode",
  "cashierNo",
  "szPN_Code",
  "szPO_Code",
  "szRA_Code",
  "szStaffID",
  "szStaffPwd",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2110" },
  Input1: {
    nDate: "",
    szBranchCode: "",
    cashierNo: "",
    szPN_Code: "",
    szPO_Code: "",
    szRA_Code: "",
    szStaffID: "",
    szStaffPwd: "",
  },
};

const outputOneInKor = [
  "계좌번호",
  "이름",
  "계정번호",
  "적요번호",
  "현금",
  "수표",
  "기타수표",
  "원장번호",
  "예수금 잔금",
];
const outputOneInEng = [
  "szAccNo",
  "szName",
  "szPNCode",
  "szPOCode",
  "fCashBalanceM",
  "fInputBillM",
  "fEtcBillM",
  "fLedgerIndex",
  "fInputM",
];
