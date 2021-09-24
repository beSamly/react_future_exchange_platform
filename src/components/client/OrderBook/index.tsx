import React from 'react';
import { useDispatch } from 'react-redux';
import useOrderBookList from '../../../hooks/useOrderBookList';
import { UPDATE_ORDER_TAB } from '../../../states/reducers/orderReducer';
import OrderBook from './OrderBook';
import useScreenSize from '../../../hooks/useScreenSize';
import { useTypedSelector } from '../../../states/useTypedSelector';

export default function Index() {
    const { isMobile } = useScreenSize();
    const currentSymbol = useTypedSelector((state) => state.symbolReducer.currentSymbol);
    const { buyArr, sellArr, pipLowest, fClose, fPreClose, fairValue, buyTotal, sellTotal } = useOrderBookList(
        currentSymbol,
    );

    const MobileStyle = {
        maxHeight: '100%',
        minHeight: '100%',
        overflow: 'auto',
        width: '100%',
    };

    const style = {
        maxHeight: '400px',
        minHeight: '400px',
    };

    const dispatch = useDispatch();

    const handleClick = (price, sellOrBuy) => (e) => {
        const input = {
            index: 0, // userReducer의 index 0로 바꾸기 : 0===New order tab
            data: {
                szDealDiv: sellOrBuy === 'sell' ? '079' : '081', // 매매구분
                szRate: price.replace(/[\,]/g, ''), // 주문가
                fLot: 1, // 수량
            },
        };
        dispatch(UPDATE_ORDER_TAB(input));
    };

    const orderBookProps = {
        buyArr,
        sellArr,
        pipLowest,
        fClose,
        fPreClose,
        fairValue,
        buyTotal,
        sellTotal,
        handleClick,
    };

    return <OrderBook isForMobile={isMobile} style={!isMobile ? style : MobileStyle} {...orderBookProps} />;
}
