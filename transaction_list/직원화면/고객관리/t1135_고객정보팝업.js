const inputColumn = ['선택조회', '회원사 번호', '이름', '주민번호', '고객ID'];
const inputColumnInEng = ['cFlag', 'szMemberName', 'szFullName', 'szNativeNo', 'szCustNo'];

const output2 = ['고객 이름', '주민번호', '고객HTS ID', '계좌번호'];

const input = {
    Header: { function: 'D', termtype: 'HTS', trcode: 't1135' },
    Input1: {
        cFlag: '', //"0" : 전체, "1" :이름, "2" : 주민번호, "3" :ID
        szMemberNo: '',
        szFullName: '',
        szNativeNo: '',
        szCustNo: '',
    },
};

const exampleData = ['Sam lee', '853031-125352', 'HTSID12452', '335-2351-1244'];

const asd = {
    Header: {
        function: 'D',
        termtype: 'HTS',
        trcode: 't1135',
        userid: 'program2@gmail.com',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwcm9ncmFtMkBnbWFpbC5jb20iLCJhY2NObyI6IjAwMDEwMDU3MzAwMDY3IiwiaXNzIjoiQk1YIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsImlhdCI6MTYyNjMxNjkzNywiZXhwIjo2MTYyNjMxNjkzN30.u47WvhCJQbP79pGAjEbbnRZthXDJFEw5I6d_0ZCmMQc',
    },
    Input1: {
        cFlag: '0',
        szMemberNo: '000',
        szFullName: '',
        szNativeNo: '',
        szCustNo: '',
    },
};
