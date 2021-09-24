const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "nFromDate",
  "nToDate",
];

const inputColumnInKor = [
  "회원사",
  "부서코드",
  "부서팀코드",
  "상품구분",
  "시작일자",
  "끝일자",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3637" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nFromDate: "",
    nToDate: "",
  },
};

const outputOneInKor = ["체결수량", "체결건수", "메시지", "A건수"];
const outputOne = ["nPosCnt", "nExeCnt", "szMsg", "szCnt"];

const outputTwoColumn = [
  "szOrderNo",
  "szPrOpen_No",
  "szAccNo",
  "szCur_No",
  "nLot",
  "szPO_Code",
  "fOrderPrice",
  "fExecPrice",
  "szOrderType",
  "szOderDateTime",
  "szExecDateTime",
];

const outputTwoInKor = [
  "주문번호",
  "체결번호",
  "계좌번호",
  "종목코드2",
  "체결수량",
  "매매구분",
  "주문환율",
  "체결환율",
  "주문유형",
  "주문시각",
  "체결시각",
  "소수최저자리",
  "nPipLowest",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 포지션",
  pageName: "전체포지션 거래내역",
  link: "7420",

  Header: { function: "D", termtype: "HTS", trcode: "t3637" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nFromDate: "",
    nToDate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: [
    "회원사",
    "부서코드",
    "부서팀코드",
    "상품구분",
    "시작일자",
    "끝일자",
  ],

  outputOneColumnInKor: ["체결수량", "체결건수", "메시지", "A건수"],

  outputTwoColumnInKor: [
    "주문번호",
    "체결번호",
    "계좌번호",
    "종목코드2",
    "체결수량",
    "매매구분",
    "주문환율",
    "체결환율",
    "주문유형",
    "주문시각",
    "체결시각",
    "소수최저자리",
    "nPipLowest",
  ],
};

export default config;
