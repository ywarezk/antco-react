import React, { Component } from 'react';
import './App.css';
import ControlledLogin from './components/ControlledLogin';
import FormikLogin from './components/FormikLogin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>
                Controlled login
              </h1>
              <ControlledLogin />


              <h1>
                Formik
              </h1>
              <FormikLogin />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
