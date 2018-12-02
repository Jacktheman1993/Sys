import React, { Component } from 'react'
export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.location.state.searchQuery,
            specific: {
                id: "", name: "", address: "", currency: "", hotelDescription: "",
                rooms: []
            },
        }
        this.goToHotel = this.goToHotel.bind(this);
    }

    goToHotel = (evt) => {
        evt.preventDefault();
        this.setState({ specific: JSON.parse(evt.target.elements.result.value) }, function () {
            // var url = new URL("https://INSERT API PATH HERE/api/hotel/search/{this.state.specific.id}"),
            // fetch(url)
            // .then(res => res.json())
            // .then(data => rooms = data)
            // .then(() => console.log(rooms))
            this.setState({
                rooms: [
                    { id: '1', name: 'suite', bed: '3/4 gulvmåtte', description: 'Smukt værelse med extra grill', price: '5mil penge' },
                    { id: '2', name: 'Det lille hus', bed: '5', description: 'Fantastisk selvstående bygning med god ventilation', price: '200' },
                    { id: '3', name: 'rum', bed: '1 dobbeltseng', description: 'Lyst og godt værelse med udsigt over (indsæt noget smukt)', price: '42' }
                ]
            }, function () {
                console.log(this.state.specific);
                console.log(this.state.rooms);
                this.props.history.push({
                    pathname: "/hotel",
                    state: {
                        specific: this.state.specific,
                        rooms: this.state.rooms
                    }
                })
            }
            )


        });
    }

    render() {
        let ResultList = this.ResultLister()
        console.log(this.props);
        return (
            <div className='resultListContainer'>
                Country: {this.props.location.state.searchQuery.country}, City: {this.props.location.state.searchQuery.city}, Date From: {this.props.location.state.searchQuery.dateF}, Date To: {this.props.location.state.searchQuery.dateT}

                {ResultList}
                <img style={{ height: 100, width: 100 }} src="img/1.jpg" />
            </div>
        )
    }

    ResultLister() {
        return this.props.location.state.results.map(result => {
            return (<div className="row" key={result.id}>
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
                            <td><form onSubmit={this.goToHotel}>
                                <input type='hidden' name="result" value={JSON.stringify(result)}>
                                </input>
                                <button>See more info</button>
                            </form></td>
                        </tr>
                    </tbody>
                </table>
            </div>);
        });
    }
}

// const ResultList = ({ resultList }) => <div className="resultList">
//     {resultList.map(result => {
//         let resultName = "result" + result.id
//         return (
//             <div className="row" key={result.id}>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>
//                                 {result.name}
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>{result.hotelDescription}</td>
//                             <td><form onSubmit= {this.goToHotel}>
//                             <input type="hidden" name={resultName} id={result.id} value={result}/>

//                                 <button>See more info</button>
//                             </form></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>)
//     }
//     )}
// </div>


// const ResultList = ({ resultList }) => <div className="resultList">
//         {resultList.map(result => {
//             let rooms = result.rooms.map((room) => <tr className="room" key={room.id}>
//                 <td>
//                     {room.name}
//                 </td>
//                 <td>
//                     {room.description}
//                 </td>
//                 <td>
//                     {room.bed}
//                 </td>
//                 <td>
//                     {room.price}
//                 </td>
//                 <td><form>
//                     <button>Book room</button>
//                 </form></td>
//             </tr>);
//             return (
//                 <div className="row" key={result.id}>

//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>
//                                     {result.name}
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>{result.hotelDescription}</td>
//                                 <td><form >
//                                     <button>See available rooms</button>
//                                 </form></td>
//                             </tr>
//                         </tbody>
//                         <tbody>
//                             {rooms}
//                         </tbody>
//                     </table>
//                 </div>)
//         }
//         )}
//     </div>
