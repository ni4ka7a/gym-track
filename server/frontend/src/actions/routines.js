import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_ROUTINES, DELETE_ROUTINE, ADD_ROUTINE } from './types';

export const getRoutines = () => (dispatch, getState) => {
    axios
        .get('/api/routines/', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_ROUTINES,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteRoutine = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/routines/${id}`, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({ deleteRoutine: 'Routine deleted' }));
            dispatch({
                type: DELETE_ROUTINE,
                payload: id,
            });
        })
        .catch((err) => console.log(err));
};

export const addRoutine = (routine) => (dispatch, getState) => {
    axios
        .post(`/api/routines/`, routine, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({ addRoutine: 'Routine added' }));
            dispatch({
                type: ADD_ROUTINE,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};
