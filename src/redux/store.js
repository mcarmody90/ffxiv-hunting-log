import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

var middlewares = [];

if (process.env.NODE_ENV === 'development')
{
    middlewares = [logger];
}


const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;