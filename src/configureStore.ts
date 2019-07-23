import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from 'store/enhancers/monitorReducers';
import loggerMiddleware from 'store/middleware/logger';
import rootReducer from 'store/reducers';

export default function configureStore(preloadedState: any = {}) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [ middlewareEnhancer, monitorReducersEnhancer ];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducer, preloadedState, (composedEnhancers as any));

    return store;
}
