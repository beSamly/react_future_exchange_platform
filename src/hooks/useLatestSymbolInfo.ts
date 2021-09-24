import { useState, useEffect } from 'react';
import { formatSymbolData, formatSymbolLiveData } from '../lib/formatSymbol';
import useNinetyOne from './useNinetyOne';

const useLatestSymbolInfo = ({ symbolInfo }) => {
    const { lastElement } = useNinetyOne(symbolInfo.CUR_NO);
    const [info, setInfo] = useState(symbolInfo);

    useEffect(() => {
        if (Object.keys(symbolInfo).length > 0) {
            const { close, volume, curNo, preClose, status, changePerc, isFavorite } = formatSymbolData(symbolInfo);

            setInfo({
                close,
                volume,
                curNo,
                preClose,
                status,
                changePerc,
                isFavorite,
            });
        }
    }, [symbolInfo]);

    useEffect(() => {
        if (Object.keys(lastElement).length > 0) {
            const { close, volume, curNo, preClose, status, changePerc } = formatSymbolLiveData(lastElement);

            setInfo({
                ...info,
                close,
                volume,
                curNo,
                preClose,
                status,
                changePerc,
            });
        }
    }, [lastElement]);

    console.log(`lookup2 : `, info);

    return info;
};

export default useLatestSymbolInfo;
