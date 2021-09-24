
/*
BEGIN_FUNCTION_MAP
    .Func,가상화폐 입출고 가스비 처리 고객,t365C;
    BEGIN_DATA_MAP
        Input1, 입력1, input;
        begin
            계좌번호,           szAccNo,            char,   14;
            비밀번호,           szPasswd,           char,   8;
            종목코드,           szCurNo,            char,   12;
            수량,               fOrderSu,           double, 8;
            주문가격,           fPrice,             double, 8;
            체결가격,           fExePrice,          double, 8;
            주문유형,           szOrdType,          char,   5;
            주문범위,           nRange,             int,    4;
            주문한계,           nAlivingTerm,       int,    4;
            매매구분,           szDealDiv,          char,   3;
            매입시가격,         fNxOpenRate,        double, 8;
            원회원처리항목,     szOrgCustItem,      char,   80;
            비회원사계좌번호,   szNotMemberAccNo,   char,   9;
            직원ID,             szStaffID,          char,   64;
            직원비번,           szStaffPW,          char,   20;
            직원구분,           cIsStaff,           char,   1;
            처리시각,           szAcceptTime,       char,   30;
            주문번호,           szOrderID,          char,   20;
            약정ID,             szEXPosID,          char,   20;
            송수신TX,           txid,               char,   100;
        end
        Output1, 출력1, output;
        begin
            회원처리항목,       szCustItem,         char,   80;
        end
    END_DATA_MAP
END_FUNCTION_MAP

Example!!


{
    "Header" : {
        "function" : "D",
        "termtype" : "HTS",
        "trcode" : "t365C"
    },
    "Input1" : {
        "szAccNo" : "char(14)",
        "szPasswd" : "char(8)",
        "szCurNo" : "char(12)",
        "fOrderSu" : "double(8.0)",
        "fPrice" : "double(8.0)",
        "fExePrice" : "double(8.0)",
        "szOrdType" : "char(5)",
        "nRange" : "int",
        "nAlivingTerm" : "int",
        "szDealDiv" : "char(3)",
        "fNxOpenRate" : "double(8.0)",
        "szOrgCustItem" : "char(80)",
        "szNotMemberAccNo" : "char(9)",
        "szStaffID" : "char(64)",
        "szStaffPW" : "char(20)",
        "cIsStaff" : "char(1)",
        "szAcceptTime" : "char(30)",
        "szOrderID" : "char(20)",
        "szEXPosID" : "char(20)",
        "txid" : "char(100)"
    },
    "Output1" : {
        "szCustItem" : "char(81)"
    },
    "Message" : {
        "flag" : "char(1)",
        "code" : "char(5)",
        "data" : "string"
    }
}

{"Header" : {"function" : "D","termtype" : "HTS","trcode" : "t365C"},
"Input1" : {
    "szAccNo" : "00010057100005",
    "szPasswd" : "0000",
    "szCurNo" : "BTC",
    "fOrderSu" : "1.5",
    "fPrice" : "34400",
    "fExePrice" : "34400",
    "szOrdType" : "SOM",
    "nRange" : "0",
    "nAlivingTerm" :"0",
    "szDealDiv" : "079",
    "fNxOpenRate" : "",
    "szOrgCustItem" : "",
    "szNotMemberAccNo" : "",
    "szStaffID" : "",
    "szStaffPW" : "",
    "cIsStaff" : "0",
    "szAcceptTime" : "20210414010107",
    "szOrderID" : "",
    "szEXPosID" : "",
    "txid" : ""
}
}


//입고 예시

{"Header" : {"function" : "D","termtype" : "HTS","trcode" : "t365C"},"Input1" : {"szAccNo" : "00010057100005","szPasswd" : "0000","szCurNo" : "BTC","fOrderSu" : "15","fPrice" : "34400","fExePrice" : "34400","szOrdType" : "EOM","nRange" : "0", "nAlivingTerm" :"0","szDealDiv" : "079","fNxOpenRate" : "","szOrgCustItem" : "","szNotMemberAccNo" : "","szStaffID" : "","szStaffPW" : "","cIsStaff" : "0","szAcceptTime" : "20210624142507","szOrderID" : "","szEXPosID" : "","txid" : ""}}

//출고예시
{"Header" : {"function" : "D","termtype" : "HTS","trcode" : "t365C"},"Input1" : {"szAccNo" : "00010057100005","szPasswd" : "0000","szCurNo" : "BTC","fOrderSu" : "15","fPrice" : "34400","fExePrice" : "34400","szOrdType" : "EOM","nRange" : "0", "nAlivingTerm" :"0","szDealDiv" : "081","fNxOpenRate" : "","szOrgCustItem" : "","szNotMemberAccNo" : "","szStaffID" : "","szStaffPW" : "","cIsStaff" : "0","szAcceptTime" : "20210624142507","szOrderID" : "","szEXPosID" : "","txid" : ""}}

*/