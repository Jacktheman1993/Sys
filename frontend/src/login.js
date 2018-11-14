import React, { Component } from "react"
import facade from "./apiFacade";
import Nav from './Nav';
class LogIn extends Component {
 constructor(props) {
   super(props);
   this.state = { username: "user", password: "test" }
 }
 login = (evt) => {
   evt.preventDefault();
   this.props.login(this.state.username, this.state.password);
 }
 onChange = (evt) => {
   this.setState({[evt.target.id]: evt.target.value})
 }
 render() {
   return (
     <div>
       <h2>Login</h2>
       <form onSubmit={this.login} onChange={this.onChange} >
         <input placeholder="User Name" id="username"/>
         <input placeholder="Password" id="password" />
         <button>Login</button>
         <h2>Bare tryk på Login</h2>
       </form>
     </div>
   )
 }
}
class LoggedIn extends Component {
 constructor(props) {
   super(props);
   this.state= {dataFromServer: "Fetching!!"};
 }
 componentDidMount(){
  facade.fetchData().then(res=> this.setState({dataFromServer: res}));
 }
 render() {
   return (
     <div>
    <Nav />
       <h3>{this.state.dataFromServer}</h3>
     </div>
   )
 }
}
class App extends Component {
 constructor(props) {
   super(props);
   this.state = { loggedIn: false }
 }
 logout = () => {
  facade.logout();
  this.setState({ loggedIn: false });
 }
 login = (user, pass) => {
  facade.login(user,pass)
  .then(res =>this.setState({ loggedIn: true }));
 }
 render() {
   return (
     <div>
       {!this.state.loggedIn ? (<LogIn login={this.login} />) :
         ( <div>
             <LoggedIn/>
             <button onClick={this.logout}>Logout</button>
           </div>)}
     </div>
   )
 }
}
export default App;
