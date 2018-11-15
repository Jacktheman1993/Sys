import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import facade from './apiFacade';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {info: [] }
    
  }
  async componentDidMount() {
    try {
      const info = await facade.getInfo();
      this.setState({ info:info.results });
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
          <Route path="/info" render={ () => <InfoStar info={this.state.info}/>} />
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
function InfoStar(props) {
  const { info } = props;
console.log("hej" , info)
const rows = info.map(function(data){return <tr key = {data.url}><td>{data.name}</td><td>{data.height}</td><td>{data.gender}</td><td>{data.birth_year}</td></tr>})
  
return (
      <div>
        <h3>Info om Star Wars Personer</h3>
        <table className="table">
        <thead>
          <tr><th>Name</th><th>Height</th><th>Gender</th><th>Birth-Year</th></tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
      </div>
    )
}
export default Nav;