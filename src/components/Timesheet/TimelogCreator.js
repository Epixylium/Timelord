import React, { Component } from 'react';
import { saveTSheet } from './helpers';
import { getClients } from '../ClientPages/helpers';
import Moment from 'react-moment';
import { toast } from 'react-toastify';

class TimelogCreator extends Component {
    state = {
        TStart: null,
        TEnd: null,
        TDesc: "",
        buttonstate: "start",
        clients: [],
        selectedCompany: null,
        currentTime: ""
    }

    componentDidMount() {
        const that = this;
        getClients().then(clients => {
            that.setState({clients: clients, selectedCompany:clients[0].id});
        });
    };

    buttonStateChange() {
        if(this.state.buttonstate == "stop") {

            this.setState({buttonstate: "start", TEnd: new Date()});
        }
        if(this.state.buttonstate == "start") {
            this.setState({buttonstate: "stop", TStart: new Date()});
        }        
    };

    onChange(event) {
        const name = event.target.name;
        const newValue = {};

        newValue[name] = event.target.value;

        this.setState(newValue);
    }

    validateTimesheet() {
        if(!this.state.TStart)    {
            toast("You have not started the task first!", { type: toast.TYPE.ERROR }); 

            return false;
        }

        if(!this.state.TEnd)    {
            toast("You have not stopped the task first!", { type: toast.TYPE.ERROR }); 

            return false;
        }

        if(this.state.TDesc.length == 0)    {
            toast("Please fill in the description box before submitting your timesheet", { type: toast.TYPE.ERROR }); 

            return false;
        }

        return true;
    }


    onSubmit(event) {
        event.preventDefault();

        if(this.validateTimesheet() == true) {
            saveTSheet(this.state.selectedCompany, this.state.TStart, this.state.TEnd, this.state.TDesc);
            this.props.history.push('/Timesheets')
        }         
    }

    OnSetCompany(e) {
        this.setState({ selectedCompany: e.target.value })
      }

    render() {
        let startTime = <strong>Press Start to begin</strong>;
        if(this.state.TStart) {
            startTime = <Moment format="DD/MM/YYYY hh:mm:ss">{this.state.TStart}</Moment>;
        }

        let endTime = null;
        if(this.state.TEnd) {
            endTime = <Moment format="DD/MM/YYYY hh:mm:ss">{this.state.TEnd}</Moment>;
        }

        return (
            <form className="form-horizontal" style={{ textSizeAdjust: "auto" , paddingLeft: "400px", paddingRight: "640px"}}>
                <div className="form-group">
                    <select style={{fontSizeAdjust: "100%"}} className="form-control col-3" onChange={(e) => { this.OnSetCompany(e) }} value={this.state.selectedCompany}>
                        {this.state.clients.map(client => {
                            return <option key={client.id} value={client.id}>{client.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <button className="form-control" onClick={ (event) => {this.buttonStateChange()}}>Start/Stop</button>
                </div>
                <div className="form-group">
                    Start: {startTime}
                </div>
                <div className="form-group">
                    End: {endTime}
                </div>
                <div className="form-group">
                    <label style={{textSizeAdjust: "auto"}} className="control-label" htmlFor="TDesc">Timesheet Description:</label>
                    <input onChange={ (event) => { this.onChange(event) }} className="form-control" type="text" id="TDesc" name="TDesc"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" onClick={ (event) => { this.onSubmit(event) }} type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default TimelogCreator;