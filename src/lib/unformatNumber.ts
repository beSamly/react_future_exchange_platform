const unformatNumber = (number: string): number => {
    return parseFloat(number.replace(',', ''));
};

export default unformatNumber;
