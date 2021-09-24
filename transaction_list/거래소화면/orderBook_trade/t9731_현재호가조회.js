const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t9731" },
  Input1: {
    szCurNo: "BCE2009Q03BU",
    cTermDiv: "3",
    szCritDate: "999999999",
    szCritTime: "999999999",
    nMinTerm: "1",
    nReqCnt: "2000",
  },
};

{
    "Header": { "function": "D", "termtype": "HTS", "trcode": "t9731" },
    "Input1": {
      "szCurNo": "BCE2009Q03BU",
      "cTermDiv": "1",
      "szCritDate": "999999999",
      "szCritTime": "999999999",
      "nMinTerm": "1",
      "nReqCnt": "100",
    },
  }

// 종목 코드,      szCurNo,        char,       12;
// 자료 구분,      cTermDiv,       char,       1;  # 1:틱,2:분,3:일
// 기준 일자,      szCritDate,     char,       8;
// 기준 시간,      szCritTime,     char,       9;
// 분봉 기간,      nMinTerm,       int,        4;
// 데이터 갯수,    nReqCnt,        int,        4;
