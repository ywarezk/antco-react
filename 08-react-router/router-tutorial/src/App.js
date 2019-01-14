import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          {/* <Route path={['/', '/about']}>
            {
              () => (
                <nav>
                  <ul>
                    <li>
                      <Link to="/">home</Link>      
                    </li>
                    <li>
                      <Link to="/about">about</Link>      
                    </li>
                  </ul>
                </nav>
              )
            }
          </Route> */}

          <nav>
                  <ul>
                    <li>
                      <Link to="/">home</Link>      
                    </li>
                    <li>
                      <Link to="/about">about</Link>      
                    </li>
                    <li>
                      <Link to="/about/hello-world-from-router">about with message</Link>      
                    </li>
                    <li>
                      <Link to="/about?search=hello-world">about with query params</Link>      
                    </li>
                  </ul>
          </nav>
          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about/:message" component={About} />
            <Route component={Error404} />
          </Switch>
          

        </div>  
      </BrowserRouter>
    );
  }
}

export default App;
