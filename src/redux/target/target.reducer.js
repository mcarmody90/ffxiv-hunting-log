import { TargetActionTypes } from './target.types';

const INITIAL_STATE = {
  currentTarget: null
}

const targetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TargetActionTypes.SET_CURRENT_TARGET:
      return {
        ...state,
        currentTarget: action.payload
      }
    default:
      return state;
  }
};

export default targetReducer;