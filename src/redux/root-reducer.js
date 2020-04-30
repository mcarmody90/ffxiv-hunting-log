import { combineReducers } from 'redux';
import targetReducer from './target/target.reducer';

export default combineReducers({
  target: targetReducer
});