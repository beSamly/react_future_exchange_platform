
// New order 신규오더
const input = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t3215",
  },
  Input1: {
    szAccNo: "char(14)",
    szPasswd: "char(8)",
    szCurNo: "char(12)",
    fOrderSu: "double(8.0)",
    fOrderPrice: "double(8.0)",
    fStopPrice: "double(8.0)",
    fLimitPrice: "double(8.0)",
    szOrdType: "char(5)",
    nRange: "int",
    nAlivingTerm: "int",
    szDealDiv: "char(3)",
    fNxOpenRate: "double(8.0)",
    szSLCustItem: "char(80)",
    szOrgCustItem: "char(80)",
    szNotMemberAccNo: "char(9)",
    szStaffID: "char(67)",
    szStaffPW: "char(20)",
    cIsStaff: "char(1)",
    cModType: "char(1)",
  },
  Output1: {
    szCustItem: "char(80)",
  },
  Message: {
    flag: "char(1)",
    code: "char(5)",
    data: "string",
  },
};


{"Header" : {"function" : "D","termtype" : "HTS","trcode" : "t3215"},"Input1" : {"szAccNo" : "00010057100001","szPasswd" : "0000","szCurNo" : "BCE2009Q03BU", "fOrderSu" : "1.0", 

"fOrderPrice" : "50000","fStopPrice" : "","fLimitPrice" : "","szOrdType" : "UOE","nRange" : "","nAlivingTerm" : "","szDealDiv" : "079","fNxOpenRate" : "","szSLCustItem" : 

"","szOrgCustItem" : "","szNotMemberAccNo" : "","szStaffID" : "","szStaffPW" : "","cIsStaff" : "0","cModType" : "4"}}