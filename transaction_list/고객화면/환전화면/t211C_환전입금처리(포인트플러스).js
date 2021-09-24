/*======================
입금
=======================*/
const example = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't211C' },
    Input1: {
        nDate: '20210606',
        szAccNo: '00010057100005',
        szPasswd: '0000',
        szPNCode: '526',
        szPOCode: '120(for 입금) || 125(for 출금)',
        fCashBalanceM: '10000',
        fInputBillM: '',
        fEtcBillM: '',
        szRACode: '0001',
        szInputCur: '00',
        fMoney: '',
        szStaffID: '',
        szStaffPwd: '',
        szMemo: '',
        szRequest_Name: '',
    },
};

/*
BEGIN_FUNCTION_MAP
    .Func,입금처리 고객,t211C;
    BEGIN_DATA_MAP
        Input1, 입력1, input;
        begin
            일자,     nDate, int, 4;
            계좌정보,     szAccNo, char, 14;
            계정번호,     szPNCode, char, 3;
            적요번호,     szPOCode, char, 3;
            현금잔액,   fCashBalanceM, double, 22.8;
            수표입금액,   fInputBillM, double, 22.8;
            기타수표액,   fEtcBillM, double, 22.8;
            업무구분,     szRACode, char, 4;
            입금 화폐,     szInputCur, char, 2;
            입금 원화폐금액,   fMoney, double, 22.8;
            직원아이디,   szStaffID, char, 67;
            직원비밀번호, szStaffPwd, char, 20;
            비고,   szMemo, char, 60;
            의뢰인성명,   szRequest_Name, char, 20;
        end
        Output1, 출력1, output;
        begin
            계좌번호,     szAccNo, char, 14;
            이름,     szName, char, 20;
            계정번호,     szPNCode, char, 3;
            적요번호,     szPOCode, char, 3;
            예수금 잔액,   fCashBalanceM, double, 22.8;
            수표입금액,   fInputBillM, double, 22.8;
            기타수표액,   fEtcBillM, double, 22.8;
            원장번호,   fLedgerIndex, double, 8;
            현금 입금액,   fInputM, double, 22.8;
        end
    END_DATA_MAP
END_FUNCTION_MAP

example

{"Header" : {"function" : "D", "termtype" : "HTS", "trcode" : "t211C"}, "Input1" : {
        "nDate" : "20210606","szAccNo" : "00010057100005","szPasswd" : "0000",
        "szPNCode" : "526","szPOCode" : "120","fCashBalanceM" : "10000","fInputBillM" : "","fEtcBillM" : "",
        "szRACode" : "0001","szInputCur" : "BTC         ","fMoney" : "",
        "szStaffID" : "","szStaffPwd" : "","szMemo" : "",
        "szRequest_Name" : ""}}


        {"Header" : {"function" : "D", "termtype" : "HTS", "trcode" : "t211C"},
            "Input1" : {
            "nDate" : "20210606",
            "szAccNo" : "00010057100005",
            "szPasswd" : "0000",
            "szPNCode" : "526",
            "szPOCode" : "120",
            "fCashBalanceM" : "10000",
            "fInputBillM" : "",
            "fEtcBillM" : "",
            "szRACode" : "0001",
            "szInputCur" : "BTC         ",
            "fMoney" : "",
            "szStaffID" : "",
            "szStaffPwd" : "",
            "szMemo" : "",
            "szRequest_Name" : ""
        }
        }




            {"Header" : { "function" : "D", "termtype" : "HTS", "trcode" : "t221C" , "userid":"program2@gmail.com" , "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc" },
    "Input1" : { "nDate" : "20210623", "szAccNo" : "00010057300067",        "szPasswd" : "password", "szPNCode" : "526", "szPOCode" : "120", "fCashBalanceM" : "2500000",
        "szRACode" : "0001",
        "szOutputCur" : "00", "fMoney" : "", "szMemo" : "", "szStaffID" : "","szStaffPwd" : "" }}
*/

const example = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't211C',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        nDate: '20210718',
        szAccNo: '00010057300067',
        szPasswd: 'password',
        szPNCode: '526',
        szPOCode: '120',
        fCashBalanceM: '15000',
        szRACode: '0001',
        szOutputCur: '00',
        fMoney: '',
        szMemo: '',
        szStaffID: '',
        szStaffPwd: '',
    },
};
