// 
// 신규 TR 및 실시간 데이터 형식입니다.
//

// TR : t9731   : 시계열 데이터 조회

1) res 
	BEGIN_FUNCTION_MAP
		.Func,차트 조회,t9731;
		BEGIN_DATA_MAP
			Input1, 입력1, input;
			begin
				종목 코드,      szCurNo,        char,       12;
				자료 구분,      cTermDiv,       char,       1;  # 1:틱, 2:분, 3:일
				기준 일자,      szCritDate,     char,       8;
				기준 시간,      szCritTime,     char,       9;
				분봉 기간,      nMinTerm,       int,        4;
				데이터 개수,    nReqCnt,        int,        4;
			end
			Output1, 출력1, output, array;
			begin
				일자,           szDate,         char,       8;
				시간,           szTime,         char,       9;
				시가,           fOpen,          double,     22.8;
				고가,           fHigh,          double,     22.8;
				저가,           fLow,           double,     22.8;
				종가,           fClose,         double,     22.8;
				거래량,         fRemume,        double,     22.8;
			end
		END_DATA_MAP
	END_FUNCTION_MAP


	{
		"Header" : {
			"function" : "D",
			"termtype" : "HTS",
			"trcode" : "t9731"
		},
		"Input1" : {
			"szCurNo" : "char(12)",
			"cTermDiv" : "char(1)",
			"szCritDate" : "char(8)",
			"szCritTime" : "char(9)",
			"nMinTerm" : "int",
			"nReqCnt" : "int"
		},
		"Output1" : [
			[ "szDate char(8)", "szTime char(9)", "fOpen double(22.8)", "fHigh double(22.8)", 
			"fLow double(22.8)", "fClose double(22.8)", "fRemume double(22.8)"
			],
		],
		"Message" : {
			"flag" : "char(1)",
			"code" : "char(5)",
			"data" : "string"
		}
	}
	
	3) 조회 예
	{
    		"Header" : {
			"function" : "D",
			"termtype" : "HTS",
			"trcode" : "t9731"
		},
		"Input1" : {
			"szCurNo" : "BTC_KRW",
			"cTermDiv" : "2",			# 분데이터
			"szCritDate" : "99999999",		# 가장 최근일자
			"szCritTime" : "999999999",		# 가장 최근 시간
			"nMinTerm" : "5",			# 1:1분봉, 5:5분 봉
			"nReqCnt" : "100"			# 100건
		}
	}
//------------------------------------------------------------------------------------
// TR : t9732    : 종목별 현재가 조회

	1) RES 내용
	BEGIN_FUNCTION_MAP
		.Func,현재가 조회,t9732;
		BEGIN_DATA_MAP
			Input1, 입력1, input;
			begin
				종목코드,   szCurNo,    char,       12;
			end
			Output1, 출력1, output;
			begin
				종목코드,   szCurNo,    char,       12;
				일자,       szDate,     char,       8;
				시간,       szTime,     char,       9;
				시가,       fOpen,      double,     22.8;
				고가,       fHigh,      double,     22.8;
				저가,       fLow,       double,     22.8;
				현재가,     fClose,     double,     22.8;
				거래량,     fRemume,    double,     22.8;
				전일종가,   fPreClose,  double,     22.8;
				매수호가,   fBuyPrice,  double,     22.8;
				매도호가,   fSellPrice, double,     22.8;
			end
		END_DATA_MAP
	END_FUNCTION_MAP

	2) JSON 구조
	{
		"Header" : {
			"function" : "D",
			"termtype" : "HTS",
			"trcode" : "t9732"
		},
		"Input1" : {
			"szCurNo" : "char(12)"
		},
		"Output1" : {
			"szCurNo" : "char(12)",
			"szDate" : "char(8)",
			"szTime" : "char(9)",
			"fOpen" : "double(22.8)",
			"fHigh" : "double(22.8)",
			"fLow" : "double(22.8)",
			"fClose" : "double(22.8)",
			"fRemume" : "double(22.8)",
			"fPreClose" : "double(22.8)",
			"fBuyPrice" : "double(22.8)",
			"fSellPrice" : "double(22.8)"
		},
		"Message" : {
			"flag" : "char(1)",
			"code" : "char(5)",
			"data" : "string"
		}
	}

	3) 조회 예
	{
		"Header" : {
			"function" : "D",
			"termtype" : "HTS",
			"trcode" : "t9732"
		},
		"Input1" : {
			"szCurNo" : "BTC_KRW"
		}
	}
//------------------------------------------------------------------------------------
// TR : t9733	: 종목별 호가조회

    1) RES 내용
	BEGIN_FUNCTION_MAP
		.Func,호가 조회,t9733;
		BEGIN_DATA_MAP
			Input1, 입력1, input;
			begin
				종목코드,           szCurNo,            char,       12;
			end
			Output1, 출력1, output;
			begin
				종목코드,		szCurNo,            char,       12;
				일자,            szDate,             char,       8;
				시간,             szTime,             char,       9;
				매수호가 1,     fBuyPrc1,           double, 22.8;
				매수잔량 1,     fBuyRem1,           double, 22.8;
				매수건수 1,     fBuyCnt1,           int,		4;
				매수호가 2,     fBuyPrc2,           double, 22.8;
				매수잔량 2,     fBuyRem2,           double, 22.8;
				매수건수 2,     fBuyCnt2,           int,		4;
				매수호가 3,     fBuyPrc3,           double, 22.8;
				매수잔량 3,     fBuyRem3,           double, 22.8;
				매수건수 3,     fBuyCnt3,           int,		4;
				매수호가 4,     fBuyPrc4,           double, 22.8;
				매수잔량 4,     fBuyRem4,           double, 22.8;
				매수건수 4,     fBuyCnt4,           int,		4;
				매수호가 5,     fBuyPrc5,           double, 22.8;
				매수잔량 5,     fBuyRem5,           double, 22.8;
				매수건수 5,     fBuyCnt5,           int,		4;
				매수호가 6,     fBuyPrc6,           double, 22.8;
				매수잔량 6,     fBuyRem6,           double, 22.8;
				매수건수 6,     fBuyCnt6,           int,		4;
				매수호가 7,     fBuyPrc7,           double, 22.8;
				매수잔량 7,     fBuyRem7,           double, 22.8;
				매수건수 7,     fBuyCnt7,           int,		4;
				매수호가 8,     fBuyPrc8,           double, 22.8;
				매수잔량 8,     fBuyRem8,           double, 22.8;
				매수건수 8,     fBuyCnt8,           int,		4;
				매수호가 9,     fBuyPrc9,           double, 22.8;
				매수잔량 9,     fBuyRem9,           double, 22.8;
				매수건수 9,     fBuyCnt9,           int,		4;
				매수호가 10,    fBuyPrc10,      double, 22.8;
				매수잔량 10,    fBuyRem10,      double, 22.8;
				매수건수 10,    fBuyCnt10,      int,		4;
				매도호가 1,     fSellPrc1,          double, 22.8;
				매도잔량 1,     fSellRem1,          double, 22.8;
				매도건수 1,     fSellCnt1,          int,		4;
				매도호가 2,     fSellPrc2,          double, 22.8;
				매도잔량 2,     fSellRem2,          double, 22.8;
				매도건수 2,     fSellCnt2,          int,		4;
				매도호가 3,     fSellPrc3,          double, 22.8;
				매도잔량 3,     fSellRem3,          double, 22.8;
				매도건수 3,     fSellCnt3,          int,		4;
				매도호가 4,     fSellPrc4,          double, 22.8;
				매도잔량 4,     fSellRem4,          double, 22.8;
				매도건수 4,     fSellCnt4,          int,		4;
				매도호가 5,     fSellPrc5,          double, 22.8;
				매도잔량 5,     fSellRem5,          double, 22.8;
				매도건수 5,     fSellCnt5,          int,		4;
				매도호가 6,     fSellPrc6,          double, 22.8;
				매도잔량 6,     fSellRem6,          double, 22.8;
				매도건수 6,     fSellCnt6,          int,		4;
				매도호가 7,     fSellPrc7,          double, 22.8;
				매도잔량 7,     fSellRem7,          double, 22.8;
				매도건수 7,     fSellCnt7,          int,		4;
				매도호가 8,     fSellPrc8,          double, 22.8;
				매도잔량 8,     fSellRem8,          double, 22.8;
				매도건수 8,     fSellCnt8,          int,		4;
				매도호가 9,     fSellPrc9,          double, 22.8;
				매도잔량 9,     fSellRem9,          double, 22.8;
				매도건수 9,     fSellCnt9,          int,		4;
				매도호가 10,    fSellPrc10,     double, 22.8;
				매도잔량 10,    fSellRem10,     double, 22.8;
				매도건수 10,    fSellCnt10,     int,		4;
			end	
		END_DATA_MAP
	END_FUNCTION_MAP
	
	2) JSON 구조
	{
		"Header" : {
			"function" : "D",
			"termtype" : "HTS",
			"trcode" : "t9733"
		},
		"Input1" : {
			"szCurNo" : "char(12)"
		},
		"Output1" : {
			"szCurNo" : "char(12)",
			"szDate" : "char(8)",
			"szTime" : "char(9)",
        			"fBuyPrc1" : "double(22.8)",
        			"fBuyRem1" : "double(22.8)",
        			"fBuyCnt1" : "int",
        			"fBuyPrc2" : "double(22.8)",
        			"fBuyRem2" : "double(22.8)",
        			"fBuyCnt2" : "int",
        			"fBuyPrc3" : "double(22.8)",
        			"fBuyRem3" : "double(22.8)",
        			"fBuyCnt3" : "int",
        			"fBuyPrc4" : "double(22.8)",
        			"fBuyRem4" : "double(22.8)",
        			"fBuyCnt4" : "int",
        			"fBuyPrc5" : "double(22.8)",
        			"fBuyRem5" : "double(22.8)",
        			"fBuyCnt5" : "int",
        			"fBuyPrc6" : "double(22.8)",
        			"fBuyRem6" : "double(22.8)",
        			"fBuyCnt6" : "int",
        			"fBuyPrc7" : "double(22.8)",
        			"fBuyRem7" : "double(22.8)",
        			"fBuyCnt7" : "int",
        			"fBuyPrc8" : "double(22.8)",
        			"fBuyRem8" : "double(22.8)",
        			"fBuyCnt8" : "int",
        			"fBuyPrc9" : "double(22.8)",
        			"fBuyRem9" : "double(22.8)",
        			"fBuyCnt9" : "int",
        			"fBuyPrc10" : "double(22.8)",
        			"fBuyRem10" : "double(22.8)",
        			"fBuyCnt10" : "int",

        			"fSellPrc1" : "double(22.8)",
        			"fSellRem1" : "double(22.8)",
        			"fSellCnt1" : "int",
        			"fSellPrc2" : "double(22.8)",
        			"fSellRem2" : "double(22.8)",
        			"fSellCnt2" : "int",
        			"fSellPrc3" : "double(22.8)",
        			"fSellRem3" : "double(22.8)",
        			"fSellCnt3" : "int",
        			"fSellPrc4" : "double(22.8)",
        			"fSellRem4" : "double(22.8)",
        			"fSellCnt4" : "int",
        			"fSellPrc5" : "double(22.8)",
        			"fSellRem5" : "double(22.8)",
        			"fSellCnt5" : "int",
        			"fSellPrc6" : "double(22.8)",
        			"fSellRem6" : "double(22.8)",
        			"fSellCnt6" : "int",
        			"fSellPrc7" : "double(22.8)",
        			"fSellRem7" : "double(22.8)",
        			"fSellCnt7" : "int",
        			"fSellPrc8" : "double(22.8)",
        			"fSellRem8" : "double(22.8)",
        			"fSellCnt8" : "int",
        			"fSellPrc9" : "double(22.8)",
        			"fSellRem9" : "double(22.8)",
        			"fSellCnt9" : "int",
        			"fSellPrc10" : "double(22.8)",
        			"fSellRem10" : "double(22.8)",
        			"fSellCnt10" : "int"
		},
		"Message" : {
			"flag" : "char(1)",
			"code" : "char(5)",
			"data" : "string"
		}
	}
	
	3) 조회 요청 예
	{
		"Header" : {
			"function" : "D",
			"termtype" : "HTS",
			"trcode" : "t9733"
		},
		"Input1" : {
			"szCurNo" : "BTC_KRW"
		}
	}

//------------------------------------------------------------------------------------
// TR : t9734	: 전종목 현재가 조회

	1) RES 내용
	BEGIN_FUNCTION_MAP
		.Func,현재가 조회,t9734;
		BEGIN_DATA_MAP
			Input1, 입력1, input;
			begin
				종목구분,   szGubun,    char,       6;
			end
			Output1, 출력1, output, array;
			begin
				종목코드,   szCurNo,    char,       12;
				일자,       szDate,     char,       8;
				시간,       szTime,     char,       9;
				시가,       fOpen,      double,     22.8;
				고가,       fHigh,      double,     22.8;
				저가,       fLow,       double,     22.8;
				현재가,     fClose,     double,     22.8;
				거래량,     fVolume,    double,     22.8;
				전일종가,   fPreClose,  double,     22.8;
				매수호가,   fBuyPrice,  double,     22.8;
				매도호가,   fSellPrice, double,     22.8;
			end
		END_DATA_MAP
	END_FUNCTION_MAP
	
	2) JSON 구조
	{
		"Header" : {
			"function" : "D",
			"termtype" : "HTS",
			"trcode" : "t9734"
		},
		"Input1" : {
			"szGubun" : "char(6)"
		},
		"Output1" : [
			[ "szCurNo char(12)", "szDate char(8)", "szTime char(9)", "fOpen double(22.8)", "fHigh double(22.8)", "fLow double(22.8)", "fClose double(22.8)", "fVolume double(22.8)", "fPreClose double(22.8)", "fBuyPrice double(22.8)", "fSellPrice double(22.8)" ],
		],
		"Message" : {
			"flag" : "char(1)",
			"code" : "char(5)",
			"data" : "string"
		}
	}

	3) 요청 예
	{
		"Header" : {
			"function" : "D",
			"termtype" : "HTS",
			"trcode" : "t9734",
			"trid" : 10
		},
		"Input1" : {
			"szGubun" : "000000"
		}	
	}
	