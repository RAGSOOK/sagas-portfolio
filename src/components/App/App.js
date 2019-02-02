import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ProjectPage from '../ProjectPage/ProjectPage.js';
import Admin from '../Admin/Admin.js';
import Header from '../Header/Header.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <div className='page'>
            <Route exact path="/" component={ProjectPage} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
