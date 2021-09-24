//Sell t3215 with szDealDiv(매매구분) with 081

// 주문유형(szDealDiv) Type 
// 079 Buy (매수)
// 080 close buy (전매도 ?)
// 081 Sell (매도)
// 082 close sell (환매수?)

// 주문유형(szOrdType) 
let info = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t3215",
  },
  Input1: {
    szAccNo: "00010057100005",
    szPasswd: "0000",
    szCurNo: "BCE2009Q03BU",
    fOrderSu: "1.0",
    fOrderPrice: "49000",
    fStopPrice: "",
    fLimitPrice: "",
    szOrdType: "UOE",
    nRange: "", //사용안함
    nAlivingTerm: "", //사용안함
    szDealDiv: "081",
    fNxOpenRate: "",
    szSLCustItem: "",
    szOrgCustItem: "",
    szNotMemberAccNo: "", //사용안함
    szStaffID: "",
    szStaffPW: "",
    cIsStaff: "0",
    cModType: "4",
  },
};

const inputFieldInKor = [
  "계좌정보",
  "비밀번호",
  "종목코드",
  "주문수량",
  "주문가격",
  "Stop",
  "Limit",
  "주문유형",
  "주문범위",
  "주문 유효기간",
  "매매구분",
  "미결제약정지수",
  "SL 회원처리항목",
  "청산시 원주문회원처리항목",
  "비회원사계좌번호",
  "담당직원 ID",
  "담당직원 비밀번호",
  "직원 여부",
  "처리 구분",
];

// 시장가 지정가 매도예시
let info = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t3215",
  },
  Input1: {
    szAccNo: "00010057100005",
    szPasswd: "0000",
    szCurNo: "BCE2009Q03BU",
    fOrderSu: "1.0",
    fOrderPrice: "49000",
    fStopPrice: "사용안함",
    fLimitPrice: "사용안함",
    szOrdType: "UOM 지정가면 UOE",
    nRange: "사용안함",
    nAlivingTerm: "사용안함",
    szDealDiv: "081",
    fNxOpenRate: "",
    szSLCustItem: "사용안함",
    szOrgCustItem: "사용안함",
    szNotMemberAccNo: "사용안함",
    szStaffID: "",
    szStaffPW: "",
    cIsStaff: "직원주문 1 or 0",
    cModType: "4",
  },
};