// 종목 실시간 시세 체결
const ninetyOne = {
  Header: {
    function: "A", //응답시 'F'
    termtype: "HTS",
    trcode: "91",
  },
  Input1: {
    Key1: "char(12)",
  },
  Output1: {
    szSymbol: "char(12)",
    szDate: "char(8)",
    szTime: "char(9)",
    szOpen: "char(21)",
    szHigh: "char(21)",
    szLow: "char(21)",
    szClose: "char(21)",
    szVolume: "char(21)",
    szBuyPrice: "char(21)",
    szSellPrice: "char(21)",
    szPreClose: "char(21)",
  },
};

const outputTwoInKor = [
  "종목코드",
  "일자",
  "시간",
  "시가",
  "고가",
  "저가",
  "현재가",
  "거래량",
  "매수호가",
  "매도호가",
  "전일가",
];

// 2) JSON 출력 구조
const JsonExample = {
  Header: {
    function: "F",
    termtype: "HTS",
    trcode: "91",
  },
  Output1: {
    szSymbol: "char(12)",
    szDate: "char(8)",
    szTime: "char(9)",
    szOpen: "char(21)",
    szHigh: "char(21)",
    szLow: "char(21)",
    szClose: "char(21)",
    szVolume: "char(21)",
    szBuyPrice: "char(21)",
    szSellPrice: "char(21)",
    szPreClose: "char(21)",
  },
  Message: {
    flag: "char(1)",
    code: "char(5)",
    data: "string",
  },
};

// 3) 조회 요청 예
const inputExample = {
  Header: {
    function: "A", // 'A' 등록, 'U' 해제
    termtype: "HTS",
    trcode: "91",
  },
  Input1: {
    Key1: "BTC_KRW",
  },
};

const test = {
  Header: { function: "D", termtype: "HTS", trcode: "t3215" },
  Input1: {
    fStopPrice: 55400,
    szAccNo: "00010057100003",
    szPasswd: "1234",
    szCurNo: "BCE2009Q03BU",
    fOrderSu: 2,
    fOrderPrice: 56000,
    szOrdType: "UCES",
    szDealDiv: "082",
    fNxOpenRate: "",
    szOrgCustItem:
      "000000000570000009321    999199001                                              ",
    szStaffID: "",
    szStaffPW: "",
    cIsStaff: "0",
    cModType: "4",
  },
};
