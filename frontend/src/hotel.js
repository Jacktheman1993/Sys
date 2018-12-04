import React, { Component } from 'react'
import facade from './apiFacade'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            specific: this.props.location.state.specific    
        };
    }

    async componentDidMount(){
        const apiRooms = await facade.getRoomsForSpecific(this.props.location.state.specific.hotelid)
        this.setState({rooms: apiRooms});
    }
    
    bookRoom = (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname: "/booking",
            state: {
            }
        })
    }

    render() {
        let rooms = this.RoomMapper();
        return (
            <div className='resultContainer'>
            <h2>Hotel: {this.state.specific.name}</h2>
            <h4>{this.state.specific.description}</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Beds</th>
                            <th>Currency</th>
                            <th>Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms}
                    </tbody>
                </table>
            </div>
        )
    }

    RoomMapper = () => {
        return this.state.rooms.map((room) => <tr className="room" key={room.id}>
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
                {room.price} {this.state.specific.currency}
            </td>
            <td><form onSubmit={this.bookRoom}>
                <button>Book room</button>
            </form></td>
        </tr>);
    }
}