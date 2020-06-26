import React, { Component } from 'react';
import {Timetable, Descbox} from '../components/Timesheet/TimeTable';

class Timesheets extends Component {
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
                <div>

                </div>     
                <div
                    style={{
                    display: "flex",
                    justifyContent: "flex-center",
                    alignItems: "flex-center",
                    paddingTop: "0.5%",
                    }}
                >
                    <Timetable timelogs={timelogs}></Timetable>
                    <Descbox workdesc={workdesc.desc}></Descbox>
                </div>
            </>
        );
    };
}

export default Timesheets