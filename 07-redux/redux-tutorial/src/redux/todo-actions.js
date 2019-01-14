/**
 * this file will contain my redux action of the todo
 */

export const ADD = '[todo] ADD';

export function addTask(todoString) {
    return {type: ADD, payload: todoString};
}

// export default function() {

// }

// import stamFunction, {ADD, addTask} from './actions';