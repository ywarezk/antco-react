import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

// render props
// class ComponentWrapper extends Component {
//     handleChange = (event) => {
//         const target = event.target;
//         const name = target.name;
//         this.setState({
//             [name]: target.value
//         })
//     }

//     render () {
//         return this.props.children(this.handleChange);
//     }
// }

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('This field is required').email('no!!! my god no!!!').min(2),
    password: Yup.string().required('This field is required').min(5, 'Please enter more than 5'),
})


export default class FormikLogin extends Component {
    handleSubmitInFormikLogin = (values) => {
        alert('success')
    }
    
    render() {
        return (
            <Formik
                validationSchema={LoginSchema}
                initialValues={ {email: '', password: ''} }
                onSubmit={this.handleSubmitInFormikLogin}
            >
                {
                    ({handleSubmit}) => {
                        return (
                            <Form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <Field className="form-control" name="email" type="email" />                                               
                                    <ErrorMessage name="email">
                                    {
                                        (errorMessage) => {
                                            return (
                                                <div className="alert alert-danger">
                                                    {errorMessage}
                                                </div>
                                            )
                                        }
                                    }
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <Field className="form-control" name="password" type="password" />
                                    <ErrorMessage name="password" component="div" className="alert alert-danger" />
                                </div>
                                <div className="form-group">
                                    <button 
                                        className="btn btn-primary"
                                        type="submit">
                                        Login
                                    </button>
                                </div>
                            </Form>
                                
                        )
                    }
                }
            </Formik>
        )
    }
}