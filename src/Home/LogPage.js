import React, { Component } from 'react';
import Timetable from '../components/Timesheet/TimeTable';
import DateTimePicker from 'react-datetime-picker';
import Moment from 'react-moment';
import faker, { fake } from 'faker';

class LogPage extends Component {
  state = {
    selectedCompany: 'company1',
    ssbuttonState: "start",
    clientbuttonState: "state1",
    clients:[],
    timelogs: {}
  }

  componentDidMount() {
    const clients = [];
    for(let i = 0; i < 30; i++) {
      clients.push(this.addNewClient());
    }

    const timelogs = {}

    for(let i in clients) {
      const client = clients[i];

      timelogs[client.id] = [];

      for(let i = 0; i < 5; i++) {
        timelogs[client.id].push(this.addTimeLog());
      }
    }

    this.setState({clients: clients, selectedCompany:clients[0].id, timelogs:timelogs});

    
  }

  OnSetCompany(e) {
    this.setState({ selectedCompany: e.target.value })
  }

  currentTime() {
    var timeStart = <Moment format="DD/MM/YYYY HH:MM" interval={1000}/>
    var timeFinish = <Moment format="DD/MM/YYYY HH:MM" interval={1000}/>
  }

  createTimelog() {
    if(this.state.ccbuttonState = "start") {
      const timelogs = {...this.state.timelogs};
      const company = this.addTimeLog();

      company.push(this.addTimeLog);

      timelogs[company.id] = company;

      this.setState({ccbuttonState: "finish", timelogs: timelogs }); 
    }
  }

  addTimeLog() {
    var startTime = faker.date.recent();
    var finishTime = faker.date.recent();
    var description = faker.lorem.sentence();
    // var startTime = this.currentTime.timeStart; 
    // var finishTime = this.currentTime.timeFinish;
    // var description = window.prompt("Enter Description: ");
    return {
      start:startTime,
      finish:finishTime,
      desc:description,
    }
  }

  addNewClient() {
    var clientID = faker.finance.bic();
    var clientName = faker.company.companyName();
    var clientAddress = faker.address.streetName();
    // var clientPostcode = window.prompt("Enter Client Postcode/Zipcode: ");
    // var clientPhone = window.prompt("Enter Client Contact Number: ");
    return {
      id: clientID,
      name: clientName,
      address: clientAddress
    }
  }

  render() {
    return(
      <> 
        <div style={{ display: "flex", justifyContent: "center" }}>
          <select  onChange={(e) => { this.OnSetCompany(e) }} value={this.state.selectedCompany}>
            {this.state.clients.map(client => {
              return <option value={client.id}>{client.name}</option>
            })}
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Timetable timelogs={this.state.timelogs} selectedCompany={this.state.selectedCompany}></Timetable>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={this.createTimelog.bind(this)}>New Timelog</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "8px" }}>
          <button onClick={this.addNewClient.bind(this)}>New Client</button>
        </div>
      </>
    );
  };
}

export default LogPage