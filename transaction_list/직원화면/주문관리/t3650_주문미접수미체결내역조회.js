const inputColumn = ["szMemberNo", "szOrder_gubun"];

const inputColumnInKor = ["회원사", "주문구분"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3650" },
  Input1: {
    szMemberNo: "",
    szOrder_gubun: "",
  },
};
const outputOneInKor = ["A건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [
  "szCustItem",
  "szCurNo",
  "szSide",
  "szRate",
  "fLot",
  "szQuote",
  "szStop",
  "szLimit",
  "szStatus",
  "szOrderTime",
  "szOrdType",
  "szAccNo",
];

const outputTwoInKor = [
  "회원처리항목",
  "종목코드",
  "매매구분",
  "가격",
  "수량",
  "현재가",
  "스톱",
  "리밋",
  "상태",
  "주문시간",
  "주문유형",
  "계좌번호",
];
