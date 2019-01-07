/**
 * This react component will display a list of todo items
 */

 import React, {Component} from 'react';
 import todoService from '../../services/todo';

 export default class TodoList extends Component {

    state = {
        tasks: []
    }

    async componentDidMount() {
        // Todo[]
        const items = await todoService.getAllTasks()
        this.setState({
            tasks: items
        })
    }

    render() {
        return (
            <ul>
                {
                    this.state.tasks.map((todo) => <li key={todo.id.toString()}>{todo.title}</li>)
                }
            </ul>
        )
    }

 }