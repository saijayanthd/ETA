import React from 'react';
import ReactDOM from 'react-dom'; 
import {SignUp,Home} from './App.js';
import {Uicourses} from './uicourses.js';
import {Login} from './Login.js';
import {Quiz} from './quiz.js';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
   ReactDOM.render((<Router>
    <div>
        <Route exact path = "/" component = {SignUp} />
        <Route  path = "/login" component = {Login}/>
        <Route  path = "/home" component = {Home}/>
        <Route  path = "/details" component = {Uicourses}/>
        <Route  path = "/quiz" component = {Quiz}/>
        <Route  path = "/quiz/:counter" component = {Quiz}/>
        </div>
        </Router>),document.getElementById('app'))  