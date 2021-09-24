const inputColumn = ["szMemberNo", "szPVCode", "szGrpTeamCode", "szTradeType"];
const inputColumnInKor = [
  "회원사",
  "부서코드",
  "부서팀코드",
  "거래단위 (99 : 전체조회)",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3613" },
  Input1: {
    szMember_No: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
  },
};

const outputOneInKor = [
  "1단계 마진콜",
  "2단계 마진콜",
  "조회 건수(계좌 수)",
  "건수",
];
const outputOne = ["nLv1Cnt", "nLv2Cnt", "nCnt", "szCnt"];

const outputTwoColumn = [
  "마진콜 레벨",
  "계좌번호",
  "고객 성명",
  "예탁총액현금(Balance)",
  "미결제약정금액",
  "평가손익",
  "자산",
  "증거금",
  "가용 자산",
  "가용 자산 비율",
];

const outputTwoInKor = [
  "nLevel",
  "szAccNo",
  "szUserName",
  "fBalance",
  "fOutstanding",
  "fGrossPL",
  "fEquity",
  "fMarginReq",
  "fUsableEquity",
  "fUEquityRate",
];

// config file format
const config = {
  firstLevelMenu: "선물포지션/거래내역",
  secondLevelMenu: "지점별 포지션",
  pageName: "일자별 포지션거래 내역",
  link: "7411",

  Header: { function: "D", termtype: "HTS", trcode: "t3613" },
  Input1: {
    szMember_No: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: [
    "회원사",
    "부서코드",
    "부서팀코드",
    "거래단위 (99 : 전체조회)",
  ],

  outputOneColumnInKor: [
    "1단계 마진콜",
    "2단계 마진콜",
    "조회 건수(계좌 수)",
    "건수",
  ],

  outputTwoColumnInKor: [
    "마진콜 레벨",
    "계좌번호",
    "고객 성명",
    "예탁총액현금(Balance)",
    "미결제약정금액",
    "평가손익",
    "자산",
    "증거금",
    "가용 자산",
    "가용 자산 비율",
  ],
};

export default config;
