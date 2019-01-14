/**
 * we want a form with a text input
 * submitting the form will add a task to the state
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/todo-actions';

// connecting component: 
// which action?
// which part of the state ? 

// which action means: 
// addTask('sdfgsfd')
// store.dispatch(addTask)

// which state
// this.props.somePartOfTheState

// TodoForm we want to connect the todo form to addTask
// this.props.someFunction('some string') => store.dispatch(addTask('some string'))
class TodoForm extends Component {
    state = {
        todoInputValue: ''
    }

    handleTextChange = (event) => {
        const value = event.target.value;
        this.setState({
            todoInputValue: value
        })
    }

    handleSubmit = (event) => {
        const currentValue = this.state.todoInputValue;
        this.props.addTasksFromProps(currentValue);
        event.preventDefault();
    }

    render() {
        // we can now use this.props.addTasksFromProps
        console.log('rendering todo form');
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.message}</h1>
                <input 
                    onChange={this.handleTextChange}
                    value={this.state.todoInputValue}
                    type="text" 
                    placeholder="enter new task" />
            </form>
        )
    }
}

// connect
// between react component and state / actions redux

// smart TodoForm
// TodoForm that is connected to our redux

// mapStateToProps
// which part of our state is connected to our component (TodoForm)

// either a function or null
// this.props.takeTheTasks

/**
 * map state items to react props
 * @param {*} state 
 */
// function mapStateToProps(state) {
//     return {
//         takeTheTasks: state.tasks
//     }
// }

/**
 * this.props.addTasksFromProps('some string') => dispatch(addTask('some string'))
 * @param {Func} dispatch - store.dispatch 
 */
function mapActionsToProp(dispatch) {
    return {
        addTasksFromProps: (todoTaskFromInput) => dispatch(addTask(todoTaskFromInput))
    }
}

function mapStateToProps(state) {
    return {
        message: state.todo.stamString
    }
}


export default connect(mapStateToProps, mapActionsToProp)(TodoForm);