import { TargetActionTypes } from './target.types';

export const setCurrentTarget = target => ({
  type: TargetActionTypes.SET_CURRENT_TARGET,
  payload: target
});