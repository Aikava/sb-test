import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from 'client/reducers'

export const store = createStore(reducer, applyMiddleware(thunk));
