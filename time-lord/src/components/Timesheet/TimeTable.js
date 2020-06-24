import React from 'react';
import Timesheet from './Timesheet';
import DescriptionBox from './Timesheet'
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

function Timetable(props) {
    const timelogs_html = [];
    for(let i in props.timelogs) {
      const timelog = props.timelogs[i];
      const timelog_html =  <Timesheet timelog={timelog}/>;

      timelogs_html.push(timelog_html);
    }

    return (
      <Styles>
        <table>
          <thead>
            <tr>
              <th colSpan='3'>Timesheet Collection</th>
            </tr>
            <tr>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Descripton</th>
            </tr>
          </thead>
          <tbody>
            {timelogs_html}
          </tbody>
        </table>
      </Styles>
    )
}

function Descbox(props) {
    const workdesc_html = [];
    for(let i in props.workdesc) {
      const workdescription = props.workdesc[i];
      const workdescription_html =  <DescriptionBox workdescription={workdescription}/>;

      workdesc_html.push(workdescription_html);
  }
    return (
      <Styles>
        <table>
          <thead>
            <tr>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {workdesc_html}
          </tbody>
        </table>
      </Styles>
    )
}

export {Timetable, Descbox};
