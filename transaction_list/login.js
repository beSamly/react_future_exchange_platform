// client login
{"Header" : {"function" : "D","termtype" : "HTS","trcode" : "login"},"Input1" : {"userid" : "test01","passwd" : "test01", "ipaddr" : "211.13.238.186","ibno" : "000","usertype" : "4","demo" : "0","retry" : "1","usecert" : "","version" : "00","filler" : "  ", "mac_addr" : ""}}

//admin login

{"Header" : {"function" : "D","termtype" : "HTS","trcode" : "login"},"Input1" : {"userid" : "teller01","passwd" : "1234", "ipaddr" : "211.13.238.186","ibno" : "000","usertype" : "0","demo" : "0","retry" : "1","usecert" : "","version" : "00","filler" : "  ", "mac_addr" : ""}}

//leokim login
{"Header" : {"function" : "D","termtype" : "HTS","trcode" : "login"},"Input1" : {"userid" : "leokim88","passwd" : "kim1962", "ipaddr" : "211.13.238.186","ibno" : "000","usertype" : "4","demo" : "0","retry" : "1","usecert" : "","version" : "00","filler" : "  ", "mac_addr" : ""}}


// admin 계정은 teller01 / 비번 1234 입니다.
const parsedInput = {
  Header: { function: "D", termtype: "HTS", trcode: "login" },
  Input1: {
    userid: "test01",
    passwd: "test01",
    ipaddr: "211.13.238.186",
    ibno: "000",
    usertype: "4",
    demo: "0",
    retry: "1",
    usecert: "",
    version: "00",
    filler: "  ",
    mac_addr: "",
  },
};

const output = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "login",
  },
  Output1: {
    userid: "test01                                                          ",
    ipaddr: "211.13.238.186 ",
    result: "1",
    userlevel: " ",
    deptcode: "   ",
    teamcode: "   ",
    resultmsg:
      "정상처리되었습니다.                                                                                                    ",
    systime: "20210310133904",
    filler: "  ",
    lastlogintime: "2021/03/10-12:53:22 ",
    lasttlogouttime: "2020/12/12-15:25:04 ",
    systemdatetime: "2021/03/10-13:39:04 ",
    custtype: " ",
    custname: "aaa01                                   ",
    custno: "1234            ",
    nLogInSu: 833,
    nPwdExpiration: -1,
  },
  Message: {
    flag: "0",
    code: "00000",
    data: "정상처리 되었습니다",
  },
};

const leokimLogin={"Header" : {"function" : "D","termtype" : "HTS","trcode" : "login"},"Input1" : {"userid" : "leokim88","passwd" : "kim1962", "ipaddr" : "211.13.238.186","ibno" : "000","usertype" : "4","demo" : "0","retry" : "1","usecert" : "","version" : "00","filler" : "  ", "mac_addr" : ""}}
  

{"Header":{"function":"D","termtype":"HTS","trcode":"t2910","userid":"graepin8@gmail.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJncmFlcGluOEBnbWFpbC5jb20iLCJpc3MiOiJCTVgiLCJpYXQiOjE2MjUxMTU1OTcsImV4cCI6MTYyNTExNjc5N30.JE9f19BLnFwB-MaiMQEaEl1WwrMfBRZCkK2bLu_Vt3I"},"Input1":{"szAccNo":"00010057100041","nFromDate":"20201001","nToDate":"20210625","szPOcode":"999","szMemberNo":"000"}}