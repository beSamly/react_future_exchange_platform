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

const outputOneInKor = ["전체거래량", "체결건수", "메세지", "A건수"];
const outputOne = ["nTotPosCnt", "nTotTicket", "szMsg", "szCnt"];

const outputTwoColumn = [
  "szPrOpen_No",
  "szAccNo",
  "szCur_No",
  "nLot",
  "szPO_Code",
  "fOpenPrice",
  "fClosePrice",
  "fPipPL_pip",
  "fPipPL",
  "fInterest",
  "fCommission",
  "fOM",
  "szOrderType",
  "szPrOpenDateTime",
  "szPosStatus",
  "nPipLowest",
];

const outputTwoInKor = [
  "체결번호",
  "계좌번호",
  "종목번호",
  "체결수량",
  "매매구분",
  "진입환율",
  "청산환율",
  "손익(pip)",
  "손익",
  "이자",
  "수수료",
  "진입수수료",
  "주문형태",
  "진입시각",
  "포지션 상태",
  "Pip Lowest",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 포지션",
  pageName: "계좌별 신규주문 체결내역",
  link: "7415",

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

  outputOneColumnInKor: ["전체거래량", "체결건수", "메세지", "A건수"],

  outputTwoColumnInKor: [
    "체결번호",
    "계좌번호",
    "종목번호",
    "체결수량",
    "매매구분",
    "진입환율",
    "청산환율",
    "손익(pip)",
    "손익",
    "이자",
    "수수료",
    "진입수수료",
    "주문형태",
    "진입시각",
    "포지션 상태",
    "Pip Lowest",
  ],
};

export default config;
