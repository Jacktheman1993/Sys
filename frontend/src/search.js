import React, {Component} from 'react'
import { Redirect } from "react-router";
export default class Search extends Component {
    constructor(props) {
      super(props);
      this.state = { newsearch: {country:"",city:"", datoF: "", datoT: ""}, results: [] }
    }
    search = (evt) =>{
        evt.preventDefault();
        console.log(this.state.newSearch);
        let datoF1 = new Date(this.state.newSearch.datoF);
        let datoT2 = new Date(this.state.newSearch.datoT);
        console.log("-----here---");
        console.log("dateF:" + datoF1);
        console.log("dateT:" + datoT2);
        console.log(typeof datoF1);
        if(datoT2 > datoF1){
            console.log("im here!");
            return this.props.error('datoT > datoF')

        }
       //this.props.search(this.state.newSearch);
    /*    return <Redirect to={{

        }}
        />*/
        this.props.history.push({
            pathname: "/results",
            state: {results: this.state.newSearch}})
        
    }
    inputVal = (evt) => {
        const pro = evt.target.id
        const val = evt.target.value;
        console.log(val)
        let newSearch = this.state.newSearch;
        newSearch[pro] = val;
        this.setState({newSearch: newSearch
        })
    }
    render() {
      return (
          <div>
            <form onSubmit={this.search}>
                <h2>Country</h2>
                <input  placeholder="Country" id="country" name="country" value={this.state.newSearch.country}  onChange={this.inputVal}/>
                <h2>City</h2>
                <input  placeholder="City" id="city" name="city" value={this.state.newSearch.city}  onChange={this.inputVal}/>
                <h2>Dato From</h2>
                <input type="date" placeholder="Dato To" id="datoF" name="datoF" value={this.state.newSearch.datoF} onChange={this.inputVal} />
                <h2>Dato To</h2>
                <input type="date" placeholder="Dato From" id="datoT" name="datoT" value={this.state.newSearch.datoT} onChange={this.inputVal} />
                
                <button>Søg</button>
            </form>
            <p>{JSON.stringify(this.state.newSearch)}</p>
          </div>
      )
    }
  }