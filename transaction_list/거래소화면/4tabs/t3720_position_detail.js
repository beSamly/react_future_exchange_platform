// t3720 계좌별 미청산내역 조회 positions detail
const parsedInput = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t3720",
  },
  Input1: {
    szAccNo: "00010057100001",
  },
};

const output1Column = ["미청산 포지션 수", "체결 건수", "메세지"];

const output2Column = [
  "체결번호",
  "종목코드2",
  "동일 종목 수량",
  "매매구분",
  "진입환율나중에구현",
  "현재환율",
  "일일손익",
  "체결환율",
  "손익(지수)",
  "총손익",
  "이자율",
  "수수료",
  "체결수수료",
  "롤오버",
  "순손익",
  "주문유형",
  "만기일",
  "체결 시각",
  "소수최저자리",
];

const output = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t3720",
  },
  Output1: {
    nPosCnt: 9.82,
    nContractCnt: 2,
    szMsg:
      "                                                                                ",
    szCnt: "0002",
  },
  Output2: [
    [
      "                    ",
      "BTC/USDT    ",
      6.0,
      "   ",
      24000.0,
      0.0,
      -24000.0,
      0.0,
      -144000.0,
      -0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      "     ",
      "20210311  ",
      "                              ",
      0,
    ],
    [
      "                    ",
      "BTCUSDT     ",
      3.82,
      "   ",
      13000.0,
      10005.0,
      -2995.0,
      0.0,
      -11440.0,
      -0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      0.0,
      "     ",
      "20210311  ",
      "                              ",
      0,
    ],
  ],
  Message: {
    flag: "0",
    code: "00000",
    data: "데이타 조회가 정상적으로 완료되었습니다.",
  },
};

// {
//     "Header" : {
//         "function" : "D",
//         "termtype" : "HTS",
//         "trcode" : "t3720"
//     },
//     "Input1" : {
//         "szAccNo" : "00010057100001"
//     },
// }
