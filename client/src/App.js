import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
