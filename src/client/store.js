
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { ExpressionsReducer } from './containers/Expressions/reducer';

// reducers
export const reducers = combineReducers({
  expressions: ExpressionsReducer,
});

// store
export const store = createStore(reducers, {}, devToolsEnhancer());
