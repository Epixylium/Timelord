import React, { Component } from 'react';
import Timetable from '../components/Timesheet/TimeTable';

class LogPage extends Component {
    state = {
      buttonState: "start",
      timelogs: {
        company1: [{
          start:new Date(),
          finish:new Date(),
          desc:"work",
        }],

        company2: [{
          start:new Date(),
          finish:new Date(),
          desc:"more work",
        }],
                  
        company3: [{
          start:new Date(),
          finish:new Date(),
          desc:"even more work",
        }],

        company4: [{
          start:new Date(),
          finish:new Date(),
          desc:"even more work still",
        }],
                
        company5: [{
          start:new Date(),
          finish:new Date(),
          desc:"wow thats a lot of work",
        }],

        company6: [{
          start:new Date(),
          finish:new Date(),
          desc:"work is my life",
        }],
      
        company7: [{
          start:new Date(),
          finish:new Date(),
          desc:"work is a thing i do",
        }],

        company8: [{
          start:new Date(),
          finish:new Date(),
          desc:"woooooorrrrrk",
        }],
      }

    }

    changeButtonState() {
      if(this.state.buttonState = "start") {
        const timelogs = {...this.state.timelogs};
        const company = timelogs['company1'];

        company.push(this.createTimeLog());

        timelogs['company1'] = company;

        this.setState({buttonState: "finish", timelogs: timelogs }); 
      }
    }

    createTimeLog() {
      return {
        start:new Date(),
        finish:new Date(),
        desc:"work is a thing i do",
      }
    }

    render() {
        return(
            <> 
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Timetable timelogs={this.state.timelogs}></Timetable>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button onClick={this.changeButtonState.bind(this)}>Start/Stop Time</button>
                </div>
            </>
        );
    };
}

export default LogPage