import React, { Component } from 'react'
import facade from './apiFacade'
export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBooking: { name: '', datoF: this.props.location.state.dateF, datoT: this.props.location.state.dateT, roomID: this.props.location.state.specificRoom.id },
            specific: this.props.location.state.specific,
            specificRoom: this.props.location.state.specificRoom,
            dateF: this.props.location.state.dateF,
            dateT: this.props.location.state.dateT
        }
    }
     booker = (evt) => {
        evt.preventDefault();
        const bookingStatus =  facade.doBooking(this.state.newBooking)
        if (bookingStatus) {
            alert("Booking successful");
        }
        else{
            alert("Something is fucked. Please contact the fuckup department");
        }
    }
    inputVal = (evt) => {
        const pro = evt.target.id
        const val = evt.target.value;
        console.log(val)
        let newBooking = this.state.newBooking;
        newBooking[pro] = val;
        this.setState({
            newBooking: newBooking
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Dear customer</h2>
                    <h3>You have selected {this.state.specificRoom} at {this.state.specific}</h3>
                    <h3>From {this.state.newBooking.dateF} to {this.state.newBooking.dateT}</h3>

                    If these informations are correct, please enter your name in the field below and submit
                </div>
                <form onSubmit={this.booker}>
                    <div className='row'>
                        <div className='col'>
                            <input className='form-control' placeholder="Name" id="name" name="name" value={this.state.newBooking.name} onChange={this.inputVal} />
                        </div>
                        <div className='col'>
                            <button className='btn btn-lg btn-primary' >Book</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}