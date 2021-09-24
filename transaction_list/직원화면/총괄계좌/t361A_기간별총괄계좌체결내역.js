const inputColumn = ["szMemberNo", "szAccNo", "nFromDate", "nToDate"];
const inputColumnInKor = ["회원사", "계좌번호", "시작일", "종료일"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t361A" },
  Input1: {
    szMemberNo: "",
    szAccNo: "",
    nFromDate: "",
    nToDate: "",
  },
};

const outputOneInKor = ["체결포지션수", "체결건수", "건수"];
const outputOne = ["nExecPosCnt", "nExecCnt", "szCnt"];

const outputTwoColumn = [
  "szOrderNo",
  "szPrOpen_No",
  "szCur_No2",
  "nLot",
  "szPO_Code",
  "fOrderPrice",
  "fExecPrice",
  "szOrderType",
  "szOrderDateTime",
  "szExecDateTime",
  "nPipLowest",
];

const outputTwoInKor = [
  "주문번호",
  "체결번호",
  "종목코드",
  "체결수량",
  "매매구분",
  "주문환율",
  "체결환율",
  "주문형태",
  "주문시각",
  "체결시각",
  "Piplowest",
];

// config file format
const config = {
  firstLevelMenu: "총괄계좌",
  secondLevelMenu: "",
  pageName: "기간별 총괄계좌 체결내역",
  link: "7455",

  Header: { function: "D", termtype: "HTS", trcode: "t361A" },
  Input1: {
    szMemberNo: "",
    szAccNo: "",
    nFromDate: "",
    nToDate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["회원사", "계좌번호", "시작일", "종료일"],

  outputOneColumnInKor: ["체결포지션수", "체결건수", "건수"],

  outputTwoColumnInKor: [
    "주문번호",
    "체결번호",
    "종목코드",
    "체결수량",
    "매매구분",
    "주문환율",
    "체결환율",
    "주문형태",
    "주문시각",
    "체결시각",
    "Piplowest",
  ],
};

export default config;
