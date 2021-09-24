/*=============================
| Typescript : Action types   |
==============================*/
export enum OrderReducerAction {
    UPDATE = 'UPDATE',
    TAB_CLICKED = 'TAB_CLICKED',
}

export interface UpdateOrderTabAction {
    type: OrderReducerAction.UPDATE;
    payload: any;
}

export interface TabClickedAction {
    type: OrderReducerAction.TAB_CLICKED;
    payload: {
        index: number;
    };
}

type OrderReducerActions = UpdateOrderTabAction | TabClickedAction;

/*=============================
| Javascript : Action craetors |
==============================*/
export const UPDATE_ORDER_TAB = (payload): UpdateOrderTabAction => ({
    type: OrderReducerAction.UPDATE,
    payload: payload,
});

export const TAB_CLICKED = (payload: { index: number }): TabClickedAction => ({
    type: OrderReducerAction.TAB_CLICKED,
    payload: payload,
});

/*=============================
| Typescript :  state          |
==============================*/

interface OrderState {
    index: number;
    data: any;
    triggeredBy: 'open-orders' | 'open-positions' | undefined;
    stopOrLimit: 'stop' | 'limit ' | undefined;
}

const defaultState = {
    index: 0,
    data: {},
    triggeredBy: undefined,
    stopOrLimit: undefined,
};

export const orderReducer = (state: OrderState = defaultState, action: OrderReducerActions): OrderState => {
    switch (action.type) {
        case OrderReducerAction.UPDATE:
            return { ...action.payload };
        case OrderReducerAction.TAB_CLICKED:
            return { ...state, data: {}, index: action.payload.index };
        default:
            return state;
    }
};
