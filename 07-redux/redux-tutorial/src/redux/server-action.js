/**
 * redux actions to communicate with the todo server
 * and fetch the todo tasks from the server
 */

export const SET_TASKS = '[server] SET_TASKS';

/**
 * 
 * @param {any[]} tasksFromServer 
 */
function setTasksFromServer(tasksFromServer) {
    return {type: SET_TASKS, payload: tasksFromServer}
}

/**
 * async action that will call the server
 * https://nztodo.herokuapp.com/api/task/?format=json
 */
export function fetchFromServer() {
    return async function(dispatch) {
        const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const json = await res.json();
        dispatch(setTasksFromServer(json));
    }
}