import { useEffect, useState } from 'react';
import { SymbolInfoType } from '../states/reducers/symbolReducer';
import { useTypedSelector } from '../states/useTypedSelector';

type ReturnType = {
    symbols: Array<SymbolInfoType>;
    currentSymbol: string;
    symbolsInObjectForm: Record<string, Record<string, string | number>>;
};

const useSymbolList = (): ReturnType => {
    const symbols = useTypedSelector((state) => state.symbolReducer.symbols);
    const currentSymbol = useTypedSelector((state) => state.symbolReducer.currentSymbol);

    const symbolsKey: Array<string> = Object.keys(symbols);

    let isComplete = true;
    const symbolList: Array<SymbolInfoType> = [];
    for (const key of symbolsKey) {
        symbols[key] && symbolList.push(symbols[key]);
        if (symbols[key].fClose === undefined) isComplete = false;
    }

    console.log(`symbolsWithoutDetail : `, symbolList);
    console.log(`symbolList.length in useSymbolList : `, symbolList.length);
    return {
        symbols: isComplete ? symbolList : [], // Array<Record<key, string>>
        currentSymbol,
        symbolsInObjectForm: symbols, // Record<key , Record<key, string>>
    };
};

export default useSymbolList;
