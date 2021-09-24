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
  "szAccNo",
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
    szAccNo: "",
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
  "szAccNo",
  "이름",
  "계정번호",
  "적요번호",
  "예수금 잔액",
  "수표입금액",
  "기타수표액",
  "원장번호",
  "현금 입금액",
];
const outputOneInEng = [
  "szName",
  "szPNCode",
  "szPOCode",
  "fCashBalanceM",
  "fInputBillM",
  "fEtcBillM",
  "fLedgerIndex",
  "fInputM",
];
