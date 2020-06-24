import React from 'react';
import Clock from 'react-clock';
import Moment from 'react-moment';
import './App.css';
import {Timetable, Descbox} from './components/Timesheet/TimeTable';

class App extends React.Component {
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
        start:new Date(),
        finish:new Date(),
      },
      {
        start:new Date(),
        finish:new Date(),
      },
      {
        start:new Date(),
        finish:new Date(),
      },
      {
        start:new Date(),
        finish:new Date(),
      },
      {
        start:new Date(),
        finish:new Date(),
      },
      {
        start:new Date(),
        finish:new Date(),
      },
      {
        start:new Date(),
        finish:new Date(),
      },
      {
        start:new Date(),
        finish:new Date(),
      },
    ];

    const workdesc = [
      {
        desc:"work",
      },
      {
        desc:"also this work",
      },
      {
        desc:"this work also",
      },
      {
        desc:"some more work",
      },
      {
        desc:"work",
      },
      {
        desc:"also this work",
      },
      {
        desc:"this work also",
      },
      {
        desc:"some more work",
      },
    ];

    

    
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
          <Moment format="DD/MM/YYYY hh:mm:ss">{ this.state.currentTime }</Moment>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "0.5%",
          }}
        >
          <Timetable timelogs={timelogs}></Timetable>
          <Descbox workdesc={workdesc.desc}></Descbox>
        </div>
      </>
    );
  }
}

export default App