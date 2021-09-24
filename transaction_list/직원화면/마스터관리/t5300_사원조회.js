const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szTeamCode",
  "szPVName",
  "szTeamName",
  "szTradeType",
  "cMenu",
];
const inputColumnInKor = [
  "회원사 번호",
  "부서코드",
  "팀 코드",
  "부서명",
  "팀명",
  "거래단위",
  "0.조회",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t5400" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szTeamCode: "",
    szPVName: "",
    szTeamName: "",
    szTradeType: "",
    cMenu: "",
  },
};

const outputOneInKor = ["A건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [
  "szMemberNo",
  "szPVCode",
  "szTeamCode",
  "szPVName",
  "szTeamName",
  "szTradeType",
];

const outputTwoInKor = [
  "회원사 번호",
  "부서코드",
  "팀 코드",
  "부서명",
  "팀명",
  "거래단위",
];
