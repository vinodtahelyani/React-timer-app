import React, {Component} from 'react';

    
    
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
        //sec = new Date(sec);
        
        return (
            <div>
                <p>You have been on this site</p><br />
                <span>{sec}</span>
                <p></p>
            </div>
        );
    }
};

export default Timer;