import { combineReducers } from 'redux';
import targetReducer from './target/target.reducer';
import jobReducer from './job/job.reducer';

export default combineReducers({
  target: targetReducer,
  job: jobReducer
});