const inputColumn = [
  "cRequestOrder",
  "szSeqNo",
  "szCurNo",
  "szCLOID",
  "szCustItem",
  "szOrderID",
];

const inputColumnInKor = [
  "처리구분",
  "순번",
  "종목명",
  "사용자주문정보",
  "회원처리항목",
  "주문번호",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3651" },
  Input1: {
    cRequestOrder: "",
    szSeqNo: "",
    szCurNo: "",
    szCLOID: "",
    szCustItem: "",
    szOrderID: "",
  },
};

const outputTwoColumn = [
  "szCustItem",
  "szOrderID",
  "szAccNo",
  "szCurNo",
  "fLot",
  "szSide",
  "fPrice",
  "szOrdType",
  "fQuote",
  "szOrdTime",
  "szFullName",
];

const outputTwoInKor = [
  "회원처리항목",
  "접수번호",
  "계좌번호",
  "종목명",
  "수량",
  "매매구분",
  "주문가격",
  "주문유형",
  "현재가",
  "주문시각",
  "고객이름",
];
