import { Dispatch } from 'redux';
import { RootState } from '../reducers';

export const loggerMiddleware = ({ dispatch, getState }) => {
    return (next: (action) => void) => {
        return (action) => {
            // Write some middleware login here
            next(action);
        };
    };
};
