import * as LANGUAGE from '../constants/Language';

export const BUY = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '매수';
        case LANGUAGE.ENGLISH:
            return 'buy';
        default:
            return '매수';
    }
};

export const SELL = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '매도';
        case LANGUAGE.ENGLISH:
            return 'sell';
        default:
            return '매도';
    }
};

export const LIMIT_ORDER = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '지정가 주문';
        case LANGUAGE.ENGLISH:
            return 'Limit Order';
        default:
            return '지정가 주문';
    }
};

export const MARKET_ORDER = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '시장가 주문';
        case LANGUAGE.ENGLISH:
            return 'Market Order';
        default:
            return '시장가 주문';
    }
};

export const AMOUNT = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '수량';
        case LANGUAGE.ENGLISH:
            return 'Amount';
        default:
            return '수량';
    }
};
export const PRICE = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '가격';
        case LANGUAGE.ENGLISH:
            return 'Price';
        default:
            return '가격';
    }
};
export const LIMIT = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Limit';
        case LANGUAGE.ENGLISH:
            return 'Limit';
        default:
            return 'Limit';
    }
};

export const STOP = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Stop';
        case LANGUAGE.ENGLISH:
            return 'Stop';
        default:
            return 'Stop';
    }
};

export const MARKET_ORDER_MODIFY = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '지정가주문 정정';
        case LANGUAGE.ENGLISH:
            return 'Market Order Modify';
        default:
            return '지정가주문 정정';
    }
};

export const MARKET_ORDER_CANCEL = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '지정가주문 취소';
        case LANGUAGE.ENGLISH:
            return 'Market order cancel';
        default:
            return '지정가주문 취소';
    }
};

export const STOP_PRICE = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Stop 가격';
        case LANGUAGE.ENGLISH:
            return 'Stop price';
        default:
            return 'Stop 가격';
    }
};
export const LIMIT_PRICE = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Limit 가격';
        case LANGUAGE.ENGLISH:
            return 'Limit Price';
        default:
            return 'Limit 가격';
    }
};

export const MARKET = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '시장가 청산';
        case LANGUAGE.ENGLISH:
            return 'MARKET';
        default:
            return '시장가 청산';
    }
};

export const ORDER = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '주문';
        case LANGUAGE.ENGLISH:
            return 'Order';
        default:
            return '주문';
    }
};

export const SET_STOP = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Stop 지정';
        case LANGUAGE.ENGLISH:
            return 'Set stop';
        default:
            return 'Stop 지정';
    }
};

export const SET_LIMIT = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Limit 지정';
        case LANGUAGE.ENGLISH:
            return 'Set limit';
        default:
            return 'Limit 지정';
    }
};

export const LIMIT_CANCEL = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Limit 취소';
        case LANGUAGE.ENGLISH:
            return 'Limit cancel';
        default:
            return 'Limit 취소';
    }
};
export const STOP_CANCEL = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Stop 취소';
        case LANGUAGE.ENGLISH:
            return 'Stop cancel';
        default:
            return 'Stop 취소';
    }
};

export const STOP_MODIFY = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Stop 정정';
        case LANGUAGE.ENGLISH:
            return 'Stop modify';
        default:
            return 'Stop 정정';
    }
};
export const LIMIT_MODIFY = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Limit 정정';
        case LANGUAGE.ENGLISH:
            return 'Limit Modify';
        default:
            return 'Limit 정정';
    }
};

// 마진금액 => 주문 증거금
export const AVAILABLE_MARGIN = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '주문 증거금';
        case LANGUAGE.ENGLISH:
            return 'Available Margin';
        default:
            return '주문 증거금';
    }
};
export const ORDER_VALUE = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '총주문가격';
        case LANGUAGE.ENGLISH:
            return 'Order Value';
        default:
            return '총주문가격';
    }
};

/*===================
    Error messages
====================*/
export const PRICE_ERROR = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '가격을 확인해주세요';
        case LANGUAGE.ENGLISH:
            return 'Please check the price';
        default:
            return '가격을 확인해주세요';
    }
};
export const LIMIT_PRICE_ERROR = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Limit 가격을 확인해주세요';
        case LANGUAGE.ENGLISH:
            return 'Please check limit price';
        default:
            return 'Limit 가격을 확인해주세요';
    }
};

export const STOP_PRICE_ERROR = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return 'Stop 가격을 확인해주세요';
        case LANGUAGE.ENGLISH:
            return 'Please check stop price';
        default:
            return 'Stop 가격을 확인해주세요';
    }
};

export const AMOUNT_ERROR = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '주문수량을 확인해주세요';
        case LANGUAGE.ENGLISH:
            return 'Please check the amount';
        default:
            return '주문수량을 확인해주세요';
    }
};

export const ORDER_TYPE_ERROR = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '주문타입을 확인해주세요';
        case LANGUAGE.ENGLISH:
            return 'Please check order type';
        default:
            return '주문타입을 확인해주세요';
    }
};

export const PLEASE_LOG_IN = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '로그인 해주세요';
        case LANGUAGE.ENGLISH:
            return 'Please log in';
        default:
            return '로그인 해주세요';
    }
};

export const MODIFY_CANCEL_TARGET_UNSELECTED = (lang) => {
    switch (lang) {
        case LANGUAGE.KOREAN:
            return '정정/취소할 항목을 선택해주세요';
        case LANGUAGE.ENGLISH:
            return 'Please select the item to modify or cancel';
        default:
            return '정정/취소할 항목을 선택해주세요';
    }
};
