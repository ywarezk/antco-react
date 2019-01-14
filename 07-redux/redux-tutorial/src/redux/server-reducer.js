
import {SET_TASKS} from './server-action';

const initialState = {
    tasksFromServer: []
}

export default function serverReducer(state = initialState, action) {
    switch(action.type) {
        case SET_TASKS:
            return {...state, tasksFromServer: action.payload}
        default:
            return state;
    }
}