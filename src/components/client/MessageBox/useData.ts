import { useTypedSelector } from '../../../states/useTypedSelector';

export default function useData() {
    const data = useTypedSelector((state) => state.messageReducer.data);
    return { data };
}
