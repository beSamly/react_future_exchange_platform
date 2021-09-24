const inputColumn = [
  "회원사",
  "고객ID",
  "비밀번호",
  "확인비밀번호",
  "성",
  "명",
  "국적국가",
  "핸드폰번호",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t113B" },
  Input1: {
    szMemberNo: "000",
    szCustNo: "myid",
    szPasswd: "mypassword",
    szPasswd1: "mypassword",
    szFamilyName: "lee",
    szUserName: "sam",
    szNation_Name: "Korea",
    szTelNo2: "01030119642",
  },
};
const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t113B" },
  Input1: {
    szMemberNo: "000",
    szCustNo: "myid",
    szPasswd: "mypassword",
    szPasswd1: "mypassword",
    szFamilyName: "lee",
    szUserName: "sam",
    szNation_Name: "Korea",
    szTelNo2: "01030119642",
  },
};

// 예시 tr
// {"Header" : {"function" : "D","termtype" : "HTS","trcode" : "t113B"},"Input1" : {        "szMemberNo" : "000","szCustNo" : "besamly2018@gmail.com","szPasswd" : "mypassword",
//         "szPasswd1" : "mypassword",
//         "szFamilyName" : "Lee",
//         "szUserName" : "Sam",
//         "szNation_Name" : "82",
//         "szTelNo2" : "01030119642"
//     }}
