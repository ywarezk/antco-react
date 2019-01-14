/**
 * we want this component to be connected to the redux state
 * connected to the tasks from state
 * 
 * display ul li according to the tasks in the state
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';

// what we want to connet? 
// actions ? 
// state ? 

// this.props.someTasks => reduxState.tasks
class TodoList extends Component {
    render() {
        console.log('rendering todo list');
        // this.props.tasksFromState: string[]
        return (
            <ul>
                {
                    this.props.tasksFromState.map((stringItemFromArray, index) =>
                        <li key={index.toString()}>{stringItemFromArray}</li>)
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        tasksFromState: state.todo.tasks
    }
}

export default connect(mapStateToProps, null)(TodoList)