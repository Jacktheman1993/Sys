import React, {component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import './App.css';
import InfoStar from './info';

function Nav(){
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink to ="/user">User</NavLink>
          </li>
          <li>
            <NavLink to ="/admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to ="/info">Info</NavLink>
          </li>
        </ul>

        <Route path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
        <Route path="/info" component={Info} />
      </div>
    </Router>
  )
}
function Home(){
  return(
    <div>
        
    </div>
  );
}
function User(){
  return(
    <div>
      
    </div>
  );
}
function Admin(){
  return(
    <div>
      
    </div>
  );
}
function Info(){
  return(
    <div>
    <InfoStar />
    </div>
  );
}
export default Nav;