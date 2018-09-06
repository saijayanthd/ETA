import React from 'react'; 
import ReactDom from 'react-dom';
import $ from 'jquery';
import {Header,Footer} from './header_fotter.js';

export class Uicourses extends React.Component{
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
        const{isLoaded,crsData} = this.state;
        if (!isLoaded) {
            return <div> <Header/> Loading.. <Footer/> </div>;

        } else {
            return(
                <div>
                    <Header/>
                    <table border = {1}>
                    <tbody>
                    <tr><th>Ui Courses</th></tr>
                    {crsData.uicourses.map(function(details){
                        return(<tr><td>{details.Name}:{details.description}</td></tr>)
                    })}
                    </tbody>
                    </table>
                    <Footer/>
                </div>
            )
        }
    }
}