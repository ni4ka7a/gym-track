import { combineReducers } from 'redux';
import workouts from './workouts';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    workouts,
    errors,
    messages,
    auth
});