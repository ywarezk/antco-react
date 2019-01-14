import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


import { connect } from 'react-redux';
import { fetchFromServer } from './redux/server-action';

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="App">
        <TodoForm />

        <TodoList />
      </div>
    );
  }
}

export default connect(null, function(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchFromServer())
  }
})(App);
