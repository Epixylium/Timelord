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
  state = {
    selectedCompany: 'company1'
  }

  OnSetCompany(e) {
    this.setState({ selectedCompany: e.target.value })
  }

  render() {
    const timelogs_html = [];

    for(let i in this.props.timelogs[this.state.selectedCompany]) {
      const timelog = this.props.timelogs[this.state.selectedCompany][i];
      
      const timelog_html =  <Timesheet timelog={timelog}/>;

      timelogs_html.push(timelog_html);
    }

    return (
      <Styles>
        <table style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th colSpan='3'>Timesheet Collection
                <select onChange={(e) => { this.OnSetCompany(e) }} style={{ marginLeft: "5px" }}>
                  <option value="company1">Company 1</option>
                  <option value="company2">Company 2</option>
                  <option value="company3">Company 3</option>
                  <option value="company4">Company 4</option>
                  <option value="company5">Company 5</option>
                  <option value="company6">Company 6</option>
                  <option value="company7">Company 7</option>
                  <option value="company8">Company 8</option>
                </select>
              </th>
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