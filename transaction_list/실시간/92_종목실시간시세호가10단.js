// 종목 실시간 시세 호가
const ninetyTwo={
    "Header" : {
        "function" : "A",						// 응답시 'F'
        "termtype" : "HTS",
        "trcode" : "92"
    },
    "Input1" : {
        "Key1" : "BTC_KRW",
    }
    "Output1" : {
        "szSymbol" : "char(12)",
        "szDate" : "char(8)",
        "szTime" : "char(9)",
        "szBuyPrc1" : "char(21)",
        "szBuyRem1" : "char(21)",
        "szBuyCnt1" : "char(5)",
        "szBuyPrc2" : "char(21)",
        "szBuyRem2" : "char(21)",
        "szBuyCnt2" : "char(5)",
        "szBuyPrc3" : "char(21)",
        "szBuyRem3" : "char(21)",
        "szBuyCnt3" : "char(5)",
        "szBuyPrc4" : "char(21)",
        "szBuyRem4" : "char(21)",
        "szBuyCnt4" : "char(5)",
        "szBuyPrc5" : "char(21)",
        "szBuyRem5" : "char(21)",
        "szBuyCnt5" : "char(5)",
        "szBuyPrc6" : "char(21)",
        "szBuyRem6" : "char(21)",
        "szBuyCnt6" : "char(5)",
        "szBuyPrc7" : "char(21)",
        "szBuyRem7" : "char(21)",
        "szBuyCnt7" : "char(5)",
        "szBuyPrc8" : "char(21)",
        "szBuyRem8" : "char(21)",
        "szBuyCnt8" : "char(5)",
        "szBuyPrc9" : "char(21)",
        "szBuyRem9" : "char(21)",
        "szBuyCnt9" : "char(5)",
        "szBuyPrc10" : "char(21)",
        "szBuyRem10" : "char(21)",
        "szBuyCnt10" : "char(5)",
        "szSellPrc1" : "char(21)",
        "szSellRem1" : "char(21)",
        "szSellCnt1" : "char(5)",
        "szSellPrc2" : "char(21)",
        "szSellRem2" : "char(21)",
        "szSellCnt2" : "char(5)",
        "szSellPrc3" : "char(21)",
        "szSellRem3" : "char(21)",
        "szSellCnt3" : "char(5)",
        "szSellPrc4" : "char(21)",
        "szSellRem4" : "char(21)",
        "szSellCnt4" : "char(5)",
        "szSellPrc5" : "char(21)",
        "szSellRem5" : "char(21)",
        "szSellCnt5" : "char(5)",
        "szSellPrc6" : "char(21)",
        "szSellRem6" : "char(21)",
        "szSellCnt6" : "char(5)",
        "szSellPrc7" : "char(21)",
        "szSellRem7" : "char(21)",
        "szSellCnt7" : "char(5)",
        "szSellPrc8" : "char(21)",
        "szSellRem8" : "char(21)",
        "szSellCnt8" : "char(5)",
        "szSellPrc9" : "char(21)",
        "szSellRem9" : "char(21)",
        "szSellCnt9" : "char(5)",
        "szSellPrc10" : "char(21)",
        "szSellRem10" : "char(21)",
        "szSellCnt10" : "char(5)"
    }	
}


// 2) JSON 출력 구조
const JsonExample={
"Header" : {
    "function" : "F",
    "termtype" : "HTS",
    "trcode" : "92"
},
"Input1" : {
    "Key1" : "char(12)"
},
"Output1" : {
    "szSymbol" : "char(12)",
    "szDate" : "char(8)",
    "szTime" : "char(9)",
    "szBuyPrc1" : "char(21)",
    "szBuyRem1" : "char(21)",
    "szBuyCnt1" : "char(5)",
    "szBuyPrc2" : "char(21)",
    "szBuyRem2" : "char(21)",
    "szBuyCnt2" : "char(5)",
    "szBuyPrc3" : "char(21)",
    "szBuyRem3" : "char(21)",
    "szBuyCnt3" : "char(5)",
    "szBuyPrc4" : "char(21)",
    "szBuyRem4" : "char(21)",
    "szBuyCnt4" : "char(5)",
    "szBuyPrc5" : "char(21)",
    "szBuyRem5" : "char(21)",
    "szBuyCnt5" : "char(5)",
    "szBuyPrc6" : "char(21)",
    "szBuyRem6" : "char(21)",
    "szBuyCnt6" : "char(5)",
    "szBuyPrc7" : "char(21)",
    "szBuyRem7" : "char(21)",
    "szBuyCnt7" : "char(5)",
    "szBuyPrc8" : "char(21)",
    "szBuyRem8" : "char(21)",
    "szBuyCnt8" : "char(5)",
    "szBuyPrc9" : "char(21)",
    "szBuyRem9" : "char(21)",
    "szBuyCnt9" : "char(5)",
    "szBuyPrc10" : "char(21)",
    "szBuyRem10" : "char(21)",
    "szBuyCnt10" : "char(5)",

    "szSellPrc1" : "char(21)",
    "szSellRem1" : "char(21)",
    "szSellCnt1" : "char(5)",
    "szSellPrc2" : "char(21)",
    "szSellRem2" : "char(21)",
    "szSellCnt2" : "char(5)",
    "szSellPrc3" : "char(21)",
    "szSellRem3" : "char(21)",
    "szSellCnt3" : "char(5)",
    "szSellPrc4" : "char(21)",
    "szSellRem4" : "char(21)",
    "szSellCnt4" : "char(5)",
    "szSellPrc5" : "char(21)",
    "szSellRem5" : "char(21)",
    "szSellCnt5" : "char(5)",
    "szSellPrc6" : "char(21)",
    "szSellRem6" : "char(21)",
    "szSellCnt6" : "char(5)",
    "szSellPrc7" : "char(21)",
    "szSellRem7" : "char(21)",
    "szSellCnt7" : "char(5)",
    "szSellPrc8" : "char(21)",
    "szSellRem8" : "char(21)",
    "szSellCnt8" : "char(5)",
    "szSellPrc9" : "char(21)",
    "szSellRem9" : "char(21)",
    "szSellCnt9" : "char(5)",
    "szSellPrc10" : "char(21)",
    "szSellRem10" : "char(21)",
    "szSellCnt10" : "char(5)"
},
"Message" : {
    "flag" : "char(1)",
    "code" : "char(5)",
    "data" : "string"
}
}

// 3) 요청 예
const inputExample={
"Header" : {
    "function" : "A",				// 'A' 등록, 'U' 해제
    "termtype" : "HTS",
    "trcode" : "92"
},
"Input1" : {
    "Key1" : "BTC_KRW",
}
}


