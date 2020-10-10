import { combineReducers } from 'redux';
import workouts from './workouts';
import routines from './routines';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    workouts,
    routines,
    errors,
    messages,
    auth,
});
