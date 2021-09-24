const inputColumn = ["회원사구분"];

const inputColumnInEng = ["szMember_No"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t5502" },
  Input1: {
    szMember_No: "",
  },
};

const outputOneInKor = ["A건수"];

const outputOneInEng = ["szCnt"];

const outputTwo = [
  "szEX_NO",
  "szEX_NAME",
  "szEX_NATION_CD",
  "szEX_ADDRESS",
  "szEX_STAT",
];

const outputTwoInKor = [
  "해외거래소 단축코드",
  "해외거래소명",
  "설립국가 코드",
  "소재지",
  "거래소 상태",
];

// {"Header" : {"function" : "D", "termtype" : "HTS", "trcode" : "t5502"},"Input1" : {"szMember_No" : "000"}}

const rect = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t5502",
  },
  Output1: {
    szCnt: "0005",
  },
  Output2: [
    [
      "BBB",
      "BitBB                         ",
      "02",
      "China                                             ",
      "1",
    ],
    [
      "BCE",
      "BCEX 1ST Future               ",
      "82",
      "Seoul                                             ",
      "2",
    ],
    [
      "BMX",
      "Bitmax                        ",
      "01",
      "New York                                          ",
      "1",
    ],
    [
      "BNC",
      "Binance                       ",
      "03",
      "Sim Cheon                                         ",
      "1",
    ],
    [
      "UBT",
      "UpBit                         ",
      "82",
      "Seoul                                             ",
      "1",
    ],
  ],
  Message: {
    flag: "0",
    code: "00000",
    data: "정상처리 되었습니다",
  },
};
