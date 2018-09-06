import React from 'react'; 
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './styles.css';

export class Header extends React.Component { 
    render(){
            return (
                <header>
                    <div align="center">
                        <h3 align = "center">
                            ETA UI
                        </h3>
                        <Link to="/home">Home</Link>
                        <a> | </a>
                        <Link to="/aboutus">About Us</Link>
                        <a> | </a>
                        <Link to="/details">uicourses</Link>
                        <a> | </a>
                        <Link to = "/trainingschedule">Training Schedule</Link>
                        <a> | </a>
                        <Link to = "/quiz">Quiz</Link>
                    </div>
                    </header>
            )}
}

export class Footer extends React.Component {
    render(){
            return (
                <footer clear="both">
                    <div align="center" >
                        <Link to="/digitaltutor">DigitalTutor</Link>
                        <a> | </a>
                        <Link to="/ilearn">iLearn</Link>
                        <a> | </a>
                        <Link to="/kshop">K Shop</Link>
                        <p>&#169; 2016 ETA | IT & Markup, Infosys Limited. All rights reserved</p>
                    </div>
                    </footer>
            )}
}