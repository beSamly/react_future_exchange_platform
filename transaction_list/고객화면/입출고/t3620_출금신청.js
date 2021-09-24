const inputColumn = [
  "accno",
  "cur_no",
  "target_addr",
  "target_extr",
  "amount",
  "amt_prc",
  "pswd",
];
const inputColumnInKor = [
  "계좌번호",
  "종목코드",
  "송금주소",
  "송금주소 추가정보 (XRP-EOS)",
  "송금수량",
  "환산금액",
  "거래 비밀번호",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t3620" },
  Input1: {
    accno: "",
    cur_no: "",
    target_addr: "",
    target_extr: "",
    amount: "",
    amt_prc: "",
    pswd: "",
  },
};

const outputOneInKor = [
  "계좌번호",
  "종목코드",
  "송금주소",
  "송금주소 추가정보 (XRP-EOS)",
  "송금수량",
  "환산금액",
  "송금번호",
];
const outputOne = [
  "accno",
  "cur_no",
  "target_addr",
  "target_extr",
  "amount",
  "amt_prc",
  "txid",
];
