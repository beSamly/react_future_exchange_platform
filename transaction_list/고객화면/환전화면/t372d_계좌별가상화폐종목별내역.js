/*


BEGIN_FUNCTION_MAP
    .Func,계좌별 가상화폐 종목별 내역 조회,t372D;
    BEGIN_DATA_MAP
        Input1, 입력1, input;
        begin
            계좌번호,           szAccNo,            char, 14;
            종목코드,           szCur_No,           char, 12;
        end
        Output1, 출력1, output;
        begin
            미청산 포지션 수,   nPosCnt,            double, 22.8;
            체결 건수,          nContractCnt,       int, 4;
            메세지,             szMsg,              char, 80;
            건수,               szCnt,              char,   4;
        end
        Output2, 출력2, output, array;
        begin
            체결번호,           szPrOpen_No,        char,   20;
            종목코드2,          szCur_No2,          char,   12;
            동일 종목 수량,     nLot,               double, 22.8;
            매매구분,           szPO_Code,          char,   3;
            진입환율나중에구현, fOpenPrice,         double, 22.8;
            현재환율,           fCurrentPrice,      double, 22.8;
            일일손익,           nDailyPL,           double, 22.8;
            체결환율,           fOrigOpenPrice,     double, 22.8;
            손익(지수),         nTotalPL,           double, 22.8;
            총손익,             fGrossPL,           double, 22.8;
            이자율,             fInterest,          double, 22.8;
            수수료,             fCommission,        double, 22.8;
            체결수수료,         fOMCM,              double, 22.8;
            롤오버,             fRollover,          double, 22.8;
            순손익,             fNetPL,             double, 22.8;
            주문유형,           szOrdType,          char,   5;
            만기일,             szDue_Date,         char,   10;
            체결 시각,          szPrOpen_DateTime,  char,   30;
            소수최저자리,       nPipLowest,         int,    4;
        end
    END_DATA_MAP
END_FUNCTION_MAP

{
    "Header" : {
        "function" : "D",
        "termtype" : "HTS",
        "trcode" : "t372D"
    },
    "Input1" : {
        "szAccNo" : "char(14)",
        "szCur_No" : "char(12)"
    },
    "Output1" : {
        "nPosCnt" : "double(22.8)",
        "nContractCnt" : "int",
        "szMsg" : "char(80)",
        "szCnt" : "char(4)"
    },
    "Output2" : [
    [ "szPrOpen_No char(20)", "szCur_No2 char(12)", "nLot double(22.8)", "szPO_Code char(3)", "fOpenPrice double(22.8)", "fCurrentPrice double(22.8)", "nDailyPL double(22.8)", "fOrigOpenPrice double(22.8)", "nTotalPL double(22.8)", "fGrossPL double(22.8)", "fInterest double(22.8)", "fCommission double(22.8)", "fOMCM double(22.8)", "fRollover double(22.8)", "fNetPL double(22.8)", "szOrdType char(5)", "szDue_Date char(10)", "szPrOpen_DateTime char(30)", "nPipLowest int"
        ],
    ],
    "Message" : {
        "flag" : "char(1)",
        "code" : "char(5)",
        "data" : "string"
    }
}
*/