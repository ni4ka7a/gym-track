import { combineReducers } from 'redux';
import workouts from './workouts';
import routines from './routines';
import exercises from './exercises';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    workouts,
    routines,
    exercises,
    errors,
    messages,
    auth,
});
