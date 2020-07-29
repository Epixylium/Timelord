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
                desc:"work is a like a skateboard... i just cant stay on it xD",
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