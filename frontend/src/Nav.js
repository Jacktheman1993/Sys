import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import InfoStar from './info';
import facade from './apiFacade';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {info: [] }
    
  }
  async componentDidMount() {
    try {
      const info = await facade.getInfo();
      this.setState({ info:info });
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
          <Route path="/user" component={User} />
          <Route path="/admin" component={Admin} />
          <Route path="/info" component={Infos} />
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
function User() {
  return (
    <div>

    </div>
  );
}
function Admin() {
  return (
    <div>

    </div>
  );
}
function Infos(props) {
  const info = props;
  console.log(info);
  return (
    <div>
      <InfoStar />
    </div>
  );
}
export default Nav;