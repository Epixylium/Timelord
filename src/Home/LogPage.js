import React, { Component } from 'react';
import Timetable from '../components/Timesheet/TimeTable';
import DateTimePicker from 'react-datetime-picker';
import Moment from 'react-moment';
import faker, { fake } from 'faker';
import { Link } from 'react-router-dom';
import { getTSheets } from '../components/Timesheet/helpers';
import { getClients } from '../components/ClientPages/helpers';

class LogPage extends Component {
  state = {
    selectedCompany: 'company1',
    clients:[],
    timelogs: []
  }

  componentDidMount() {
    const that = this;
    getTSheets().then(timelogs => {
      that.setState({timelogs: timelogs});
    })
    getClients().then(clients => {
      that.setState({clients: clients});
    })
  }

  OnSetCompany(e) {
    this.setState({ selectedCompany: e.target.value })
  }

  render() {
    return(
      <div className="row gutters-sm">
        <div className="col-12 col-lg-9 col-xl-12">
          <div className="portlet">
            <div className="portlet-header border-bottom">
              <div className="float-end">
                <Link to='/TimelogCreator' className="btn btn-sm btn-primary btn-pill px-2 py-1 fs--15 mt--n3">
                  New Timelog
                </Link>
                </div>
            </div>
            <div className="portlet-body pt-0">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <select style={{fontSizeAdjust: "100%"}} className="form-control col-3" onChange={(e) => { this.OnSetCompany(e) }} value={this.state.selectedCompany}>
                  {this.state.clients.map(client => {
                    return <option value={client.id}>{client.name}</option>
                  })}
                </select>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Timetable timelogs={this.state.timelogs} selectedCompany={this.state.selectedCompany}></Timetable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default LogPage