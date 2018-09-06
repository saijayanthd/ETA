import React from 'react'; 
import ReactDom from 'react-dom';
import $ from 'jquery';
import Select from 'react-select';
import {Header,Footer} from './header_fotter.js';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
export class SignUp extends React.Component { 

                constructor(props) {
                    super(props);
                    this.display = this.display.bind(this);
                    this.state = {data:{ uname: '' ,password:''}};      
                }

                 display(e){
                        this.props.history.push('/login');
                }
              render(){
                        return (
                                <div align="center">
                                    <h1 > ETA UI </h1>
                                    <p>Sign up to start learning</p>
                                <form>
                                    <input type='text' name = 'uname' ref = 'uname' placeholder = 'Username' /><br/><br/>
                                    <input type = 'password' name = 'password' ref = 'pass' placeholder = 'password' /><br/><br/>
                                    <button>SignUp</button><br/><br/>
                                </form>
                                <p>-------------or----------</p>
                                <p>Have an account ? </p> <Link to='/login'>Login</Link>
                                
                                </div>
                        )}
}
export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {crsData:[]};      
    }
    componentDidMount(){
        this.setState({ crsData : $.parseJSON($.ajax ({
				                       url: '/schedule.json',
				                       async: false,
                                        dataType: 'json'}). responseText),
                                        isLoaded: true
			                           });
    }
    render(){
        const {  isLoaded } = this.state;
        var users = this.state.crsData;
        
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                <Header />
                <div float = "left">
                    <Dropdown title="Select location" list={users.dropdown} details = {users.details}/>
                </div>
                <div clear = "both" float="right">
                    <p>Upcoming session details</p>
                    <table border = {1}>
                    <tbody>
                    <tr><th>Course</th>
                    <th>Date</th></tr>
                    {users.course.map(function(userDetails){
                    return(<tr>
                                <td>{userDetails.name}</td>
                                <td>{userDetails.date}</td>
                            </tr> );})}
                    </tbody>
                    </table>
                </div>
                <Footer/>
                </div>
            )
        }
    }
}
export class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.toggleList = this.toggleList.bind(this);
        this.state = {
            selectedOption: '',
        }
    }
    toggleList(e){
        if(e.target.value!='NA'){
            this.setState({
                selectedOption : e.target.value
            })
        }
    }
    render(){
        var self = this;
        const{list,details} = this.props;
        const{selectedOption} = this.state;
        if (!list) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <p>Plan your session</p>
                <select title = 'select' onChange = {this.toggleList} value={this.state.selectedOption}>
                    {list.map(function(li){
                       return(<option value = {li.value}>{li.label}</option>)
                    })}
                </select>
                <Dropdowninfo topic={this.state.selectedOption} details={details}/>
                </div>
            )
        }
    }
}
export class Dropdowninfo extends React.Component{
    render(){
        var self = this;
        const{topic,details} = this.props;
        if (!topic) {
            return <div>Please select from the dropdown</div>;
        } else {
            return(
                <div>
                    <table border = {1}>
                    <tbody>
                    <tr><th>Scehduled Details</th></tr>
                    <tr><td>Educator:{details[topic].educator}</td></tr>
                    <tr><td>Mode:{details[topic].mode}</td></tr>
                    <tr><td><button>Register</button></td></tr>
                    </tbody>
                    </table>
                </div>
            )
        }
    }
}

