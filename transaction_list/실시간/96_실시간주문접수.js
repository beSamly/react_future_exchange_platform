
// 실시간 주문 접수
const ninetySix ={
    "Header" : {
        "function" : "A",						// 응답시 'F'
        "termtype" : "HTS",
        "trcode" : "96"
    },
    "Input1" : {								// 응답시 "Input" 없슴
        "Key1" : "char(14)"				// 계좌번호(key)
    },
    "Output1" : {
        "szKey" : "char(15)",
        "szCode" : "char(12)",				// 종목코드
        "szSide" : "char(3)",					// 매매구분
        "szOrdType" : "char(5)",			// 주문유형
        "szStatus" : "char(1)",				// 상태
        "fAmount" : "double(8.0)",			// 주문수량
        "szRate" : "char(21)",				// 주문환률
        "szOpenTime" : "char(30)",			// 주문시간
        "szCustItem1" : "char(11)",			// 회원처리항목1
        "szCustItem2" : "char(14)",			// 회원처리항목2
        "szCustItem3" : "char(55)",			// 회원처리항목3
        "szOrgCustItem1" : "char(11)",	// 취정시 회원처리항목1
        "szOrgCustItem2" : "char(14)",	// 취정시 회원처리항목2
        "szOrgCustItem3" : "char(55)",	// 취정시 회원처리항목3
        "szAccNo" : "char(14)",				// 계좌번호
        "fMtMargin" : "double(8.0)",		// 유지증거금
        "fOrderMargin" : "double(8.0)"	// 주문증거금
    }
}