import {
    UPDATE_LIVE,
    UPDATE_TR,
    APPEND_TR,
    // DELETE_TR,
    APPEND_LIVE,
    INIT_CHART_SUCESS,
    CONNECTION_ON,
} from '../reducers/agentReducer';
import { UPDATE_SYMBOL, APPEND_DATA } from '../reducers/symbolReducer';
import { MESSAGE_PUSH } from '../reducers/messageReducer';
import { INIT_FAVORITES } from '../reducers/userReducer';

class SocketService {
    ws: WebSocket | undefined;
    connected = false;
    dispatch: any;

    constructor() {
        const webSocketUrl = process.env.REACT_APP_WS_HOST;
        if (!webSocketUrl) return;
        this.ws = new WebSocket(webSocketUrl);
        this.dispatch = undefined;
    }

    setDispatch = (dispatch) => {
        this.dispatch = dispatch;
    };

    init = () => {
        if (!this.ws) return alert('No socket connection');

        this.ws.onopen = () => {
            console.log(`socket connection opened in SocketService`);
            this.connected = true;
            this.dispatch(CONNECTION_ON());
        };
        this.ws.onclose = (error) => {
            // dispatch(UPDATE_WS(''));
        };

        this.ws.onmessage = ({ data }) => {
            console.log(`data is : `, JSON.parse(data));
            this.handleOnMessage(data);
        };

        this.ws.onerror = (error) => {
            console.error('Socket error in SocketService: ', error);
            // dispatch(UPDATE_WS(''));
        };
    };

    handleOnMessage = (data) => {
        data = JSON.parse(data);

        const functionCode = data.Header.function.replace(/ /g, '');

        switch (functionCode) {
            case 'F':
                console.log('on live message : ', data);
                return this.handleLiveTransaction({ data });
            case 'D':
                console.log('on tr message : ', data);
                return this.handleTransaction({ data });
            default:
                console.error(`data on error : `, data);
            // return alert('function code is neither F or D');
        }
    };

    handleMessage = (message) => {
        // Message 필드가 있을때 message reducer에 푸쉬
        if (message) {
            const messageText = message.data;
            this.dispatch(MESSAGE_PUSH(messageText));
        }
    };

    handleLiveTransaction = ({ data }) => {
        const trcode = data.Header.trcode;

        console.log(`live transaction hanlde  data is  : `, data);

        switch (trcode) {
            case '91':
                return this.dispatch(
                    UPDATE_LIVE({ key: `${trcode}_${data.Output1.szSymbol.replace(/ /g, '')}`, data }),
                );
            case '92':
                return this.dispatch(UPDATE_LIVE({ key: `${trcode}_${data.Output1.szSymbol}`, data }));
            case '95':
                return this.dispatch(APPEND_LIVE({ key: trcode, data }));
            case '96':
                return this.dispatch(APPEND_LIVE({ key: trcode, data }));
            case '98':
                return this.dispatch(APPEND_LIVE({ key: trcode, data }));
            default:
                return alert('default in handleLiveTransaction');
        }
    };

    handleTransaction = ({ data }) => {
        this.handleMessage(data.Message);
        const trcode = data.Header.trcode;

        switch (trcode) {
            /*============================
            | 차트조회 tr => chartReducer |
            =============================*/
            case 't9731':
                data.Header.trid === '1' && this.dispatch(INIT_CHART_SUCESS(data));
                // let key = trid !== '' ? `${trcode}_${trid}` : `${trcode}`;
                // new_json[key] = json;
                // this.dispatch(UPDATE_TR(new_json));
                return this.dispatch(UPDATE_TR(this.formatTrData({ trcode, data })));

            /*==============================================
            | 상장된종목리스트 및 디테일 tr => symbolReducer |
            ===============================================*/
            case 't5511':
                console.log(`t5511 data: `, data);
                this.dispatch(UPDATE_SYMBOL(data));
                return trcode;

            /*=====================================
            | 유저의 favorite list => userReducer  |
            =======================================*/
            case 't3181':
                this.dispatch(INIT_FAVORITES(data));
                return trcode;
            //t9732 => append data to symbolReducer and then update stateReducer too

            /*==================================================
            | 종목 현재가 t9732 => symbolReducer, stateReducer  |
            | 동시에 append                                     |
            ===================================================*/
            case 't9732':
                // 9732현재가조회 가끔 데이터조회오류가 나올수있어서 Output1이 있을경우에만 append시켜줌
                console.log(`9732 data : `, trcode, ' : ', data);

                if (data.Output1) {
                    this.dispatch(APPEND_DATA({ Output1: data.Output1 }));
                    const szCurNo = data.Output1.szCurNo.replace(/ /g, '');
                    this.dispatch(APPEND_TR({ key: `${trcode}_${szCurNo}`, data }));
                }
                break;

            default:
                return this.dispatch(UPDATE_TR(this.formatTrData({ trcode, data })));
        }
    };

    formatTrData = ({ trcode, data }) => {
        return {
            [trcode]: data,
        };
    };

    // Tr for live channel requires key
    sendToAgent = (json, key = ''): string | undefined => {
        // console.log(`Send to agent called json is : `, json);
        if (!this.ws) {
            alert('No socket connection');
            return undefined;
        }
        console.log(`json to send : `, json);
        this.ws.send(JSON.stringify(json));

        switch (json.Header.trcode) {
            case 't9732':
                console.log(`9732 to send : `, json);
                return `${json.Header.trcode}_${json.Input1.szCurNo}`;

            /*===========================================================
            | 현물종목은 symbolList가 아닌 CoinInfo에서                   |
            | transaction 을 request 해주기 때문에 key를 리턴해줘야한다    |
            ===========================================================*/
            case '91':
                return `${json.Header.trcode}_${json.Input1.Key1}`;
            // case '92':
            //     return `${json.Header.trcode}_${json.Input1.Key1}`;
            // case '95':
            //     return json.Header.trcode;
            // case '96':
            //     return json.Header.trcode;
            // case '98':
            //     return json.Header.trcode;
            default:
                return `${json.Header.trcode}`;
        }
    };
}
const socketService = new SocketService();
export default socketService;
