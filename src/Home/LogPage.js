import React, { Component } from 'react';
import Timetable from '../components/Timesheet/TimeTable';
import Select from 'react-dropdown-select';

class LogPage extends Component {
    render() {
        const timelogs = [
            {
              start:new Date(),
              finish:new Date(),
              desc:"work",
            },
            {
              start:new Date(),
              finish:new Date(),
              desc:"work",
            },
            {
              start:new Date(),
              finish:new Date(),
              desc:"work",
            },
            {
              start:new Date(),
              finish:new Date(),
              desc:"work",
            },
            {
              start:new Date(),
              finish:new Date(),
              desc:"work",
            },
            {
              start:new Date(),
              finish:new Date(),
              desc:"work",
            },
            {
              start:new Date(),
              finish:new Date(),
              desc:"work",
            },
            {
              start:new Date(),
              finish:new Date(),
              desc:"work",
            },
          ];

        return(
            <> 
                <div
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    }}
                >
                    <Timetable timelogs={timelogs}></Timetable>
                </div>
            </>
        );
    };
}

export default LogPage