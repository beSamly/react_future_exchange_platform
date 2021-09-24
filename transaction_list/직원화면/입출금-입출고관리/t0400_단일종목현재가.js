const inputColumn = ["회원사 000", "공백1", "상품코드 57", "공백2", "종목코드"];

const inputColumnInEng = [
  "member_no",
  "filler1",
  "trade_type",
  "filler2",
  "symbol",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t2413" },
  Input1: {
    member_no: "",
    filler1: "",
    trade_type: "",
    filler2: "",
    symbol: "",
  },
};
// input
//   회원사 000,     member_no,      char,   3;
//   공백1,          filler1,        char,   3;
//   상품코드 57,    trade_type,     char,   2;
//   공백2,          filler2,        char,   6;
//   종목코드,       symbol,         char,   12;

const outputOneInKor = [
  "매수가",
  "매수 고가",
  "매수 저가",
  "전일 종가",
  "52주 고가",
  "52주 고가일",
  "52주 저가",
  "52주 저가일",
  "거래량",
  "거래대금",
];

const outputOneInEng = [
  "buy_prc",
  "buy_high_prc",
  "buy_low_prc",
  "prev_clpc",
  "week52_high_prc",
  "week52_high_dt",
  "week52_low_prc",
  "week52_low_dt",
  "trade_vol",
  "trade_amt",
];
