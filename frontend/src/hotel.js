import React, { Component } from 'react'
import facade from './apiFacade'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            specific: this.props.location.state.specific,
            dateF: this.props.location.state.dateF,
            dateT: this.props.location.state.dateT
        };
    }

    async componentDidMount() {
        const apiRooms = await facade.getRoomsForSpecific(this.props.location.state.specific.hotelid)
        this.setState({ rooms: apiRooms });
    }

    bookRoom = (evt) => {
        evt.preventDefault();
        this.props.history.push({
            pathname: "/booking",
            state: {
                specific: this.props.location.state.specific,
                specificRoom: JSON.parse(evt.target.room.value),
                dateF: this.props.location.state.dateF,
                dateT: this.props.location.state.dateT
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
                <input type='hidden' name="room" value={JSON.stringify(room)}></input>
                <button className='btn btn btn-dark'>Book room</button>
            </form></td>
        </tr>);
    }
}