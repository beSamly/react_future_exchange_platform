//t3602 종목잔고내역 Open positions
const parsedInput = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t3602",
  },
  Input1: {
    szAccNo: "char(14)",
    szAccNoPW: "char(8)",
    szCurNo: "char(12)",
  },
  Output1: {
    szCnt: "char(4)",
  },


  Output2: [
    [
      "szTicketNo char(20)",
      "szCurNo char(12)",
      "szSide char(3)",
      "szRate double(22.8)",
      "fLot double(22.8)",
      "szQuote double(22.8)",
      "szStop double(22.8)",
      "szLimit double(22.8)",
      "fTotalPL double(22.8)",
      "fGrossPL double(22.8)",
      "fInterest double(22.8)",
      "szStatus char(1)",
      "szOrderTime char(30)",
      "szCustItem char(80)",
      "szStopItem char(80)",
      "szLimitItem char(80)",
      "nPrOpenDate int",
    ],
  ],
  Message: {
    flag: "char(1)",
    code: "char(5)",
    data: "string",
  },
};

const output2Column = [
  "포지션ID",
  "종목명",
  "매매구분",
  "주문가",
  "수량",
  "현재가",
  "스톱",
  "리밋",
  "총손익",
  "평가손익",
  "이자",
  "상태",
  "체결시각",
  "회원처리항목",
  "Stop회원처리항목",
  "Limit회원처리항목",
  "체결일자",
];

const ouput2 = [
  [
    "포지션ID1",
    "종목명1",
    "매매구분1",
    "현재가1",
    "수량1",
    "현재가1",
    "스톱1",
    "리밋1",
    "총손익1",
    "평가손익1",
    "이자1",
    "상태1",
    "체결시각1",
    "회원처리항목1",
    "Stop회원처리항목1",
    "Limit회원처리항목1",
    "체결일자",
  ],
  [
    "포지션ID2",
    "종목명2",
    "매매구분2",
    "현재가2",
    "수량2",
    "현재가2",
    "스톱2",
    "리밋2",
    "총손익2",
    "평가손익2",
    "이자2",
    "상태2",
    "체결시각2",
    "회원처리항목2",
    "Stop회원처리항목2",
    "Limit회원처리항목2",
    "체결일자2",
  ],
];

const output = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t3602",
  },
  Output1: {
    szCnt: "0002",
  },
  Output2: [
    [
      "0000000000004764    ",
      "BCE2009Q03BU",
      "079",
      50000.0,
      1.0,
      50000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      " ",
      "2021/03/12-14:21:55           ",
      "000000000570000006423    999199001                                              ",
      "                                                                                ",
      "                                                                                ",
      20210311,
    ],
    [
      "0000000000004762    ",
      "BCE2009Q03BU",
      "079",
      50000.0,
      1.0,
      50000.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      " ",
      "2021/03/12-14:21:54           ",
      "000000000570000006422    999199001                                              ",
      "                                                                                ",
      "                                                                                ",
      20210311,
    ],
  ],
  Message: {
    flag: "0",
    code: "00000",
    data: "정상처리 되었습니다",
  },
};

// {
//     "Header" : {
//         "function" : "D",
//         "termtype" : "HTS",
//         "trcode" : "t3602"
//     },
//     "Input1" : {
//         "szAccNo" : "00010057100001",
//         "szAccNoPW" : "0000",
//         "szCurNo" : "BCE2009Q03BU"
//     },
// }
