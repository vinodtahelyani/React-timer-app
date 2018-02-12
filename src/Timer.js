import React, {Component} from 'react';
var yellow =   require('./yellow.jpg');
    
class Timer extends Component {
    componentDidMount(){
        setInterval(this.ticker,1000);
    }
    constructor(props) {
        super(props);
        this.state = {
            clock:0
        }
        this.ticker = this.ticker.bind(this);
    }

    ticker() {
        this.setState({clock: Date.now() - this.props.start});
    }
    render() {
        var sec = Math.round(this.state.clock/1000);
        var min = Math.floor(sec/60);
        sec=sec%60 + '';
        var hour = Math.floor(min/60);
        min=min%60 + '';
        var day = Math.floor(hour/24) + '';
        hour=hour%24 + '';
        if(sec.length === 1)sec='0'+sec;
        if(min.length === 1)min='0'+min;
        if(hour.length === 1)hour='0'+hour;
        if(day.length === 1)day='0'+day;        
        return (
            <div className="timer-box">
                <img src={yellow} /> 
                <ul>
                    <li>{day}<br/><span>Days</span></li>
                    <li>{hour}<br/><span>Hours</span></li>
                    <li>{min}<br/><span>Minutes</span></li>
                    <li>{sec}<br/><span>Seconds</span></li>
                    
                </ul>
            </div>

        );
    }
};

export default Timer;