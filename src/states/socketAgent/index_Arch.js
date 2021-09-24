// import { UPDATE_WS, UPDATE_LIVE, UPDATE_TR, DELETE_TR_STATE, INIT_CHART_SUCESS } from '../reducers/agentReducer';
// import { UPDATE_SYMBOL, APPEND_DATA } from '../reducers/symbolReducer';
// import { MESSAGE_PUSH } from '../reducers/messageReducer';
// import { INIT_FAVORITES } from '../reducers/userReducer';

// // const { MESSAGE_PUSH } = require('../messageReducer');

// var initAgent = (ws, dispatch) => {
//     let browser_display = document.visibilityState;
//     let webSocketUrl = process.env.REACT_APP_WS_HOST;

//     if (!dispatch) {
//         alert('dispatch error');
//     } else if (dispatch && !ws) {
//         ws = new WebSocket(webSocketUrl);
//         ws.onopen = () => {
//             console.log(`socket connection opened`);
//             dispatch(UPDATE_WS(ws));
//         };
//         ws.onclose = (error) => {
//             dispatch(UPDATE_WS(''));
//         };
//         ws.onerror = (error) => {
//             // alert("socket error")
//             console.error(error);
//             dispatch(UPDATE_WS(''));
//         };

//         ws.onmessage = (evt) => {
//             const json = JSON.parse(evt.data);
//             let header = json.Header,
//                 trcode = header.trcode,
//                 func = header.function,
//                 trid;
//             let new_json = {};
//             console.log('on message : ', json);

//             // Message 필드가 있을때 message reducer에 푸쉬
//             if (json.Message) {
//                 let messageText = json.Message.data;
//                 dispatch(MESSAGE_PUSH(messageText));
//             }

//             if (func === 'F') {
//                 let key_name = {
//                     91: 'szSymbol',
//                     92: 'szSymbol',
//                     95: 'szAccNo',
//                     96: 'szAccNo',
//                     97: 'szAcctNo',
//                     98: 'szAccNo',
//                     99: 'szAccNo',
//                 };
//                 let key = `${trcode}_${json.Output1[key_name[trcode]].replace(/ /g, '')}`;
//                 new_json[key] = json;
//                 dispatch(UPDATE_LIVE(new_json));
//             } else {
//                 try {
//                     trid = header.trid ? header.trid : '';
//                 } catch (err) {
//                     trid = '';
//                 }

//                 // 차트조회 tr
//                 if (trcode === 't9731') {
//                     dispatch(INIT_CHART_SUCESS(json));
//                     let key = trid !== '' ? `${trcode}_${trid}` : `${trcode}`;
//                     new_json[key] = json;
//                     dispatch(UPDATE_TR(new_json));
//                 }
//                 // 상장된종목리스트 및 디테일 tr
//                 else if (trcode === 't5511') {
//                     console.log(`t5511 is `, json);
//                     dispatch(UPDATE_SYMBOL(json));
//                 }
//                 // else if (trcode === "t3180") {
//                 //   console.log(`json in3180: `,json);
//                 //   dispatch(SET_TR_RECEIVED(json));
//                 // }
//                 else if (trcode === 't3181') {
//                     console.log(`come here :`, json);
//                     dispatch(INIT_FAVORITES(json));
//                 } else {
//                     let key = trid !== '' ? `${trcode}_${trid}` : `${trcode}`;
//                     new_json[key] = json;
//                     dispatch(UPDATE_TR(new_json));
//                 }
//                 // 특정종목에대한 현재가 및 시,종 등등 가격
//                 // 따로 if문으로 빼놓은이유는 9732가 상장된종목 뿐만아니라 현물종목에도 쓰이기때문
//                 if (trcode === 't9732') {
//                     // 9732현재가조회 가끔 데이터조회오류가 나올수있어서 Output1이 있을경우에만 append시켜줌
//                     console.log(`t9732 : `, json);
//                     json.Output1 && dispatch(APPEND_DATA(json));
//                     // !json.Output1 && console.log(`t9732데이터조회오류 : `, json);
//                 }
//             }
//         };
//     }

//     document.addEventListener('visibilitychange', () => {
//         if (browser_display !== document.visibilityState) {
//             browser_display = document.visibilityState;
//         }
//     });
// };

// var sendToAgent = (agent, json, key = '') => {
//     console.log(`send to agent called`);
//     if (agent) {
//         if (key === '') {
//             let tid,
//                 pre_tid = Number(sessionStorage.getItem('tid'));
//             if (!pre_tid || pre_tid >= 65535) {
//                 pre_tid = 0;
//             }
//             tid = pre_tid + 1;
//             sessionStorage.setItem('tid', tid);

//             json.Header.trid = tid;
//             agent.send(JSON.stringify(json));
//             console.log('snedToAgent tr :', JSON.stringify(json));

//             return `${json.Header.trcode}_${tid}`;
//         } else {
//             agent.send(JSON.stringify(json));
//             console.log('snedToAgent tr :', JSON.stringify(json));

//             return `${json.Header.trcode}_${json.Input1[key]}`;
//         }
//     } else {
//         alert('socket error ');
//         console.warn('Deprecated sendToAgent : ', json);
//     }
// };

// var deleteTid = (used_index, dispatch) => {
//     if (dispatch) {
//         dispatch(DELETE_TR_STATE(used_index));
//     }
//     return 1;
// };

// var setSessionStorage = (key, value) => {
//     sessionStorage.setItem(key, value);
//     return 1;
// };

// var getSessionStorage = (key) => {
//     return sessionStorage.getItem(key);
// };

// export { sendToAgent, initAgent, deleteTid, setSessionStorage, getSessionStorage };
