const input = {
  Header: { function: "D", termtype: "HTS", trcode: "5432" },
  Input1: {
    szMemberNo: "", //회원사,
    szTradeType: "", //거래단위,
    szDealerCode: "", //딜러팀코드,
  },
};

const outputOneInKor = [
  "회원사",
  "거래단위",
  "딜러그룹",
  "딜러팀",
  "영업일구분",
  "시작일",
  "종료일",
  "영업구분",
  "최대수량",
  "현재수량",
  "Array 건수",
];

const outputOneInEng = [
  "MEMBER_NO",
  "TRADE_TYPE",
  "DEALERGRP_ID",
  "DEALERTEAM_ID",
  "BIZDAY_YN",
  "BIZDATE_START",
  "BIZDATE_END",
  "BIZ_YN",
  "MAX_ITEM_CNT",
  "NOW_ITEM_CNT",
  "szCnt",
];

const outputTwoInEng = ["종목코드", "종목상태", "변경일자"];

const outputTwoInEng = ["CUR_NO", "ItemStatCode", "UpdateDateTime"];

// config file format
const config = {
  firstLevelMenu: "운영",
  secondLevelMenu: "",
  pageName: "거래소 운영 조회",
  link: "7091",

  Header: { function: "D", termtype: "HTS", trcode: "t5432" },
  Input1: {
    szMemberNo: "",
    szTradeType: "",
    szDealerCode: "",
  },
  outputOneOrTwo: "both",
  inputColumnInKor: ["회원사", "거래단위", "딜러팀코드"],

  outputOneColumnInKor: [
    "회원사",
    "거래단위",
    "딜러그룹",
    "딜러팀",
    "영업일구분",
    "시작일",
    "종료일",
    "영업구분",
    "최대수량",
    "현재수량",
    "Array 건수",
  ],

  outputTwoColumnInKor: ["종목코드", "종목상태", "변경일자"],
};

export default config;
