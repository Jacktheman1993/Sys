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
                    <h2>Country: {this.state.country} && City: {this.state.city} && Date From: {this.state.dateF} && Date To: {this.state.dateT}</h2>

                    {ResultList}
                </div>
            )
        }
        else {
            return <h1>There are no hits with the selected search criteria. Please Search Again</h1>
        }
    }

    ResultLister() {
        return (
            <div className='table-responsive'>
            <table className='table table-hover table-bordered table-dark'>
                <thead className='thead-light'>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Address</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.results.map(result => (
                        <tr key={result.id}>
                            <td>{result.name}</td>
                            <td>{result.description}</td>
                            <td>{result.addresse}</td>
                            <td><form onSubmit={this.goToHotel}>
                                <input type='hidden' name="result" value={JSON.stringify(result)}>
                                </input>
                                <button className='btn btn btn-dark'>See more info</button>
                            </form></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        );
    };
}
