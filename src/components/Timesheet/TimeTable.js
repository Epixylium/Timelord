import React, { Component } from 'react';
import Timesheet from './Timesheet';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


class Timetable extends Component {
  render() {
    const timelogs_html = [];

    for(let i in this.props.timelogs[this.props.selectedCompany]) {
      const timelog = this.props.timelogs[this.props.selectedCompany][i];
      
      const timelog_html =  <Timesheet timelog={timelog}/>;

      timelogs_html.push(timelog_html);
    }

    return (
      <div className="table-responsive">
        <table className="table table-align-middle border-bottom mb-6">
          <thead>
            <tr>
              <th style={{textSizeAdjust: "auto"}} colSpan='3'>Timesheet Collection</th>
            </tr>
            <tr>
              <th style={{textSizeAdjust: "auto"}}>Start Time</th>
              <th style={{textSizeAdjust: "auto"}}>End Time</th>
              <th style={{textSizeAdjust: "auto"}}>Description</th>
            </tr>
          </thead>
          <tbody>
            {timelogs_html}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Timetable