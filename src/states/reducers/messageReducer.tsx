import produce from 'immer';
import { Dispatch } from 'redux';

/*=============================
| Typescript : Action types   |
==============================*/
export enum MessageReducerActionType {
    MESSAGE_PUSH = 'MESSAGE_PUSH',
}

export interface PushMessageAction {
    type: MessageReducerActionType.MESSAGE_PUSH;
    payload: string;
}

/*=============================
| Javascript : Action craetors |
==============================*/
export const MESSAGE_PUSH = (payload: string): PushMessageAction => ({
    type: MessageReducerActionType.MESSAGE_PUSH,
    payload: payload,
});

export type MessageReducerActions = PushMessageAction;

/*=============================
| Typescript :  state          |
==============================*/
interface MessageState {
    data: Array<string>;
}

const defaultState = {
    data: [],
};

export const messageReducer = (state: MessageState = defaultState, action: MessageReducerActions): MessageState => {
    switch (action.type) {
        case MessageReducerActionType.MESSAGE_PUSH:
            return { data: [...state.data, action.payload] };
        default:
            return state;
    }
};
