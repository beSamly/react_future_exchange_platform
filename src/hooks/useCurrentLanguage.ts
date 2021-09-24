import { LanguageType } from '../states/reducers/userReducer';
import { useTypedSelector } from '../states/useTypedSelector';

type ReturnType = {
    currentLanguage: LanguageType;
};

const useCurrentLanguage = (): ReturnType => {
    const currentLanguage = useTypedSelector((state) => state.userReducer.language);
    return { currentLanguage };
};

export default useCurrentLanguage;
