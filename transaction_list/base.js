const inputColumn = [];

const inputColumnInKor = [];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    szDate: "",
  },
};

const outputOneInKor = [];
const outputOne = [];

const outputTwoColumn = [];

const outputTwoInKor = [];

// config file format
const config = {
  firstLevelMenu: "총괄계좌",
  secondLevelMenu: "",
  pageName: "",
  link: "",

  Header: { function: "D", termtype: "HTS", trcode: "" },
  Input1: {},
  outputOneOrTwo: "both",
  inputColumnInKor: [],

  outputOneColumnInKor: [],

  outputTwoColumnInKor: [],
};

export default config;
