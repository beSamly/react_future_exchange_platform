/*======================================
|    Did not typescript-fy this file   |
========================================*/
export const AGENT = {
    UPDATE_WS: 'UPDATE_WS',
    CONNECTION_ON: 'CONNECTION_ON',
};

export const STATUS = {
    UPDATE_LIVE: 'UPDATE_LIVE',
    UPDATE_TR: 'UPDATE_TR',
    DELETE_TR: 'DELETE_TR',
    APPEND_TR: 'APPEND_TR',
    APPEND_LIVE: 'APPEND_LIVE',
};

export const CHART = {
    SET_KEY: 'SET_KEY',
    INIT_CHART: 'INIT_CHART',
    UPDATE_CHART: 'UPDATE_CHART',
};

// 실시간 INSERT
export const UPDATE_LIVE = (data) => ({
    type: STATUS.UPDATE_LIVE,
    data: data,
});

export const APPEND_LIVE = (data) => ({
    type: STATUS.APPEND_LIVE,
    data: data,
});

// TR UPDTATE
export const UPDATE_TR = (data) => ({
    type: STATUS.UPDATE_TR,
    data: data,
});

export const APPEND_TR = (data) => ({
    type: STATUS.APPEND_TR,
    data: data,
});

// DELETE TR
export const DELETE_TR_STATE = (data) => ({
    type: STATUS.DELETE_TR,
    data: data,
});

export const UPDATE_WS = (ws) => ({
    type: AGENT.UPDATE_WS,
    ws: ws,
});

export const CONNECTION_ON = () => ({
    type: AGENT.CONNECTION_ON,
});

export const SET_CHART_KEY = (data) => ({
    type: CHART.SET_KEY,
    data: data,
});

export const INIT_CHART_SUCESS = (data) => ({
    type: CHART.INIT_CHART,
    data: data,
});

const defaultState = {};

const defaultAgentState = {
    ws: '',
    used_tid: [],
    connected: false,
};

const defaultChart = {
    chart_key: '',
    chartData_t9731: {
        data: {
            Header: '',
            Output1: [],
        },
        loading: false,
        error: null,
    },
};

const stateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case STATUS.UPDATE_LIVE:
            const key = action.data.key;
            const data = action.data.data;
            return {
                ...state,
                [key]: [data],
            };
        case STATUS.APPEND_LIVE:
            const APPEND_LIVE_KEY = action.data.key;
            const APPEND_LIVE_DATA = action.data.data;
            console.log(`APPEND_LIVE_KEY : `, APPEND_LIVE_KEY, ': ', state);

            const alreadyExist = state[APPEND_LIVE_KEY] ? true : false;

            return {
                ...state,
                [APPEND_LIVE_KEY]: alreadyExist ? [...state[APPEND_LIVE_KEY], APPEND_LIVE_DATA] : [APPEND_LIVE_DATA],
            };

        case STATUS.UPDATE_TR:
            return { ...state, ...action.data };

        case STATUS.APPEND_TR:
            const APPEND_TR_KEY = action.data.key;
            const APPEND_TR_DATA = action.data.data;
            return {
                ...state,
                [APPEND_TR_KEY]: APPEND_TR_DATA,
            };

        case STATUS.DELETE_TR:
            return state;

        default:
            return state;
    }
};

const agentState = (state = defaultAgentState, action) => {
    switch (action.type) {
        case AGENT.CONNECTION_ON:
            return {
                ...state,
                connected: true,
            };
        default:
            return state;
    }
};

function chartState(state = defaultChart, action) {
    switch (action.type) {
        case CHART.SET_KEY:
            return {
                ...state,
                chart_key: action.data,
            };
        case CHART.INIT_CHART:
            return {
                ...state,
                chartData_t9731: {
                    data: action.data,
                    loading: false,
                    error: null,
                },
            };
        default:
            return state;
    }
}

export { agentState, stateReducer, chartState };
