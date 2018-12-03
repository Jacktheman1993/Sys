import React, { Component } from 'react'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSearch: { country: "", city: "", datoF: "", datoT: "" },
            results: [
                {id: '1', name: 'Hilton Hotel', address: 'Vejvej 1', currency: 'penge', hotelDescription: 'Standard Hilton hotel'}, 
                {id: '2', name: 'Foo Hotel', address: 'Barvej 65', currency: 'Dubloner', hotelDescription: 'Random ship that docked'}, 
                {id: '3', name: 'Bar Hotel', address: 'Foovej 32', currency: 'øl', hotelDescription: 'Actually not a hotel but a bar'}]
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

        this.props.history.push({
            pathname: "/results",
            state: { results: this.state.results,
            searchQuery: this.state.newSearch}
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

                    <button>Søg</button>
                </form>
                <p>{JSON.stringify(this.state.newSearch)}</p>
            </div>
        )
    }
}
