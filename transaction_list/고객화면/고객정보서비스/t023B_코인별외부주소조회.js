const inputColumn = ["accno", "cur_no"];
const inputColumnInKor = ["계좌번호", "종목코드"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t023B" },
  Input1: {
    accno: "",
    cur_no: "",
  },
};

const outputOneInKor = ["00.등록 이외.미등록 ", " 지갑 주소 "];
const outputOne = ["ret_cd", "wallet_addr"];

// {"Header" : { "function" : "D", "termtype" : "HTS", "trcode" : "t023B" }, "Input1" : { "szAccNo" : "00010057100005", "szCurNo" : "USDT" }}
