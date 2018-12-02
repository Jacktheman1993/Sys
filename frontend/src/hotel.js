import React, { Component } from 'react'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specific: this.props.location.state.specific,
            rooms: this.props.location.state.rooms
        }
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
        console.log(this.props);

        let rooms = this.RoomMapper();

        return (
            <div className='resultContainer'>
                <table>
                    <tbody>
                        {rooms}
                    </tbody>
                </table>
            </div>
        )
    }

    RoomMapper() {
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
                {room.price}
            </td>
            <td><form onSubmit={this.bookRoom}>
                <button>Book room</button>
            </form></td>
        </tr>);
    }
}