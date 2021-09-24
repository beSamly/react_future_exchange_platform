// {
//     "Header" : {
//         "function" : "D",
//         "termtype" : "HTS",
//         "trcode" : "t0307"
//     },
//     "Input1" : {
//         "szMemberNo" : "char(3)",
//         "szCustNo" : "char(64)"
//     },
//     "Output1" : {
//         "szFamilyName" : "char(20)",
//         "szUserName" : "char(20)",
//         "szCnt" : "char(4)"
//     },
//     "Output2" : [
//     [ "szAccNo char(14)"
//         ],
//     ],
//     "Message" : {
//         "flag" : "char(1)",
//         "code" : "char(5)",
//         "data" : "string"
//     }
// }

const input = {
  Header: {
    function: "D",
    termtype: "HTS",
    trcode: "t0307",
  },
  Input1: {
    szMemberNo: "char(3)",
    szCustNo: "char(64)",
  },
};
