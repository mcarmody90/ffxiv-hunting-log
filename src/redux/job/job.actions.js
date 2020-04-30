import { JobActionTypes } from './job.types';

export const setCurrentJob = job => ({
  type: JobActionTypes.SET_CURRENT_JOB,
  payload: job
});