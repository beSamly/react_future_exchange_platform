import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loggerMiddleware } from './middlewares/logger-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware(thunk, loggerMiddleware),
        // other store enhancers if any
    ),
);
