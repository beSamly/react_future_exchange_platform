const inputColumn = ["accno", "passwd", "cur_no", "wallet_addr"];
const inputColumnInKor = ["계좌번호", "비밀번호", "종목코드", "지갑 주소"];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t023A" },
  Input1: {
    accno: "",
    passwd: "",
    cur_no: "",
    wallet_addr: "",
  },
};

const outputOneInKor = ["00.성공 이외.실패", " 지갑 주소 "];
const outputOne = ["ret_cd", "wallet_addr"];

// {"Header" : {"function" : "D","termtype" : "HTS",        "trcode" : "t023A"},"Input1" : {"szAccNo" : "00010057100005",
//         "szPasswd" : "0000",
//         "szCurNo" : "USDT",
//         "szWallet_Addr" : "0xc588719ef0575214be4d8a09199b377a0f0c1b04"}}
