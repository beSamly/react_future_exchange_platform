// 7010 고객정보조회 t1122
const M = require("minimatch");

const inputFields = [
  "회원사번호",
  "부서코드",
  "부서팀코드",
  "거래단위",
  "요청수량",
  "키카운트",
];

const inputFieldsInEng = [
  "szIB_no",
  "szGroup_Code",
  "szTeam_Code",
  "szTradeType",
  "nQtyCnt",
  "nKeyCnt",
];

const outputTwoColumn = [
  "고객HTSID",
  "이름",
  "비밀번호",
  "계좌번호",
  "주민등록번호",
  "핸드폰번호",
  "성별",
  "주소-1",
  "계좌개설일",
  "계좌Type",
  "로그인상태",
  "로그인시간",
];

const outputTwoExample = [
  "143352",
  "Sam lee",
  "password!!",
  "324-234-2313",
  "864933-124524",
  "010-2344-2312",
  "Male",
  "서울 영등포구 214-3",
  "2015-04-23",
  "Private",
  "Not logged in",
  "loggin time",
];
