const input = {
  Header: { function: "D", termtype: "HTS", trcode: "1152" },
  Input1: {
    nDate: "", //일자,
    szBranch_No: "", //지점소속,
    szCust_No: "", //고객HTS ID
    szHTSPasswd: "", //고객 HTS 비밀번호
    szAccNo: "", //계좌번호
    szPasswd: "", //계좌비밀번호
    szAccCond: "", //계좌상태
    szStaffID: "", //관리자ID
    szStaffPasswd: "", //관리자 비밀번호
  },
};

const outputOneInKor = [
  "계좌상태",
  "입력오류위치",
  "처리응답 메시지",
  "정상처리여부",
];

const outputOneInEng = ["szAccCond", "szErrPlace", "szMessage", "szReturn"];
