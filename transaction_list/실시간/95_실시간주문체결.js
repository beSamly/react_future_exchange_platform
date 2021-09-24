
// 실시간 주문 체결
const ninetyFive={
    "Header" : {
        "function" : "A",						// 응답시 'F'
        "termtype" : "HTS",
        "trcode" : "95"
    },
    "Input1" : {								// 응답시 "Input" 없슴
        "Key1" : "char(14)"				// 계좌번호(key)
    },
    "Output1" : {
        "szKey" : "char(15)",
        "szMemberNo" : "char(3)",			// 회원사ID
        "szClOrdID" : "char(80)",			 //주문 접수번호
        "szNoticeNo" : "char(20)",			// 통지번호
        "szOrdType" : "char(5)",			// 주문유형
        "szCode" : "char(12)",				// 종목코드
        "szOrderID" : "char(20)",			// 거래소 접수번호
        "szPGCode" : "char(2)",				// 투자자구분
        "fAmount" : "double(8.0)",			// 약정수량
        "szRate" : "char(21)",				// 약정지수
        "szQuote" : "char(21)",				// 현재가
        "szExeTime" : "char(30)",			// 약정시각
        "szOrgCustItem1" : "char(11)",	// 주문시 회원처리항목1
        "szOrgCustItem2" : "char(14)",	// 주문시 회원처리항목2
        "szOrgCustItem3" : "char(55)",	// 주문시 회원처리항목3
        "szAccNo" : "char(14)",				// 계좌번호
        "szCustItem1" : "char(11)",			// 회원처리항목1
        "szCustItem2" : "char(14)",			// 회원처리항목2
        "szCustItem3" : "char(55)",			// 회원처리항목3
        "szFundBasket" : "char(2)",		// Fund & Basket code
        "szSide" : "char(3)",					// 매매구분
        "szState" : "char(1)",				// 체결상태
        "szInType" : "char(5)",				// 체결구분
        "szStop" : "char(21)",				// Stop
        "szLimit" : "char(21)",				// Limit
        "fTotalPL" : "double(8.0)",			// 핍손익
        "fGrossPL" : "double(8.0)",			// 일일손익(가격으로 환산된 손익)
        "szOrgTicketNo" : "char(20)",		// 원체결번호
        "szOpenTime" : "char(30)",			// 신규주문 체결시간
        "szAccName" : "char(20)",			// 계좌명
        "fRevRate" : "double(8.0)",			// 체결시 반대지수
        "fCommition" : "double(8.0)",		// 수수료
        "fOpenMarkup" : "double(8.0)",	// OM (전환매시 사용)
        "szUserID" : "char(67)",			// 고객ID
        "szFXCMPosID" : "char(20)",		// TicketNo
        "fInterest" : "double(8.0)",			// 이자
        "fCloseMarkup" : "double(8.0)",	// CM (전환매시 사용)
        "fMtMargin" : "double(8.0)",		// 유지증거금
        "fOrderMargin" : "double(8.0)",	// 주문증거금
        "fOutBalance" : "double(8.0)",		// 미결제금액
        "fPipCost" : "double(8.0)"			// 체결시 Pip Cost
    }
}
