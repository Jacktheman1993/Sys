import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min,css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
const columns = [{
    
}]
export default class InfoStar extends Component {
  render(){
    return (
      <div>
        <h3>Info om Star Wars Personer</h3>
        <BootstrapTable />
      </div>
    )
  }
}

