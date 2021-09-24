import { useTypedSelector } from '../states/useTypedSelector';

const sizeTable = ['xs', 'sm', 'md', 'lg', 'xl'];

type MappedStyle = {
    xs: StyleValue;
    sm: StyleValue;
    md: StyleValue;
    lg: StyleValue;
    xl: StyleValue;
};

type ReturnTyp = {
    style: (MappedStyle) => StyleValue;
};

type StyleValue = string | number;

const useStyle = (): ReturnTyp => {
    const currentScreenSize = useTypedSelector((state) => state.userReducer.screenSize);

    const returnMinSize = (obj: MappedStyle) => {
        const index = sizeTable.findIndex((s) => s === currentScreenSize);
        var minSize;
        for (var i = index; 0 <= i; i--) {
            if (obj[sizeTable[i]]) {
                minSize = obj[sizeTable[i]];
                return minSize;
            }
        }
    };

    const style = (obj: MappedStyle) => {
        if (!currentScreenSize) return alert('Current screen size is not initiated');
        return obj[currentScreenSize] ? obj[currentScreenSize] : returnMinSize(obj);
    };

    return { style };
};
export default useStyle;
