import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const rootRouter = combineReducers(reducers)

export const store = createStore(rootRouter, applyMiddleware(thunk));

// export store types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;