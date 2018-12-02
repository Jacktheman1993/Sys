import React, { Component } from 'react';
export default class Rooms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: [{ id: '1', name: 'suite', bed: '3/4 gulvmåtte', description: 'Smukt værelse med extra grill', price: '5mil penge' },
            { id: '2', name: 'Det lille hus', bed: '5', description: 'Fantastisk selvstående bygning med god ventilation', price: '200' },
            { id: '3', name: 'rum', bed: '1 dobbeltseng', description: 'Lyst og godt værelse med udsigt over (indsæt noget smukt)', price: '42' }
        ]};
    }



    
    render(){
        return (
            <div>
                <p>fdffd</p>
            </div>
        )
    }
}

