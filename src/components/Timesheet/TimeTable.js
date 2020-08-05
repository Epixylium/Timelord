import React, { Component } from 'react';
import Timesheet from './Timesheet';
import styled from 'styled-components';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

class Timetable extends Component {
  render() {
    const timelogs_html = [];

    for(let i in this.props.timelogs[this.props.selectedCompany]) {
      const timelog = this.props.timelogs[this.props.selectedCompany][i];
      
      const timelog_html =  <Timesheet timelog={timelog}/>;

      timelogs_html.push(timelog_html);
    }

    return (
      <Styles>
        <table style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th colSpan='3'>Timesheet Collection</th>
            </tr>
            <tr>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {timelogs_html}
          </tbody>
        </table>
      </Styles>
    )
  }
}

export default Timetable