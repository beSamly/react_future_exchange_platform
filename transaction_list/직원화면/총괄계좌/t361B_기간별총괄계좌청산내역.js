const inputColumn = ["szAccNo", "szAccNoPW"];
const inputColumnInKor = ["계좌번호", "비밀번호"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t361B" },
  Input1: {
    szAccNo: "",
    szAccNoPW: "",
  },
};

const outputOneInKor = ["A건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [];

const outputTwoInKor = ["회원처리항목", "종목코드", "매매구분", "가격"];

// config file format
const config = {
  firstLevelMenu: "총괄계좌",
  secondLevelMenu: "",
  pageName: "기간별 총괄계좌 청산내역",
  link: "7457",

  Header: { function: "D", termtype: "HTS", trcode: "t361B" },
  Input1: {
    szAccNo: "",
    szAccNoPW: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["계좌번호", "비밀번호"],

  outputOneColumnInKor: ["A건수"],

  outputTwoColumnInKor: ["회원처리항목", "종목코드", "매매구분", "가격"],
};

export default config;
