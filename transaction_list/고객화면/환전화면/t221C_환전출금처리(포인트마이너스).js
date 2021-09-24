
/*
BEGIN_FUNCTION_MAP
    .Func,출금처리 고객,t221C;
    BEGIN_DATA_MAP
        Input1, 입력1, input;
        begin
            일자,     nDate, int, 4;
            계좌정보,     szAccNo, char, 14;
            계좌비밀번호,     szPasswd, char,    8;
            계정번호,     szPNCode, char, 3;
            적요번호,     szPOCode, char, 3;
            출금액,   fCashOutM, double, 22.8;
            업무구분,     szRACode, char, 4;
            출금 화폐,     szOutputCur, char, 2;
            출금 원화폐금액,   fMoney, double, 22.8;
            비고,   szMemo, char, 60;
            직원아이디,   szStaffID, char, 67;
            직원비밀번호, szStaffPwd, char, 20;
        end
        Output1, 출력1, output;
        begin
            계좌번호,     szAccNo, char, 14;
            이름,     szName, char, 20;
            계정번호,     szPNCode, char, 3;
            적요번호,     szPOCode, char, 3;
            출금액,   fCachOutM, double, 22.8;ㄹ
            미수금액,   fRecM, double, 22.8;
            금일기타수표액,   fEtcBillM, double, 22.8;
            원장번호,   fLedgerIndex, double, 8;
            예수금 잔금,   fDepoTotalM, double, 22.8;
        end
    END_DATA_MAP
END_FUNCTION_MAP


{"Header" : {"function" : "D", "termtype" : "HTS", "trcode" : "t211C"}, "Input1" : {
        "nDate" : "20210606","szAccNo" : "00010057100005","szPasswd" : "0000",
        "szPNCode" : "526","szPOCode" : "125","fCashBalanceM" : "10000","fInputBillM" : "","fEtcBillM" : "",
        "szRACode" : "0001","szInputCur" : "00","fMoney" : "",
        "szStaffID" : "","szStaffPwd" : "","szMemo" : "",
        "szRequest_Name" : ""}}


*/