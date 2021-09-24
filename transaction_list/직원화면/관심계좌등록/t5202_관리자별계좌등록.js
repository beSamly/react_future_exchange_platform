const inputColumn = ["회원사", "상품코드", "직원ID", "계좌번호", "직원비번"];
const inputColumnInEng = [
  "szMemberNo",
  "szTradeType",
  "szStaff_ID",
  "szAccNo",
  "szPasswd",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t5202" },
  Input1: {
    szMemberNo: "",
    szTradeType: "",
    szStaff_ID: "",
    szAccNo: "",
    szPasswd: "",
  },
};

const outputOneInKor = ["결과"];
const outputOneInEng = ["szResult"];
