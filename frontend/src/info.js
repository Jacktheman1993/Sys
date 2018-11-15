import React from 'react';
import './App.css';
export default function InfoStar(props) {
const { info } = props;
console.log(props)
//const rows = info.map(function(data){return <h2>{data.gender}</h2>})
  
return (
      <div>
        <h3>Info om Star Wars Personer</h3>
        <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
      </div>
    )
}

