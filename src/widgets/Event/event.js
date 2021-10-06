import React,{Component} from 'react'
import {Container, Row,Col} from 'react-bootstrap';
import './style.css';

class UpcomingEvent extends Component {

    state={
        days:null,
        hours:null,
        minutes:null,
        seconds:null
    }

    // constructor(){
    //     super();
    //     // this.handleTimeLeft();
    //     console.log(this.props)
    // }

    componentDidMount(){
        console.log(this.props)
        setInterval(
            this.handleTimeLeft,
            1000
        )
        
    }


    handleTimeLeft = ()=>{
        let due_dateTime = new Date(this.props.date);
        // Get the remaining time in seconds
        due_dateTime = (Date.parse(due_dateTime) / 1000); 

        let now_dateTime = new Date();
        now_dateTime = (Date.parse(now_dateTime) / 1000)

        let timeLeft = due_dateTime - now_dateTime;

        let days = Math.floor(timeLeft/86400);
        //let days_rem = (timeLeft - (days * 86400))
        let hours = Math.floor( (timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        //let minures_rem = rem - (hours * 3600)
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) - (minutes *60));

        // console.log(this.props)

        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }

    render(){
        console.log(this.state)
        return (

        <div className="countdown">
            <Container>
                    <Row className="justify-content-xl-center justify-content-lg-center justify-content-center">
                        <Col xl={6} lg={6} className="d-xl-flex d-lg-block align-items-center">
                            <div className="countdown_title">
                                <h2>Upcoming Episode</h2>
                            </div>
                        </Col>

                        <Col xl={6} lg={6}>
                            <h4>{this.props.date}</h4>
                            <div className="part_countdown">
                                <div className="timer">
                                    
                                    <div className="single-count">
                                        <span className="day">
                                            {this.state.days < 10 ? 
                                            `0${this.state.days}` :
                                            this.state.days}
                                        </span>
                                        
                                        <span className="title">
                                            day{this.state.days > 1 ? 's' : null}
                                        </span>
                                    </div>

                                    <div className="single-count">
                                        <span className="hour">
                                            {this.state.hours < 10 ? 
                                            `0${this.state.hours}` :
                                            this.state.hours}
                                        </span>
                                        
                                        <span className="title">hour{this.state.hours > 1 ? 's' : null}</span>
                                    </div>

                                    <div className="single-count">
                                        <span className="minute">
                                            {this.state.minutes < 10 ? 
                                            `0${this.state.minutes}` :
                                            this.state.minutes}
                                        </span>
                                        
                                        <span className="title">minute{this.state.minutes > 1 ? 's' : null}</span>
                                    </div>

                                    <div className="single-count">
                                        <span className="second">
                                                {this.state.seconds < 10 ? 
                                            `0${this.state.seconds}` :
                                            this.state.seconds}
                                        </span>
                                        
                                        <span className="title">second{this.state.seconds > 1 ? 's' : null}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                   
                    </Row>
                </Container>
            
        </div>
    )
    }
    
}

export default UpcomingEvent;
