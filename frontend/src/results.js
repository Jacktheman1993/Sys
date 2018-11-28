import React, { Component } from 'react'
export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    //     function expandResult(props, index) {
    //     return (

    //         );
    // }

    render() {
        console.log(this.props);
        return (
            <div className='resultListContainer'>
                <img style={{height: 100, width: 100}} src="img/1.jpg" />
                <ResultList
                    resultList={this.props.location.state.results}
                />
            </div>
        )
    }
}

const ResultList = ({ resultList }) =>
    <div className="resultList">
        {resultList.map(result => <div className="row" key={result.id}>

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
                {/* <tbody>

                    {<RoomList
                        roomList={[{room: result.rooms}]}
                    }
                </tbody> */}

            </table>
        </div>)}
    </div>

// const RoomList = ({ roomList }) => {
//     {
//         roomList.map(room => <tr className="room" key={room.id}>
//             <td>
//                 {room.name}
//             </td>
//             <td>
//                 {room.description}
//             </td>
//             <td>
//                 {room.bed}
//             </td>
//             <td>
//                 {room.price}
//             </td>
//             <td><form>
//                 <button>Book room</button>
//             </form></td>
//         </tr>)
//     }
// }
//onSubmit={this.expandResult}