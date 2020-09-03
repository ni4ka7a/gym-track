import { combineReducers } from 'redux';
import workouts from './workouts';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    workouts,
    errors,
    messages
});