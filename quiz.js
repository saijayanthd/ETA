import React from 'react'; 
import ReactDom from 'react-dom';
import $ from 'jquery';
import Select from 'react-select';
const counter1 = 0 ;

export class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.toggleList = this.toggleList.bind(this);
        this.state = {questions:[],ans:''};      
    }
    componentDidMount(){
        this.setState({
            questions:$.parseJSON($.ajax({
                url:'/schedule.json',
                async: false,
                dataType: 'json'
            }).responseText),
            isLoaded:true
        })
    }
    toggleList(e){
        if(this.state.questions.ques[0].ans==e.target.value ){
            this.setState({questions:$.parseJSON($.ajax({
                url:'/schedule.json',
                async: false,
                dataType: 'json'
            }).responseText),
            isLoaded:true,
        correct:true})
        }else{
            this.setState({questions:$.parseJSON($.ajax({
                url:'/schedule.json',
                async: false,
                dataType: 'json'
            }).responseText),
            isLoaded:true,
        correct:false})
        }
        
    }
    render(){
        var self = this;
        const{questions,isLoaded} = this.state;
        const{counter} = this.props
        if(!counter){
            counter = 0;
        }
        if(!isLoaded){
            return(
            <div>Loading....</div>)
        }else{
            return(
                questions.ques.map(function(que){
                    return(
                        <div class = 'quizquestion' align="left">
                            <p>{que.qText}</p>
                            <div>
                            {que.options.map(function(qu){
                                return(
                                    <div>
                                    <button value = {qu} onClick={self.toggleList} >{qu}</button><br/><br/>
                                    </div>
                                )
                            })}
                            <Check ans={self.state.correct} details={questions}/>
                            </div>
                        </div>
                    )
                })
            )
        }
    }
}

export class Check extends React.Component{
    constructor(props) {
        super(props);
        this.state = {questions:[],ans:''};      
    }
    render(){
        var self = this;
        const{ans,details} = this.props;
        console.log(ans)
        if(!ans){
            return(
            <div><button disabled={!ans} class='wrongButton'>continue</button></div>)
        }else{
            counter = counter+1
            return(
                <div><button onClick = {}>continue</button></div>
            )
        }
    }
}