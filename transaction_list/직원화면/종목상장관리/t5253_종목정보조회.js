const inputColumn = ["회원사", "상품구분"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t5253" },
  Input1: { szMemberNo: "000", szTradeType: "" },
};
const outputOneInKor = ["A건수"];

const outputOneInEng = ["szCnt"];

const outputTwo = [
  "종목코드",
  "한글명",
  "종목명",
  "해외거래소코드",
  "해외거래소명",
  "상장일",
  "상장가격",
  "소수최저자리",
  "정보수정일",
  "사용구분",
  "계약주소",
  "십진위치",
];

const outputTwoInKor = [
  "szCur_No",
  "szKoreanName",
  "szCur_No2",
  "szTrade_Bank_Code",
  "szTrade_Bank_Name",
  "szIssued_Date",
  "szIssued_Price",
  "szPip_Lowest",
  "szInfo_UpdateDate",
  "szUse_YN",
  "szCONT_ADDR",
  "szDecimal_Point",
];

// {"Header" : {"function" : "D","termtype" : "HTS","trcode" : "t5253"},"Input1" : {"szMemberNo" : "000","szTradeType" : ""}}
const rect = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t5253",
  },
  Output1: {
    szCnt: "0011",
  },
  Output2: [
    [
      "BTC         ",
      "BTC                           ",
      "BitCoin     ",
      "00001       ",
      "BCE                           ",
      20200807,
      11610.0,
      8.0,
      20200807,
      " ",
      "-                                                                                                                                                                                                       ",
      0.0,
    ],
    [
      "USDT        ",
      "USDT                          ",
      "Tether      ",
      "00001       ",
      "BCE                           ",
      20200712,
      1.0,
      1.0,
      20200712,
      " ",
      "-                                                                                                                                                                                                       ",
      0.0,
    ],
    [
      "BNC_BTCUSDT ",
      "BTC                           ",
      "BitCoin     ",
      "00001       ",
      "BCE                           ",
      20200807,
      11610.0,
      8.0,
      20200807,
      " ",
      "-                                                                                                                                                                                                       ",
      0.0,
    ],
    [
      "BMX_BTCUSDT ",
      "BTC                           ",
      "BitCoin     ",
      "00001       ",
      "BCE                           ",
      20200807,
      11610.0,
      8.0,
      20200807,
      " ",
      "-                                                                                                                                                                                                       ",
      0.0,
    ],
    [
      "BCE_BTCUSDT ",
      "BTC                           ",
      "BitCoin     ",
      "00001       ",
      "BCE                           ",
      20200807,
      11610.0,
      8.0,
      20200807,
      " ",
      "-                                                                                                                                                                                                       ",
      0.0,
    ],
    [
      "BTC/KRW     ",
      "BTC                           ",
      "BitCoin     ",
      "00001       ",
      "BCE                           ",
      20200712,
      11000000.0,
      8.0,
      20200712,
      " ",
      "-                                                                                                                                                                                                       ",
      0.0,
    ],
    [
      "BTC/USDT    ",
      "BTC                           ",
      "BitCoin     ",
      "00001       ",
      "BCE                           ",
      20200807,
      11610.0,
      8.0,
      20200807,
      " ",
      "-                                                                                                                                                                                                       ",
      0.0,
    ],
    [
      "BTCUSDT     ",
      "BTCUSDT_CF_BCE                ",
      "BitCoin CF  ",
      "00001       ",
      "BCE                           ",
      20200807,
      11610.0,
      0.0,
      20200807,
      " ",
      "-                                                                                                                                                                                                       ",
      0.0,
    ],
    [
      "BCE2009Q03BU",
      "블록체인 20년09월3분기",
      "BCE2009Q03BU",
      "BCE         ",
      "BCE                           ",
      20200901,
      0.0,
      2.0,
      20200901,
      " ",
      "                                                                                                                                                                                                        ",
      0.0,
    ],
    [
      "BNC2009Q03BU",
      "바이넨스 20년09월3분기",
      "BNC2009Q03BU",
      "BNC         ",
      "BNC                           ",
      20200901,
      0.0,
      2.0,
      20200901,
      " ",
      "                                                                                                                                                                                                        ",
      0.0,
    ],
    [
      "BNC2011W03BU",
      "바이넨스 20년11월2주   ",
      "BNC2011W03BU",
      "BNC         ",
      "BNC                           ",
      20201116,
      0.0,
      2.0,
      20201116,
      " ",
      "                                                                                                                                                                                                        ",
      0.0,
    ],
  ],
  Message: {
    flag: "0",
    code: "00000",
    data: "정상처리 되었습니다",
  },
};
