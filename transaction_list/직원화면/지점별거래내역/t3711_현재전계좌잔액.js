const inputColumn = ["szMemberNo", "szPVCode", "szGrpTeamCode", "szTradeType"];
const inputColumnInKor = ["회원사", "부서코드", "부서팀코드", "상품구분"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3711" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
  },
};

const outputOneInKor = ["잔액", "계좌수", "A건수"];
const outputOne = ["fTotBalance", "nCnt", "szCnt"];

const outputTwoColumn = ["계좌번호", "고객이름", "계좌잔액", "계좌개설일"];

const outputTwoInKor = ["szAccNo", "szName", "fBalance", "nOpeningDate"];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 거래내역",
  pageName: "현재 전계좌 잔액",
  link: "7435",

  Header: { function: "D", termtype: "HTS", trcode: "t3711" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["회원사", "부서코드", "부서팀코드", "상품구분"],

  outputOneColumnInKor: ["잔액", "계좌수", "A건수"],

  outputTwoColumnInKor: ["계좌번호", "고객이름", "계좌잔액", "계좌개설일"],
};

export default config;
