const inputColumn = [
  "szMemberNo",
  "cBusiDiv",
  "szDateNo_1",
  "szBDST",
  "szBDED",
  "szONST",
  "szONED",
  "cFlag",
];
const inputColumnInKor = [
  "회원사",
  "영업일구분",
  "영업일",
  "영업시작시간",
  "영업종료시간",
  "마감시작시간",
  "마감종료시간",
  "실행 구분",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t4511" },
  Input1: {
    szMemberNo: "",
    cBusiDiv: "",
    szDateNo_1: "",
    szBDST: "",
    szBDED: "",
    szONST: "",
    szONED: "",
    cFlag: "",
  },
};

const outputOneInKor = [
  "영업일구분",
  "영업시작시간",
  "영업종료시간",
  "마감시작시간",
  "마감종료시간",
];
const outputOne = ["cBusiDiv", "szBDST", "szBDED", "szONST", "szONED"];
