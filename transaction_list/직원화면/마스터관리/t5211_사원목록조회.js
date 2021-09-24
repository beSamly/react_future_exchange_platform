const inputColumn = ['szMemberNo', 'szStaffNo', 'cFlag'];
const inputColumnInKor = ['회원사 번호', '사원번호', '0. 전체조회 1.한명 선택조회'];

const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't5211' },
    Input1: {
        szMemberNo: '',
        szStaffNo: '',
        cFlag: '',
    },
};

const outputOneInKor = ['A건수'];
const outputOne = ['szCnt'];

const outputTwoColumn = ['szMemberNo', 'szStaffNo', 'cFlag'];
const outputTwoInKor = ['회원사 번호', '사원번호', '0. 전체조회 1.한명 선택조회'];

const inputExample = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't5211',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        szMemberNo: '000',
        szStaffNo: 'teller01',
        cFlag: '0',
    },
};
