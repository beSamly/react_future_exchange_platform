const inputColumn = [
  "szUserID",
  "szStaffNo",
  "szMemberNo",
  "szGroupCode",
  "szTeamCode",
  "szPassWd",
  "cMngGubun",
  "cAccessLevel",
  "cMenu",
];
const inputColumnInKor = [
  "사원 ID",
  "사원 번호",
  "회원사 번호",
  "소속부서",
  "소속 팀",
  "패스워드",
  "관리자 구분",
  "직급레벨",
  "0.조회 1.추가 2.수정 3.삭제",
];

const input = {
  Header: { function: "D", termtype: "HTS", trcode: "t5212" },
  Input1: {
    szUserID: "",
    szStaffNo: "",
    szMemberNo: "",
    szGroupCode: "",
    szTeamCode: "",
    szPassWd: "",
    cMngGubun: "",
    cAccessLevel: "",
    cMenu: "",
  },
};

const outputOneInKor = ["A건수"];
const outputOne = ["szCnt"];

const outputTwoColumn = [
  "szUserID",
  "szStaffNo",
  "szMemberNo",
  "szGroupCode",
  "szTeamCode",
  "szPassWd",
  "cMngGubun",
  "cAccessLevel",
];
const outputTwoInKor = [
  "사원 ID",
  "사원 번호",
  "회원사 번호",
  "소속부서",
  "소속 팀",
  "패스워드",
  "관리자 구분",
  "직급레벨",
];
