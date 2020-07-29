import React, { Component } from 'react';
import Timetable from '../components/Timesheet/TimeTable';

class LogPage extends Component {
    state = {
      buttonState: 'start'
    }

   // changeButtonState() {
     // if(buttonState = "start") {
     //   this.setState.buttonState = "finish"
    //  }
   // }

    render() {
        const timelogs = {
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
                desc:"work",
              }],

              company4: [{
                start:new Date(),
                finish:new Date(),
                desc:"work",
              }],
                      
              company5: [{
                start:new Date(),
                finish:new Date(),
                desc:"work",
              }],

              company6: [{
                start:new Date(),
                finish:new Date(),
                desc:"work",
              }],
            
              company7: [{
                start:new Date(),
                finish:new Date(),
                desc:"work",
              }],

              company8: [{
                start:new Date(),
                finish:new Date(),
                desc:"work",
              }],
            };

        return(
            <> 
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Timetable timelogs={timelogs}></Timetable>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button onClick={this.changeButtonState}>Start/Stop Time</button>
                </div>
            </>
        );
    };
}

export default LogPage