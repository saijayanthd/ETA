import React from 'react'; 
import ReactDom from 'react-dom';
import $ from 'jquery';
import Select from 'react-select';


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
        var counter2;
        if(!counter){
            counter2 = 0;
        }
        if(!isLoaded){
            return(
            <div>Loading....</div>)
        }else{
            return(
                <div className='quizquestion'>
                    <p>{questions.ques[counter2].qText}</p>
                    {questions.ques[counter2].options.map(function(qu){
                                return(
                                    <div>
                                    <button value = {qu} onClick={self.toggleList} >{qu}</button><br/><br/>
                                    </div>
                                )
                            })}
                            <Check ans={self.state.correct} details={questions} stage={counter2}/>
                </div>
            )
        }
    }
}

export class Check extends React.Component{
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
        this.state = {count:''};      
    }
    navigate(e){
        alert(this.props.stage);
        this.props.history.push('/quiz/'+this.props.stage+1);
    }
    render(){
        const{ans,details,stage} = this.props;
        if(!ans){
            return(
            <div><button disabled={!ans} className='wrongButton'>continue</button></div>)
        }else{
            
            return(
                <div>
                    <form>
                        <button onClick = {this.navigate}>continue</button>
                    </form>
                </div>
            )
        }
    }
}