import React from 'react';
import Clock from 'react-clock';
import Moment from 'react-moment';
import './App.css';
import Timesheet from './components/Timesheet/Timesheet';

export default class App extends React.Component {
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

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }
  render() {

    const timelogs = [
      {
        desc:"work",
        start:new Date(),
        finish:new Date(),
      },
      {
        desc:"also this work",
        start:new Date(),
        finish:new Date(),
      },
      {
        desc:"this work also",
        start:new Date(),
        finish:new Date(),
      },
      {
        desc:"some more work",
        start:new Date(),
        finish:new Date(),
      },
    ];

    const timelogs_html = [];
    for(let i in timelogs) {
      const timelog = timelogs[i];
      const timelog_html = <Timesheet timelog={timelog} />;

      timelogs_html.push(timelog_html);
    }

    
    return(
      <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
          fontWeight: "bold",
          height: 60,
        }}   
      >
        <p>T i m e L o r d</p>
      </div>
      <div 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1%"
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
        <Moment format="DD/MM/YYYY HH:MM">{ this.state.currentTime }</Moment>
      </div>
      <div>
        {timelogs_html}
      </div>
      </>
    );
  }
}