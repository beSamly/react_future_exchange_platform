const inputColumn = [
  "처리구분",
  "해외거래소 단축코드",
  "해외거래소명",
  "설립국가 코드",
  "소재지",
  "거래소 상태",
];

const inputColumnInEng = [
  "szProc",
  "szEX_NO",
  "szEX_NAME",
  "szEX_NATION_CD",
  "szEX_ADDRESS",
  "szEX_STAT",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t5502" },
  Input1: {
    szProc: "",
    szEX_NO: "",
    szEX_NAME: "",
    szEX_NATION_CD: "",
    szEX_ADDRESS: "",
    szEX_STAT: "",
  },
};

const outputOneInKor = ["거래소코드", "거래소상태", "처리여부"];

const outputOneInEng = ["EX_NO", "EX_STAT", "RetCode"];

// {"Header" : {"function" : "D", "termtype" : "HTS", "trcode" : "t5501"},"Input1" : {"szProc" : "1","szEX_NO" : "BBB","szEX_NAME" : "BitBB","szEX_NATION_CD" : "02","szEX_ADDRESS" : "China","szEX_STAT" : "1"}}
