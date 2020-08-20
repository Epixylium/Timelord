import React, { Component } from 'react';
import Clock from 'react-clock';
import Moment from 'react-moment';

class HomePage extends Component {
    dateTime() {
        var that = this;
        console.log("button clicked")
        var date = new Date();
        that.setState({ currentTime: date });
    }

    state = {
        date: new Date(),
        currentTime: new Date()
    }

    timerInterval = null;

    componentDidMount() {
        this.timerInterval = setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }
    
    render() {
        return(
            <>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "0.25%",
                }}
            >
                <Clock size={302}
                    value={ this.state.date }
                />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "1%",
                }}
            >
                <button style={{width: 216}} onClick={ this.dateTime.bind(this) }>Current Time</button>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "0.5%",
                }}
            >
                <Moment format="DD/MM/YYYY hh:mm:ss">{ this.state.currentTime }</Moment>
            </div>
            </>
        )
    }
}

export default HomePage;