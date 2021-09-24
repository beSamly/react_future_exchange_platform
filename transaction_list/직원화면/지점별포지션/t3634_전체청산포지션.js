const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "nDate",
];
const inputColumnInKor = [
  "회원사",
  "부서코드",
  "부서팀코드",
  "상품구분",
  "조회일자",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3633" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nDate: "",
  },
};

const outputOneInKor = ["청산수량", "청산건수", "메시지", "A건수"];
const outputOne = ["nPosCnt", "nCloseCnt", "szMsg", "szCnt"];

const outputTwoColumn = [
  "szPrOpen_No",
  "szAccNo",
  "szCur_No",
  "nLot",
  "szPrOpenDateTime",
  "szClosePrOpenDateTime",
  "fSellRate",
  "fBuyRate",
  "fPipPL_pip",
  "fPipPL",
  "fInterest",
  "fCommission",
  "fOM",
  "fCM",
  "fRollover",
  "fNetPL",
  "szOrderType",
  "szPOCode",
  "nPipLowest",
];

const outputTwoInKor = [
  "체결번호",
  "계좌번호",
  "종목번호",
  "청산포지션수량",
  "진입시각",
  "청산체결시각",
  "매수환율",
  "매도환율",
  "손익(지수)",
  "손익",
  "이자",
  "수수료",
  "매입수수료",
  "청산수수료",
  "롤오버",
  "순손익",
  "주문형태",
  "매매구분",
  "소수최저자리",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 포지션",
  pageName: "전체 계좌별 청산내역",
  link: "7416",

  Header: { function: "D", termtype: "HTS", trcode: "t3633" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nDate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: [
    "회원사",
    "부서코드",
    "부서팀코드",
    "상품구분",
    "조회일자",
  ],

  outputOneColumnInKor: ["청산수량", "청산건수", "메시지", "A건수"],

  outputTwoColumnInKor: [
    "체결번호",
    "계좌번호",
    "종목번호",
    "청산포지션수량",
    "진입시각",
    "청산체결시각",
    "매수환율",
    "매도환율",
    "손익(지수)",
    "손익",
    "이자",
    "수수료",
    "매입수수료",
    "청산수수료",
    "롤오버",
    "순손익",
    "주문형태",
    "매매구분",
    "소수최저자리",
  ],
};

export default config;
