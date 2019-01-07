/**
 * service that will handle with rest api of task
 * 
 * https://nztodo.herokuapp.com/api/task/?format=json
 */

import TodoModel from '../models/todo';

// let instance = null;

class TodoService {

    // static getInstance() {
    //     if (instance) {
    //         return instance;
    //     }
    //     instance = new TodoService();
    //     return instance
    // }
    
    /**
     * query the rest server and returns a promise fulfilled with all
     * the todo tasks
     * @returns Promise<[{title: dsaf, description: sdfa ...}]>
     * @returns Promise<Todo[]>
     */
    getAllTasks = async () => {
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const json = await response.json()
        return json
            .map((singleJson) => new TodoModel(singleJson));

        // return fetch('https://nztodo.herokuapp.com/api/task/?format=json')
        //     .then((response) => {
        //         return response.json()
        //     })
        //     .then((json) => {

        //     });
    }
}

export default new TodoService();