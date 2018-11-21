import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import Søger from './søg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [], roleToken: [] }
  }
  render() {
    return (

      <Router>
        <div>

          <ul className="header">
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/søg">Søg</NavLink>
            </li>
          </ul>

          <Route path="/" component={Home} />
          <Route path="/søg" component={Søg} />
        </div>
      </Router>
    )
  }
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
function Søg() {
  return (
    <div>
    <Søger />
    </div>
  );
}
export default Nav;