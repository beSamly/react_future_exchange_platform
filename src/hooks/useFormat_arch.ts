// import { useCallback } from 'react';
// import formatNumber from '../lib/formatNumber';
// import { useTypedSelector } from '../states/useTypedSelector';

// type ObjectType = {};

// type ReturnType = {};

// const useFormat = (obj, type: 'tr' | 'live') => {
//     const { pipLowest } = useTypedSelector((state) => state.symbolReducer);

//     const formatTrData = useCallback(
//         () => ({
//             symbol: obj.szCurNo,
//             date: obj.szDate,
//             time: obj.szTime,
//             open: formatNumber(obj.fOpen, pipLowest),
//             high: formatNumber(obj.fHigh, pipLowest),
//             low: formatNumber(obj.fLow, pipLowest),
//             close: formatNumber(obj.fClose, pipLowest),
//             volume: Number(obj.fVolume),
//             preClose: formatNumber(obj.fPreClose, pipLowest),
//             buyPrice: formatNumber(obj.fBuyPrice, pipLowest),
//             sellPrice: formatNumber(obj.fSellPrice, pipLowest),
//             changePerc: Math.abs(formatNumber(((obj.fClose - obj.fPreClose) / obj.fPreClose) * 100, pipLowest)),
//             status:
//                 !!Number(obj.fPreClose) && obj.fClose - obj.fPreClose > 0
//                     ? 'up'
//                     : obj.fClose - obj.fPreClose < 0
//                     ? 'down'
//                     : 'stable',
//         }),
//         [pipLowest, obj],
//     );

//     const formatLiveData = useCallback(
//         () => ({
//             symbol: obj.szSymbol,
//             date: obj.szDate,
//             time: obj.szTime,
//             open: obj.szOpen,
//             high: formatNumber(obj.szHigh, pipLowest),
//             low: formatNumber(obj.szLow, pipLowest),
//             close: formatNumber(obj.szClose, pipLowest),
//             volume: Number(obj.szVolume),
//             preClose: formatNumber(obj.szPreClose, pipLowest),
//             buyPrice: formatNumber(obj.szBuyPrice, pipLowest),
//             sellPrice: formatNumber(obj.szSellPrice, pipLowest),
//             changePerc: Math.abs(formatNumber(((obj.szClose - obj.szPreClose) / obj.szPreClose) * 100, pipLowest)),
//             status:
//                 !!Number(obj.szPreClose) && obj.szClose - obj.szPreClose > 0
//                     ? 'up'
//                     : obj.szClose - obj.szPreClose < 0
//                     ? 'down'
//                     : 'stable',
//         }),
//         [pipLowest, obj],
//     );

//     return type === 'tr' ? formatTrData() : formatLiveData();
// };

// export default useFormat;

const mystring = 'archived';
export default mystring;
