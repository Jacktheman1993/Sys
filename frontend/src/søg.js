import React, {Component} from 'react'
export default class Søg extends Component {
    constructor(props) {
      super(props);
      this.state = { newSøg: {country:"",city:"", datoF:"", datoT:"", room: ""}, value: "0" }
    }
    søg = (evt) =>{
        evt.preventDefault();
        alert("Yor have picked: " + this.state.newSøg);
        console.log(this.state.newSøg)
        //this.props.søg(this.state.newSøg);
    }
    inputVal = (evt) => {
        const pro = evt.target.id
        const val = evt.target.value;
        console.log(val)
        let newSøg = this.state.newSøg;
        newSøg[pro] = val;
        this.setState({newSøg: newSøg
        })
    }
    render() {
      return (
          <div>
            <form onSubmit={this.søg}>
                <h2>Country</h2>
                <input  placeholder="Country" id="country" name="country" value={this.state.newSøg.country}  onChange={this.inputVal}/>
                <h2>City</h2>
                <input  placeholder="City" id="city" name="city" value={this.state.newSøg.city}  onChange={this.inputVal}/>
                <h2>Dato From</h2>
                <input type="date" placeholder="Dato To" id="datoF" name="datoF" value={this.state.newSøg.datoF} onChange={this.inputVal} />
                <h2>Dato To</h2>
                <input type="date" placeholder="Dato From" id="datoT" name="datoT" value={this.state.newSøg.datoT} onChange={this.inputVal} />
                <label>
                    Pick a Room
                    <select value={this.state.newSøg.room}  onChange={this.inputVal}>
                        <option value="0">Room</option>
                        <option value="1" id="1">1 Room</option>
                        <option value="2" id="2">2 Rooms</option>
                        <option value="3" id="3">3 Rooms</option>
                    </select>
                </label>
                <button>Søg</button>
            </form>
            <p>{JSON.stringify(this.state.newSøg)}</p>
          </div>
      )
    }
  }