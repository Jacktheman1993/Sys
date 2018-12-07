import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Styles/App.css';
import Search from './search';
import Results from './results';
import Hotel from './hotel';
import Book from './booking';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [], roleToken: [] }
  }

  error = (errMessage) => {
    this.setState({err: errMessage})
  }
  render() {
    return (
      
      <Router>
        <div>
          <ul className="header">
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            
          </ul>
.
          <Route exact path="/" render={(props) => <Search  error={this.error} {...props}/>} />
          <Route path ="/results" render={(props) => <Results  error={this.error} {...props}/>} />
          <Route path ="/hotel" render={(props) => <Hotel  error={this.error} {...props}/>} />
          <Route path ="/booking" render={(props) => <Book  error={this.error} {...props}/>} />
        </div>
      </Router>
    )
  }
}

export default Nav;