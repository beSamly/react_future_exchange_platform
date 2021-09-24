//  t3608 계좌현황

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3608" },
  Input1: { szAccNo: "00010057100001" },
};

const outputColumn = [
  "예탁총액현금",
  "미결제약정금액",
  "평가 손익",
  "평가 자산",
  "증거금",
  "유지 증거금",
  "가용 자산",
  "가용 자산 비율",
];

const output = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t3608",
  },
  Output1: {
    szCnt: "0001",
  },
  Output2: [
    [
      250234248.0,
      293660.0,
      -255441.0,
      250272467.0,
      300000.0,
      0.0,
      249934248.0,
      100.0,
    ],
  ],
  Message: {
    flag: "0",
    code: "00000",
    data: "정상처리 되었습니다",
  },
};

// {"Header" : {"function" : "D","termtype" : "HTS","trcode" : "t3608"},"Input1" : {"szAccNo" : "00010057100001"}}계좌현황
