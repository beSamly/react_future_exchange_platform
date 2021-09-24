import React from 'react';
import useSymbolList from './useSymbolList';

const usePipLowest = ({ symbolId }: { symbolId: string }): number => {
    const { symbolsInObjectForm: symbols } = useSymbolList();
    return symbols[symbolId] ? (symbols[symbolId].pipLowest as number) : 2;
};

export default usePipLowest;
