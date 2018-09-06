import React from 'react'; 
import ReactDom from 'react-dom';
import {SignUp,Home} from './App.js';
export class Login extends React.Component { 

                constructor(props) {
                    super(props);
                    this.display = this.display.bind(this);
                    this.start = this.start.bind(this);
                    this.state = {data:{ uname: '' ,password:''}};      
                }

                display(e){
                    if(this.state.data.uname == 'admin' && this.state.data.password == 'admin'){
                        this.props.history.push('/home');
                    }else{
                        alert('Fail')
                    }
                }
                start(e){
                    e.preventDefault();
                    var name = e.target.name;
                    var value = e.target.value;
                    this.state.data[name] = value;
                    return this.setState({data:this.state.data});
                }
              render(){
                        return (
                                <div align="center">
                                    <h1 > ETA UI </h1>
                                    <p>Login</p>
                                <form onSubmit = {this.display}>
                                    <input type='text' onChange = {this.start} name = 'uname' ref = 'uname' placeholder = 'Username' /><br/><br/>
                                    <input type = 'password' onChange = {this.start} name = 'password' ref = 'pass' placeholder = 'password' /><br/><br/>
                                    <button>Submit</button>
                                     
                                </form>
                                </div>
                        )}
}