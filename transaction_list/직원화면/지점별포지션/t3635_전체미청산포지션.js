const inputColumn = [
  "szMemberNo",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "szDate",
];
const inputColumnInKor = [
  "회원사",
  "부서코드",
  "부서팀코드",
  "상품구분",
  "일자",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3633" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    szDate: "",
  },
};

const outputOneInKor = [
  "미청산수",
  "미청산건수",
  "Netting수량",
  "메시지",
  "A건수",
];
const outputOne = ["nPosCnt", "nOpenCnt", "nTotal_Pos_Su", "szMsg", "szCnt"];

const outputTwoColumn = [
  "szPrOpen_No",
  "szAccNo",
  "szCur_No",
  "nLot",
  "szPO_Code",
  "fOpenPrice",
  "fCurrentPrice",
  "nDailyPL",
  "fTotPL",
  "fGrossPL",
  "fInterest",
  "fCommission",
  "fOMCM",
  "fNetPL",
  "szOrdType",
  "szDueDate",
  "szPrOpen_DateTime",
  "nPipLowest",
];

const outputTwoInKor = [
  "체결번호",
  "계좌번호",
  "종목코드",
  "수량",
  "매매구분",
  "진입환율",
  "현재환율",
  "일일손익",
  "총손익(지수)",
  "총손익",
  "이자",
  "수수료",
  "체결수수료",
  "순손익",
  "주문형태",
  "만기일",
  "체결시각",
  "소수최저자리",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 포지션",
  pageName: "전체 계좌별 미청산내역",
  link: "7417",

  Header: { function: "D", termtype: "HTS", trcode: "t3635" },
  Input1: {
    szMemberNo: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    szDate: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["회원사", "부서코드", "부서팀코드", "상품구분", "일자"],

  outputOneColumnInKor: [
    "미청산수",
    "미청산건수",
    "Netting수량",
    "메시지",
    "A건수",
  ],

  outputTwoColumnInKor: [
    "체결번호",
    "계좌번호",
    "종목코드",
    "수량",
    "매매구분",
    "진입환율",
    "현재환율",
    "일일손익",
    "총손익(지수)",
    "총손익",
    "이자",
    "수수료",
    "체결수수료",
    "순손익",
    "주문형태",
    "만기일",
    "체결시각",
    "소수최저자리",
  ],
};

export default config;
