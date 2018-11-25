import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import Search from './search';

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
          <Route path ="/results" component={Results}/>
        </div>
      </Router>
    )
  }
}

function Results(props) {
  const results = props.location.state.results;
  const { country, city, datoF, datoT } = props.location.state.results;
  console.log("country", country)
  console.log("city", city)
  console.log("results", props.location.state.results)
  return (
    <div>
        <h2>Country: {results.country}</h2><h2>City: {results.city}</h2><h2>Dato From: {results.datoF}</h2><h2>Dato To {results.datoT}</h2>
    </div>
  );
}
export default Nav;