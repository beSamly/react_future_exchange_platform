import produce from 'immer';
import { Dispatch } from 'redux';

/*=============================
| Typescript : Action types   |
==============================*/
export enum UserActionType {
    USER_LOG_IN = 'USER_LOG_IN',
    USER_LOG_OUT = 'USER_LOG_OUT',
}

export interface UserLogInAction {
    type: UserActionType.USER_LOG_IN;
    payload: {
        userId: string;
    };
}

export interface UserLogOutAction {
    type: UserActionType.USER_LOG_OUT;
    payload: {
        userId: string;
    };
}

/*=============================
| Javascript : Action craetors |
==============================*/
export const LOGGIN_USER = ({ userId }: { userId: string }): UserLogInAction => {
    return {
        type: UserActionType.USER_LOG_IN,
        payload: {
            userId,
        },
    };
};

/*================================
| Basic exmaple of redux thunk   |
=================================*/
export const saveCells = () => {
    return async (dispatch: Dispatch<UserAction>, getState) => {
        const {} = getState();

        try {
            //Do some async request
            //Example: await axios.post('/cells', { cells });

            //Dispatch action
            dispatch({
                type: UserActionType.USER_LOG_IN,
                payload: {
                    userId: 'inside thunk',
                },
            });
        } catch (err) {}
    };
};

export type UserAction = UserLogInAction | UserLogOutAction;

/*=============================
| Typescript :  state          |
==============================*/
interface UserState {
    userId: string | undefined;
}

const initialState: UserState = {
    userId: 'default userid',
};

const reducer = produce(
    (state: UserState = initialState, action: UserAction): UserState => {
        switch (action.type) {
            case UserActionType.USER_LOG_IN:
                state.userId = action.payload.userId;
                return state;

            default:
                return state;
        }
    },
);

export default reducer;
