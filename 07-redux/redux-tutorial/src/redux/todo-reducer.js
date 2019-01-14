/**
 * our todo redux reducer
 */

import {ADD} from './todo-actions';

const initialState = {
    tasks: [],
    stamString: 'foo bar'
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case ADD:
            const newTasks = [...state.tasks];
            newTasks.push(action.payload);
            return {...state, tasks: newTasks};
        // case '[settings] CHANGE': 
        default:
            return state;
    }
}