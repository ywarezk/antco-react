import React, {Component} from 'react';

export default class ControlledLogin extends Component {
    state = {
        email: '',
        emailTouched: false,
        emailErrors: [],
        password: '',
        passwordTouched: false
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        })

        
    }

    handleBlur = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name + 'Touched']: true
        })

        // validate the input

    }


    render() {
        return (
            <form noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        value={this.state.email}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        required
                        type="email" 
                        minLength="3"
                        maxLength="10"
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
                        value={this.state.password}
                        onChange={this.handleChange}
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