const inputColumn = [
  "szMember_No",
  "szPVCode",
  "szGrpTeamCode",
  "szTradeType",
  "nFromDate",
  "nToDate",
];
const inputColumnInKor = [
  "회원사번호",
  "부서코드",
  "부서팀코드",
  "거래단위 (99 : 전체조회)",
  "조회 기준 시작 일자",
  "조회 기준 끝 일자",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3639" },
  Input1: {
    szMember_No: "",
    szPVCode: "",
    szGrpTeamCode: "",
    szTradeType: "",
    nFromDate: "",
    nToDate: "",
  },
};

const outputOneInKor = [
  "체결포지션수량",
  "체결 건수",
  "처리결과 메시지",
  "건수",
];
const outputOne = ["nPosCnt", "nCancelCnt", "szMsg", "szCnt"];

const outputTwoColumn = [
  "szOrderNo",
  "szAccNo",
  "szCur_No",
  "nLot",
  "szPO_Code",
  "fOrderRate",
  "szOrdType",
  "szOrderDateTime",
  "szCancelDateTime",
  "nPipLowest",
];

const outputTwoInKor = [
  "주문번호(회원처리항목)",
  "계좌번호",
  "종목코드",
  "수량",
  "매매구분",
  "주문환율",
  "주문형태",
  "주문시각",
  "주문취소시각",
  "Pip Lowest",
];
