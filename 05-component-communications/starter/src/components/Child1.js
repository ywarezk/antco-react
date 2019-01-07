import React, { Component } from 'react';
import messageService from '../services/message';

export default class Child1 extends Component {
    state = {
        messageFromChild2: ''
    }

    passToParent = () => {
        const {cb} = this.props; 
        cb(`this is sent from child ${Math.random()} `);
    }

    sayHello = () => {
        return 'hello from ref to parent';
    }

    componentDidMount() {
        // subscribe to chat
        this.subscription = messageService.chat.subscribe((messageFromChild2) => {
            this.setState({
                messageFromChild2
            })
        })
    }

    componentWillUnmount() {
        // clear the subscribe connection

        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                <h1>Hello i am child1 {this.props.message.msg}</h1>
                <button onClick={this.passToParent}>
                    pass message to parent
                </button>

                <h5>
                    This is from child2: {this.state.messageFromChild2}
                </h5>
            </div>
        )
    }

}