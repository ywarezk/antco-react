import React, {Component} from 'react';

export default class UncontrolledLogin extends Component {
    constructor(props) {
        super(props);
        this.emailInstance = React.createRef();
        this.passwordInstance = React.createRef();
    }
    
    handleBlur = (event) => {
        // validate the input we will save the error in the state


    }


    render() {
        return (
            <form noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        ref={this.emailInstance}
                        onBlur={this.handleBlur}
                        required
                        maxLength="10"
                        type="email" 
                        minLength="3"
                        className="form-control"
                        name="email" />

                    {
                        this.state.emailTouched ? <div className="alert alert-danger">
                            Email is invalid
                        </div> : null
                    }                    
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        ref={this.passwordInstance}
                        type="password" 
                        className="form-control"
                        name="password" />
                </div>
                <div className="form-group">
                    <button 
                        className="btn btn-primary"
                        type="submit">
                        Login
                    </button>
                </div>
            </form>
        )
    }
}