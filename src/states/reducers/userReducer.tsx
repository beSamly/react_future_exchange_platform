export type ScreenSizeType = 'xs' | 'sm' | 'md' | 'xl' | undefined;
export type LanguageType = 'KOR' | 'ENG';

/*=============================
| Typescript : Action types   |
==============================*/
export enum UserReducerActionType {
    LOGIN = 'LOGIN',
    SWITCH_LANGUAGE = 'SWITCH_LANGUAGE',
    SET_OPERATING_HOUR = 'SET_OPERATING_HOUR',
    SET_CURRENT_USER = 'SET_CURRENT_USER',
    INIT_FAVORITES = 'INIT_FAVORITES',
    // SET_TR_RECEIVED = 'SET_TR_RECEIVED',
    SWITCH_SCREEN_SIZE = 'SWITCH_SCREEN_SIZE',
    LOGOUT = 'LOGOUT',
}

export interface UserLogInAction {
    type: UserReducerActionType.LOGIN;
}

export interface UserLogOutAction {
    type: UserReducerActionType.LOGOUT;
}

export interface SetCurrentUserAction {
    type: UserReducerActionType.SET_CURRENT_USER;
    payload: {
        szAccNo: string;
        email: string;
        szPasswd: string;
        jwt: string;
        exp: number;
    };
}

export interface SwitchLanguageAction {
    type: UserReducerActionType.SWITCH_LANGUAGE;
    payload: {
        language: LanguageType;
    };
}

export interface SetOperatingHourAction {
    type: UserReducerActionType.SET_OPERATING_HOUR;
    payload: {
        ['nCurBusiDate(pin)']: number;
        ['nPrevBusiDate(pin)']: number;
        ['nNextBusiDate(pin)']: number;
    };
}

export interface SwitchScreenSizeAction {
    type: UserReducerActionType.SWITCH_SCREEN_SIZE;
    payload: {
        screenSize: ScreenSizeType;
    };
}

export interface InitFavoriteAction {
    type: UserReducerActionType.INIT_FAVORITES;
    payload: any;
}

type UserReducerActions =
    | UserLogInAction
    | SetCurrentUserAction
    | SwitchLanguageAction
    | SetOperatingHourAction
    | SwitchScreenSizeAction
    | InitFavoriteAction
    | UserLogOutAction;

/*=============================
| Javascript : Action craetors |
==============================*/

export const USER_LOG_IN = (): UserLogInAction => ({
    type: UserReducerActionType.LOGIN,
});

export const USER_LOG_OUT = (): UserLogOutAction => ({
    type: UserReducerActionType.LOGOUT,
});

export const SET_CURRENT_USER = (payload): SetCurrentUserAction => ({
    type: UserReducerActionType.SET_CURRENT_USER,
    payload,
});

export const SWITCH_LANGUAGE = (payload): SwitchLanguageAction => ({
    type: UserReducerActionType.SWITCH_LANGUAGE,
    payload,
});

export const SET_OPERATING_HOUR = (payload): SetOperatingHourAction => ({
    type: UserReducerActionType.SET_OPERATING_HOUR,
    payload,
});

export const SWITCH_SCREEN_SIZE = (payload): SwitchScreenSizeAction => ({
    type: UserReducerActionType.SWITCH_SCREEN_SIZE,
    payload,
});

export const INIT_FAVORITES = (json): InitFavoriteAction => {
    const data = (json.Output2 && json.Output2.map((favorite) => favorite[0])) || [];
    return {
        type: UserReducerActionType.INIT_FAVORITES,
        payload: data,
    };
};

// export const SET_TR_RECEIVED = (json):SetTrReceivedAction => {
//     const data = json.Message && json.Message.flag === '0';
//     return {
//         type: UserReducerActionType.SET_TR_RECEIVED,
//         data,
//     };
// };

/*=============================
| Typescript :  state          |
==============================*/

interface UserState {
    isLoggedIn: boolean;
    language: LanguageType;
    screenSize: ScreenSizeType;
    data: {
        szAccNo: string | undefined;
        szPasswd: string | undefined;
        jwt: string | undefined;
        email: string | undefined;
        exp: number | undefined;
    };
    operatingHour: {
        ['nCurBusiDate(pin)']: number | undefined;
        ['nPrevBusiDate(pin)']: number | undefined;
        ['nNextBusiDate(pin)']: number | undefined;
    };
    favorites: { data: Array<any>; trReceived: boolean };
}

const defaultState = {
    isLoggedIn: false,
    language: 'KOR' as LanguageType,
    screenSize: undefined,
    data: {
        szAccNo: undefined,
        email: undefined,
        szPasswd: undefined,
        jwt: undefined,
        exp: undefined,
    },
    operatingHour: {
        ['nCurBusiDate(pin)']: undefined,
        ['nPrevBusiDate(pin)']: undefined,
        ['nNextBusiDate(pin)']: undefined,
    },
    favorites: { data: [], trReceived: false },
};

export const userReducer = (state: UserState = defaultState, action: UserReducerActions): UserState => {
    switch (action.type) {
        case UserReducerActionType.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };
        case UserReducerActionType.SWITCH_LANGUAGE:
            return {
                ...state,
                language: action.payload.language,
            };
        case UserReducerActionType.SET_OPERATING_HOUR:
            return {
                ...state,
                operatingHour: action.payload,
            };
        case UserReducerActionType.SET_CURRENT_USER:
            return {
                ...state,
                isLoggedIn: true,
                data: {
                    szAccNo: action.payload.szAccNo,
                    szPasswd: action.payload.szPasswd,
                    jwt: action.payload.jwt,
                    email: action.payload.email,
                    exp: action.payload.exp,
                },
            };
        case UserReducerActionType.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                data: {
                    szAccNo: undefined,
                    szPasswd: undefined,
                    jwt: undefined,
                    email: undefined,
                    exp: undefined,
                },
            };
        case UserReducerActionType.SWITCH_SCREEN_SIZE:
            return {
                ...state,
                screenSize: action.payload.screenSize,
            };
        case UserReducerActionType.INIT_FAVORITES:
            return {
                ...state,
                favorites: { ...state.favorites, data: action.payload },
            };

        default:
            return state;
    }
};
