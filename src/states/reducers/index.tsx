import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { symbolReducer } from './symbolReducer';
import { messageReducer } from './messageReducer';
import { orderReducer } from './orderReducer';

import { agentState, stateReducer, chartState } from './agentReducer';

const reducers = combineReducers({
    symbolReducer,
    userReducer,
    agentState,
    stateReducer,
    chartState,
    messageReducer,
    orderReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
