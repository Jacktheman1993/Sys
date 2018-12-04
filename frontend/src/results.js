import React, { Component } from 'react'
import facade from './apiFacade'

export default class Results extends Component {
    constructor(props) {
        super(props);

        const params = new URLSearchParams(props.location.search);
        this.state = {
            results: [],
            country: params.get('country'),
            city: params.get('city'),
            dateF: params.get('dateF'),
            dateT: params.get('dateT')
        }
        this.goToHotel = this.goToHotel.bind(this);
    }


    goToHotel = (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname: "/hotel",
            state: {
                specific: JSON.parse(evt.target.result.value)
            }
        })
    }

    async componentDidMount() {
        const search = await facade.searchHotels(this.props.location.search)
            .then((response) => this.setState({ results: response }));
    }
    
    render() {
        if (this.state.results.length > 0) {
            let ResultList = this.ResultLister()
            return (
                <div className='resultListContainer'>
                    Country: {this.state.country}, City: {this.state.city}, Date From: {this.state.dateF}, Date To: {this.state.dateT}

                    {ResultList}
                </div>
            )
        }
        else {
            return <h1>Loading...</h1>
        }
    }

    ResultLister() {
        return (
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.results.map(result => (
                        <tr key={result.id}>
                            <td>{result.name}</td>
                            <td>{result.description}</td>
                            <td><form onSubmit={this.goToHotel}>
                                <input type='hidden' name="result" value={JSON.stringify(result)}>
                                </input>
                                <button>See more info</button>
                            </form></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };
}
