
// 실시간 주문 거부
const ninetySeven= {
    "Header" : {
        "function" : "A",						// 응답시 'F'
        "termtype" : "HTS",
        "trcode" : "97"
    },
    "Input1" : {								// 응답시 "Input"없슴
        "Key1" : "char(14)"				// 계좌번호(key)
    },
    "Output1" : {
        "szKey" : "char(15)",
        "szMbrPrc1" : "char(11)",			// 회원처리항목1
        "szMbrPrc2" : "char(14)",			// 회원처리항목2
        "szMbrprc3" : "char(55)",			// 회원처리항목3
        "szCode" : "char(12)",				// 종목코드
        "szOrderGubun" : "char(3)",		// 매매구분
        "fOrderQty" : "double(22.8)",		// 수량
        "OrderPrice" : "char(21)",			// 가격
        "OrderType" : "char(5)",			// 주문유형
        "szAcctNo" : "char(14)",			// 계좌번호
        "fRemMoney" : "double(22.8)",	// 유지증거금
        "fOrderMoney" : "double(22.8)"	// 주문증거금
    }
}