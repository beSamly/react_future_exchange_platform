const input = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't113C',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjA4NzkxNiwiZXhwIjoxNjI2MDg5MTE2fQ.8FmuVWcGnUGnVkCbapaanERTJc8mehi0NxekXBkbWuc',
    },
    Input1: {
        szFlag: '0',
        szMemberNo: '000',
        szCustNo: 'program2@gmail.com   ',
        szPasswd: 'password',
        szField_No: 'char(2)',
        szField_Data1: 'char(100)',
        szField_Data2: 'char(100)',
        szField_Data3: 'char(100)',
        szStaffID: 'char(67)',
        szStaffPasswd: 'char(20)',
    },
};

// {"Header" : { "function" : "D", "termtype" : "HTS", "trcode" : "t023B" }, "Input1" : { "szAccNo" : "00010057100005", "szCurNo" : "USDT" }}

const inputExplanation = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't113C',
    },
    Input1: {
        szFlag: '0 for 조회, 1 for 수정',
        szMemberNo: '000',
        szCustNo: 'program2@gmail.com   ',
        szPasswd: 'password',
        szField_No: '01:접속비번, 02:주문비번, 03:핸드폰, 04:이메일, 05:은행정보 ',
        szField_Data1: 'char(100)',
        szField_Data2: 'char(100)',
        szField_Data3: 'char(100)',
        szStaffID: 'char(67)',
        szStaffPasswd: 'char(20)',
    },
};

const inputForSearchUser = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't113C',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjA4NzkxNiwiZXhwIjoxNjI2MDg5MTE2fQ.8FmuVWcGnUGnVkCbapaanERTJc8mehi0NxekXBkbWuc',
    },
    Input1: {
        szFlag: '0',
        szMemberNo: '000',
        szCustNo: 'program2@gmail.com   ',
        szPasswd: 'password',
    },
};

//Change phone number
const inputForSearchUser = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't113C',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjA4NzkxNiwiZXhwIjoxNjI2MDg5MTE2fQ.8FmuVWcGnUGnVkCbapaanERTJc8mehi0NxekXBkbWuc',
    },
    Input1: {
        szFlag: '1',
        szMemberNo: '000',
        szCustNo: 'program2@gmail.com   ',
        szPasswd: 'password',
        szField_No: '01',
        szField_Data1: 'password',
        szField_Data2: 'password1',
    },
};

const output = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't113C',
    },
    Message: {
        flag: '0 or E',
        code: '00000',
        data: '핸드폰 번호를 변경 등록했습니다.',
    },
};
