import React, { Component } from 'react'
import facade from './apiFacade'
import Results from './results';
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
        // alert("You Have Booked a room");
        this.props.history.push({
            pathname: "/booking",
            state: {
            }
        })
    }

    render() {
        let rooms = this.RoomMapper();
        return (
            <div className='table-responsive'>
            <h2>Hotel: {this.state.specific.name}</h2>
            <h4>{this.state.specific.description}</h4>
                <table className='table table-hover table-bordered table-dark'>
                    <thead className='thead-light'>
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
                {room.bed} Beds
            </td>
            <td>
                {room.price},- {this.state.specific.currency}
            </td>
            <td><form onSubmit={this.bookRoom}>
                <button className='btn btn btn-dark'>Book room</button>
            </form></td>
        </tr>);
    }
}