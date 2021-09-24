// import { TransactionInputType } from '../types';
// import useAgentToSend from './useAgentToSend';

// const input = ({ szCustNo }) => ({
//     Header: {
//         function: 'D',
//         termtype: 'HTS',
//         trcode: 't0307',

//     },
//     Input1: {
//         szMemberNo: process.env.REACT_APP_SZ_MEMBER_NO,
//         szCustNo,
//     },
// });

// type ReturnType = {
//     szFamilyName: string;
//     szUserName: string;
//     szAccNo: string;
//     sendGetCurrentUser: (input: { szMemberNo?: string; szCustNo: string }) => void;
// };

// const useGetCurrentUser = (): ReturnType => {
//     const { result, sendTransaction } = useAgentToSend();

//     const sendGetCurrentUser = ({ szCustNo }) => {
//         sendTransaction(input({ szCustNo }) as TransactionInputType);
//     };

//     const szFamilyName = result.Output1?.szFamilyName;
//     const szUserName = result.Output1?.szUserName;
//     const szAccNo = result.Output2 ? result.Output2[0][0] : undefined;

//     return {
//         szFamilyName,
//         szUserName,
//         szAccNo,
//         sendGetCurrentUser,
//     };
// };

// export default useGetCurrentUser;

export default {
    empty: 'empty',
};
