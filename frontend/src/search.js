import React, { Component } from 'react'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSearch: { country: "", city: "", datoF: "", datoT: "" },
        }
    }
    search = (evt) => {
        evt.preventDefault();
        console.log(this.state.newSearch);
        let datoF1 = new Date(this.state.newSearch.datoF);
        let datoT2 = new Date(this.state.newSearch.datoT);
        console.log("-----here---");
        console.log("dateF:" + datoF1);
        console.log("dateT:" + datoT2);
        console.log(typeof datoF1);
        if (datoT2 < datoF1) {
            console.log("im here!");
            return this.props.error('datoT > datoF')

        }

        // var url = new URL("https://INSERT API PATH HERE/api/hotel/search"),
        // params = {country: this.state.newSearch.country, city: this.state.newSearch.city}
        // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        // fetch(url)
        // .then(res => res.json())
        // .then(data => results = data)
        // .then(() => console.log(results))

        const searchQuery = this.state.newSearch
        
        this.props.history.push({
            pathname: "/results",
            search: `?country=${searchQuery.country}&city=${searchQuery.city}`,
            state: { searchQuery }
        })

    }
    inputVal = (evt) => {
        const pro = evt.target.id
        const val = evt.target.value;
        console.log(val)
        let newSearch = this.state.newSearch;
        newSearch[pro] = val;
        this.setState({
            newSearch: newSearch
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                    <h2>Country</h2>
                    <input placeholder="Country" id="country" name="country" value={this.state.newSearch.country} onChange={this.inputVal} />
                    <h2>City</h2>
                    <input placeholder="City" id="city" name="city" value={this.state.newSearch.city} onChange={this.inputVal} />
                    <h2>Dato From</h2>
                    <input type="date" placeholder="Dato To" id="datoF" name="datoF" value={this.state.newSearch.datoF} onChange={this.inputVal} />
                    <h2>Dato To</h2>
                    <input type="date" placeholder="Dato From" id="datoT" name="datoT" value={this.state.newSearch.datoT} onChange={this.inputVal} />

                    <button className='btn btn-info btn-block'>Søg</button>
                </form>
                <p>{JSON.stringify(this.state.newSearch)}</p>
            </div>
        )
    }
}
