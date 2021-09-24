const inputColumn = [
  "nDate",
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
];
const inputColumnInKor = [
  "일자",
  "회원사 번호",
  "부서코드",
  "부서팀코드",
  "거래단위",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2926" },
  Input1: {
    nDate: "",
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
  },
};

const outputOneInKor = ["건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [
  "szCur_No",
  "nNewBuyPosLot",
  "nNewSellPosLot",
  "fNewBuyOM",
  "fNewSellOM",
  "nReBuyPosLot",
  "nReSellPosLot",
  "fReBuyCM",
  "fReSellCM",
];

const outputTwoInKor = [
  "종목코드",
  "신규매수포지션수량",
  "신규매도포지션수량",
  "신규매수진입수수료",
  "신규매도진입수수료",
  "환매포지션수량",
  "전매포지션수량",
  "환매청산수수료",
  "전매청산수수료",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 거래내역",
  pageName: "일별 종목별 거래수수료",
  link: "7429",

  Header: { function: "D", termtype: "HTS", trcode: "t2926" },
  Input1: {
    nDate: "",
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: [
    "일자",
    "회원사 번호",
    "부서코드",
    "부서팀코드",
    "거래단위",
  ],

  outputOneColumnInKor: ["건수"],

  outputTwoColumnInKor: [
    "종목코드",
    "신규매수포지션수량",
    "신규매도포지션수량",
    "신규매수진입수수료",
    "신규매도진입수수료",
    "환매포지션수량",
    "전매포지션수량",
    "환매청산수수료",
    "전매청산수수료",
  ],
};

export default config;
