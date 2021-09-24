import { Switch } from 'react-router';

const column = [
    'CUR_NO',
    'NAME_ENG',
    'NAME_KOR',
    'EX_CODE',
    'TERM_YY',
    'TERM_NO1',
    'TERM_QMW',
    'FX_CODE',
    'TRADE_TYPE',
    'CLOSE_DATE',
    'DAY_COUNT',
    'ST_DATE',
    'ED_DATE',
    'ST_TIME',
    'ED_TIME',
    'CLOSE_TIME',
    'MAX_ORDCNT',
    'MIN_ORDCNT',
    'PIP_LOWEST',
    'PIP_COST',
    'ORDER_STAT',
];

/*=============================
| Typescript : Action types   |
==============================*/
export enum SymbolReducerActionType {
    UPDATE_CURRENT_SYMBOL = 'UPDATE_CURRENT_SYMBOL',
    UPDATE_SYMBOLS = 'UPDATE_SYMBOLS',
    APPEND_DATA = 'APPEND_DATA',
}

export interface UpdateCurrentSymbolAction {
    type: SymbolReducerActionType.UPDATE_CURRENT_SYMBOL;
    payload: string;
}
export interface UpdateSymbolAction {
    type: SymbolReducerActionType.UPDATE_SYMBOLS;
    payload: any;
}
export interface AppendDataAction {
    type: SymbolReducerActionType.APPEND_DATA;
    payload: {
        fBuyPrice: number;
        fClose: number;
        fHigh: number;
        fLow: number;
        fOpen: number;
        fPreClose: number;
        fSellPrice: number;
        fVolume: number;
        szCurNo: string;
        szDate: string;
        szTime: string;
    };
}

type SymbolReducerActions = UpdateCurrentSymbolAction | UpdateSymbolAction | AppendDataAction;

/*=============================
| Javascript : Action craetors |
==============================*/
export const UPDATE_CURRENT_SYMBOL = (symbol): UpdateCurrentSymbolAction => {
    return {
        type: SymbolReducerActionType.UPDATE_CURRENT_SYMBOL,
        payload: symbol,
    };
};

export const UPDATE_SYMBOL = (json): UpdateSymbolAction => {
    const returnData = {};

    json.Output2.forEach((symbolArr) => {
        const curNo = symbolArr[0];
        returnData[curNo] = {};
        symbolArr.forEach((f, index) => {
            return (returnData[curNo][column[index]] = f);
        });
    });

    return {
        type: SymbolReducerActionType.UPDATE_SYMBOLS,
        payload: returnData,
    };
};

export const APPEND_DATA = ({
    Output1,
}: {
    Output1: {
        fBuyPrice: number;
        fClose: number;
        fHigh: number;
        fLow: number;
        fOpen: number;
        fPreClose: number;
        fSellPrice: number;
        fVolume: number;
        szCurNo: string;
        szDate: string;
        szTime: string;
        nonexistFiled: string;
    };
}): AppendDataAction => {
    return {
        type: SymbolReducerActionType.APPEND_DATA,
        payload: Output1,
    };
};

export type SymbolInfoType = {
    CUR_NO: string;
    NAME_ENG: string;
    NAME_KOR: string;
    EX_CODE: string;
    TERM_YY: string;
    TERM_NO1: string;
    TERM_QMW: string;
    FX_CODE: string;
    TRADE_TYPE: string;
    CLOSE_DATE: number;
    DAY_COUNT: number;
    ST_DATE: number;
    ED_DATE: number;
    ST_TIME: number;
    ED_TIME: number;
    CLOSE_TIME: number;
    MAX_ORDCNT: number;
    MIN_ORDCNT: number;
    PIP_LOWEST: number;
    PIP_COST: number;
    ORDER_STAT: string;
    szCurNo: string;
    szDate: string;
    szTime: string;
    fOpen: number;
    fHigh: number;
    fLow: number;
    fClose: number;
    fVolume: number;
    fPreClose: number;
    fBuyPrice: number;
    fSellPrice: number;
};

interface SymbolState {
    currentSymbol: string;
    symbols: Record<string, SymbolInfoType>;
}

const defaultState = {
    currentSymbol: 'IDX2009Q04BU',
    symbols: {},
};

export const symbolReducer = (state: SymbolState = defaultState, action: SymbolReducerActions): SymbolState => {
    switch (action.type) {
        case SymbolReducerActionType.UPDATE_CURRENT_SYMBOL:
            return {
                ...state,
                currentSymbol: action.payload,
            };
        case SymbolReducerActionType.UPDATE_SYMBOLS:
            console.log(`update symobl :action.payload :  `, action.payload);
            return Object.keys(state.symbols).length > 0
                ? {
                      ...state,
                  }
                : {
                      ...state,
                      symbols: action.payload,
                  };

        case SymbolReducerActionType.APPEND_DATA:
            const curNo = action.payload.szCurNo;
            const targetCur = state.symbols[curNo];

            let returnData = {};
            if (targetCur) {
                returnData = {
                    ...state,
                    symbols: {
                        ...state.symbols,
                        [curNo]: {
                            ...targetCur,
                            ...action.payload,
                        },
                    },
                };
            } else {
                returnData = {
                    ...state,
                };
            }

            // return returnData
            return {
                ...returnData,
            } as SymbolState;

        default:
            return state;
    }
};
