import React, { Component } from 'react'
export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.location.state.searchQuery
        }
    }

    render() {

        console.log(this.props);
        return (
            <div className='resultListContainer'>
                Country: {this.props.location.state.searchQuery.country}, City: {this.props.location.state.searchQuery.city}, Date From: {this.props.location.state.searchQuery.dateF}, Date To: {this.props.location.state.searchQuery.dateT}

                <img style={{height: 100, width: 100}} src="img/1.jpg" />
                <ResultList
                    resultList={this.props.location.state.results}
                />
            </div>
        )
    }
}

const ResultList = ({ resultList }) => <div className="resultList">
        {resultList.map(result => {
            let rooms = result.rooms.map((room) => <tr className="room" key={room.id}>
                <td>
                    {room.name}
                </td>
                <td>
                    {room.description}
                </td>
                <td>
                    {room.bed}
                </td>
                <td>
                    {room.price}
                </td>
                <td><form>
                    <button>Book room</button>
                </form></td>
            </tr>);
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
                                <td><form >
                                    <button>See available rooms</button>
                                </form></td>
                            </tr>
                        </tbody>
                        <tbody>
                            {rooms}
                        </tbody>
                    </table>
                </div>)
        }
        )}
    </div>
