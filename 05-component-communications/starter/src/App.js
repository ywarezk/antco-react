import React, { Component } from 'react';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

class App extends Component {
  state = {
    messageFromChild: '',
    valueFromRefChild: ''
  }

  constructor(props) {
    super(props);

    this.child1Instance = React.createRef();
  }
  
  fromChildToParent = (messageFromChild) => {
    // this.setState({
    //   messageFromChild: messageFromChild
    // })

    this.setState({
      messageFromChild
    })
  }

  componentDidMount() {
    const value = this.child1Instance.current.sayHello();
    this.setState({
      valueFromRefChild: value
    }) 
  }
  
  render() {
    const obj = {msg: 'hello from parent'}
    return (
      <div className="App">
        <h1> This is passed from child: {this.state.messageFromChild} </h1>

        <Child1 ref={this.child1Instance} message={obj} cb={this.fromChildToParent} />
        <Child2 messageFromChild1={this.state.messageFromChild} >
          <div>
            <h1>
              this is passed from parent
            </h1>
            <p>
              {obj.msg}
            </p>
          </div>  
        </Child2>

        <h3>
          {this.state.valueFromRefChild}
        </h3>
      </div>
    );
  }
}

export default App;
