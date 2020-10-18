import {
    GET_EXERCISES,
    GET_EXERCISE_CATEGORIES,
    GET_EXERCISE_BODY_PARTS,
    DELETE_EXERCISE,
    ADD_EXERCISE,
} from '../actions/types.js';

const initialState = {
    exercises: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EXERCISES:
            return {
                ...state,
                exercises: action.payload,
            };
        case GET_EXERCISE_CATEGORIES:
            return {
                ...state,
                exerciseCategories: action.payload,
            };
        case GET_EXERCISE_BODY_PARTS:
            return {
                ...state,
                exerciseBodyParts: action.payload,
            };
        case DELETE_EXERCISE:
            return {
                ...state,
                exercises: state.exercises.filter(
                    (w) => w.id !== action.payload
                ),
            };
        case ADD_EXERCISE:
            return {
                ...state,
                exercises: [...state.exercises, action.payload],
            };
        default:
            return state;
    }
}
