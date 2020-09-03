import axios from 'axios';
import { createMessage } from './messages';

import { GET_WORKOUTS, DELETE_WORKOUT, ADD_WORKOUT, GET_ERRORS } from './types';

// get workouts
export const getWorkouts = () => dispatch => {
    axios.get('/api/workouts/')
        .then(res => {
            dispatch({
                type: GET_WORKOUTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const deleteWorkout = (id) => dispatch => {
    axios.delete(`/api/workouts/${id}`)
        .then(res => {
            dispatch(createMessage({ deleteWorkout: 'Workout deleted' }))
            dispatch({
                type: DELETE_WORKOUT,
                payload: id
            });
        }).catch(err => console.log(err));
};

export const addWorkout = (workout) => dispatch => {
    axios.post(`/api/workouts/`, workout)
        .then(res => {
            dispatch(createMessage({ addWorkout: 'Workout added' }))
            dispatch({
                type: ADD_WORKOUT,
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                message: err.response.data,
                status: err.response.status
            };

            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        });
};