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
  Header: { function: "D", termtype: "HTS", trcode: "t3638" },
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
  "szAccNo",
  "szCur_No",
  "nLot",
  "szPO_Code",
  "fOrderRate",
  "szOrdType",
  "szRejectCode",
  "szRejectDateTime",
  "nPipLowest",
];

const outputTwoInKor = [
  "주문번호",
  "계좌번호",
  "종목코드",
  "수량",
  "매매구분",
  "주문환율",
  "주문형태",
  "거부코드",
  "주문거부시각",
  "소수최저자리",
];
