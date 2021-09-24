const input = {
  Header: { function: "D", termtype: "HTS", trcode: "5439" },
  Input1: {
    szMemberNo: "", //회원사,
    szTradeType: "", //상품구분,
    szDealerCode: "", //딜러팀코드,
  },
};

const outputOneInKor = ["결과"];

const outputOneInEng = ["szResult"];

// config file format
const config = {
  firstLevelMenu: "운영",
  secondLevelMenu: "",
  pageName: "거래소 운영 설정",
  link: "7092",

  Header: { function "D", termtype: "HTS", trcode: "t5439" },
  Input1: {
    szMemberNo: "", //회원사,
    szTradeType: "", //상품구분,
    szDealerCode: "", //딜러팀코드,
  },
  outputOneOrTwo: "one",
  inputColumnInKor: ["회원사", "상품구분", "딜러팀코드"],

  outputColumnInKor: ["결과"],
};

export default config;
