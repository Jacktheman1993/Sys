import React, { Component } from 'react';
import { Text, View } from 'react-native';
const URL = "10.50.138.79:8084/jwtbackend"
function Info(props) {
    const { info } = props;
  
    return (
        
      <View>
        <Text>Info om Star Wars Personer</Text>
        {info}
      </View>
    )
  }



export default class HelloWorldApp extends Component {
    constructor(props) {
        super(props);
        this.state = { info: []}
      }
      async componentDidMount() {
        try {
          const info = await getInfo();
          this.setState({ info: info.results });
          console.log(info)   
        } catch (err) {
          console.log("STATE :" + err)
        }
    
      }
    makeOptions(method) {
        var opts = {
          method: method,
          headers: {
            "Content-type": "application/json",
            'Accept': 'application/json',
          }
        }
       
        return opts;
      }
    
    getInfo = () => {
        const options = this.makeOptions("GET");
       return fetch(URL + "/api/info/swapi", options).then(handleHttpErrors);
     } 

    render() {
    return (
      <View>
        {this.state.info}
          
      </View>
    );
  }
}