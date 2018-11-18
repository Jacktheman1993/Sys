import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import facade from './apiFacade';
import Error from './ERROR';
import jwtDecode from '../node_modules/jwt-decode';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [], roleToken: [] }
  }
  async componentDidMount() {
    try {
      const info = await facade.getInfo();
      this.setState({ info: info.results });

      const tokenDE = jwtDecode(facade.getToken());
      const roleToken = tokenDE.roles;
      this.setState({ roleToken: roleToken })
      console.log(roleToken);

    } catch (err) {
      console.log("STATE :" + err)
    }

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
              <NavLink to="/user">User</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/info">Info</NavLink>
            </li>
          </ul>

          <Route path="/" component={Home} />
          <Route path="/user" render={() => <User roleToken={this.state.roleToken} />} />
          <Route path="/admin" render={() => <Admin roleToken={this.state.roleToken} />} />
          <Route path="/info" render={() => <Info info={this.state.info} />} />
        </div>
      </Router>
    )
  }
}
function Home() {
  return (
    <div>

    </div>
  );
}
function User(props) {
  const roleToken = props;
  console.log("ROLE ", roleToken);
  if ("user" === roleToken) {
    return (
      <div>
        <h2>User</h2>
      </div>
    );
  } else {
    return (
      <div>
        <Error />
      </div>
    );
  }

}
function Admin(props) {
  const roleToken = props;
  if ("admin" === roleToken) {
    return (
      <div>
        <h2>Admin</h2>
      </div>
    )
  } else {
    return (
      <div>
        <Error />
      </div>
    )
  }

}
function Info(props) {
  const { info } = props;
  console.log("hej", info)

  return (
    <div>
      <h3>Info om Star Wars Personer</h3>
      <table className="table">
        <thead>
        </thead>
        <tbody>
          {info}
        </tbody>
      </table>
    </div>
  )
}
export default Nav;