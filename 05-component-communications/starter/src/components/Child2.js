import React, { Component } from 'react';
import messageService from '../services/message';

export default class Child2 extends Component {

    /**
     * - grab the text from the input
     * - send the text to our subject in MessageService
     */
    handleSubmit = (event) => {
        event.preventDefault();
        messageService.chat.next(this.value);
    }

    handleChange = (event) => {
        this.value = event.target.value;
    }

    render() {
        return (
            <div>
                <h1>Hello i am child number 2 {this.props.messageFromChild1}</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Send to child1</label>
                        <input 
                            onChange={this.handleChange} 
                            type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Send</button>
                    </div>
                </form>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }

}