const inputColumn = [
  "계좌번호",
  "비밀번호",
  "종목코드",
  "수량",
  "주문가격",
  "체결가격",
  "주문유형",
  "주문범위",
  "주문한계",
  "매매구분",
  "매입시가격",
  "원회원처리항목",
  "비회원사계좌번호",
  "직원ID",
  "직원비번",
  "직원구분",
  "처리시각",
  "주문번호",
  "약정ID",
  "송수신TX",
];

const inputColumnInEng = [
  "szAccNo",
  "szPasswd",
  "szCurNo",
  "fOrderSu",
  "fPrice",
  "fExePrice",
  "szOrdType",
  "nRange",
  "nAlivingTerm",
  "szDealDiv",
  "fNxOpenRate",
  "szOrgCustItem",
  "szNotMemberAccNo",
  "szStaffID",
  "szStaffPW",
  "cIsStaff",
  "szAcceptTime",
  "szOrderID",
  "szEXPosID",
  "txid",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2413" },
  Input1: {
    szAccNo: "",
    szPasswd: "",
    szCurNo: "",
    fOrderSu: "",
    fPrice: "",
    fExePrice: "",
    szOrdType: "",
    nRange: "",
    nAlivingTerm: "",
    szDealDiv: "",
    fNxOpenRate: "",
    szOrgCustItem: "",
    szNotMemberAccNo: "",
    szStaffID: "",
    szStaffPW: "",
    cIsStaff: "",
    szAcceptTime: "",
    szOrderID: "",
    szEXPosID: "",
    txid: "",
  },
};
// input
// 계좌번호,           szAccNo,            char,   14;
// 비밀번호,           szPasswd,           char,   8;
// 종목코드,           szCurNo,            char,   12;
// 수량,               fOrderSu,           double, 8;
// 주문가격,           fPrice,             double, 8;
// 체결가격,           fExePrice,          double, 8;
// 주문유형,           szOrdType,          char,   5;
// 주문범위,           nRange,             int,    4;
// 주문한계,           nAlivingTerm,       int,    4;
// 매매구분,           szDealDiv,          char,   3;
// 매입시가격,         fNxOpenRate,        double, 8;
// 원회원처리항목,     szOrgCustItem,      char,   80;
// 비회원사계좌번호,   szNotMemberAccNo,   char,   9;
// 직원ID,             szStaffID,          char,   64;
// 직원비번,           szStaffPW,          char,   20;
// 직원구분,           cIsStaff,           char,   1;
// 처리시각,           szAcceptTime,       char,   30;
// 주문번호,           szOrderID,          char,   20;
// 약정ID,             szEXPosID,          char,   20;
// 송수신TX,           txid,               char,   100;

const outputOneInKor = ["회원처리항목"];

const outputOneInEng = ["szCustItem"];

