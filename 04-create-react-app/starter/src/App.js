import React, { Component } from 'react';
import './App.scss';
import TodoList from './components/todo-list/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
