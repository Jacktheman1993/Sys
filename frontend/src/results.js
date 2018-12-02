import React, { Component } from 'react'
export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.location.state.searchQuery
        }
    }
    seeRoom = (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname: "/rooms",
            state: {
                rooms: this.state.rooms
            }
        })
    }
    render() {

        console.log(this.props);
        return (
            <div className='resultListContainer'>
                <h3>Country: {this.props.location.state.searchQuery.country}, City: {this.props.location.state.searchQuery.city}, Date From: {this.props.location.state.searchQuery.dateF}, Date To: {this.props.location.state.searchQuery.dateT}</h3>

                <ResultList
                    resultList={this.props.location.state.results}
                />
                <form onSubmit={this.seeRoom} >
                                <button>See available rooms</button>
                            </form>
            </div>
        )
    }
}

const ResultList = ({ resultList }) => <div className="resultList">

    {resultList.map(result => {
        return (
            <div className="row" key={result.id}>

                <table>
                    <thead>
                        <tr>
                            <th>
                                {result.name}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{result.hotelDescription}</td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    }
    )}
</div>
