import formatNumber from './formatNumber';

type OrderType = {
    acc: number;
    price: string;
    changePerc: string;
    rem: number;
};

type ReturnType = {
    buyArr: Array<OrderType>;
    sellArr: Array<OrderType>;
};

export const formatOrderBook = (
    obj: Record<string, any>,
    type: 'live' | 'tr',
    pipLowest = 2,
    preClose = 0,
): ReturnType => {
    // Guard case : nothing to do if obj and type are not provided.
    if (!obj || !type)
        return {
            buyArr: [],
            sellArr: [],
        };

    const buyArr: Array<OrderType> = [];
    const sellArr: Array<OrderType> = [];
    const prefix = type === 'tr' ? 'f' : 'sz';

    //Convert it to number
    Object.keys(obj).forEach((key) => {
        obj[key] = Number(obj[key]);
    });

    //Populate buyArr and sellArr
    for (let i = 1; i <= 10; i++) {
        const newBuyArrElement: OrderType = {
            price: formatNumber(obj[`${prefix}BuyPrc${i}`], pipLowest),
            rem: obj[`${prefix}BuyRem${i}`],
        } as OrderType;

        parseFloat(newBuyArrElement.price) !== 0 && buyArr.push(newBuyArrElement as OrderType);

        const newSellArrElement: OrderType = {
            price: formatNumber(obj[`${prefix}SellPrc${i}`], pipLowest),
            rem: obj[`${prefix}SellRem${i}`],
        } as OrderType;

        parseFloat(newSellArrElement.price) !== 0 && sellArr.unshift(newSellArrElement as OrderType);
    }

    // Accumulate each element in buyArr and populate changePerc field
    for (const index in buyArr) {
        const slicedArr = buyArr.slice(0, Number(index) + 1);
        const accValue = slicedArr.reduce((accumulator, currentObj) => accumulator + currentObj.rem, 0);
        buyArr[index].acc = accValue;
        const changePerc = ((parseFloat(buyArr[index]['price']) / Number(preClose)) * 100).toFixed(2);
        buyArr[index]['changePerc'] = Number(changePerc) > 0 ? `+${changePerc}%` : `${changePerc}%`;
    }

    // Accumulate each element in sellArr and populate changePerc field
    for (const index in sellArr) {
        const slicedArr = sellArr.slice(Number(index), sellArr.length);
        const accValue = slicedArr.reduce((accumulator, currentObj) => accumulator + currentObj.rem, 0);
        sellArr[index].acc = accValue;
        const changePerc = ((parseFloat(sellArr[index]['price']) / Number(preClose)) * 100).toFixed(2);
        sellArr[index]['changePerc'] = Number(changePerc) > 0 ? `+${changePerc}%` : `${changePerc}%`;
    }

    return {
        buyArr,
        sellArr,
    };
};
