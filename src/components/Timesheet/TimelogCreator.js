import React, { Component } from 'react';
import { saveTSheet } from './helpers';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { getClients } from '../ClientPages/helpers';

class TimelogCreator extends Component {
    state = {
        TStart: "",
        TEnd: "",
        TDesc: "",
        buttonstate: "start",
        clients: [],
        selectedCompany: "company1",
        currentTime: ""
    }

    componentDidMount() {
        setInterval(
            () => this.setState({ currentTime: new Date() }),
            1000
        );
        const that = this;
        getClients().then(clients => {
        that.setState({clients: clients});
        })
    }



    buttonStateChange() {
        if(this.state.buttonstate = "start") {
            this.setState({buttonstate: "stop", TStart: this.state.currentTime});
        } else {
            if(this.state.buttonstate = "stop") {
                this.setState({buttonstate: "start", TEnd: this.state.currentTime});
            };
        };
    };

    onChange(event) {
        const name = event.target.name;
        const newValue = {};

        newValue[name] = event.target.value;

        this.setState(newValue);
    }


    onSubmit(event) {
        event.preventDefault();
        saveTSheet(this.state.TStart, this.state.TEnd, this.state.TDesc);
        this.props.history.push('/Timesheets')
    }

    OnSetCompany(e) {
        this.setState({ selectedCompany: e.target.value })
      }

    render() {
        return (
            <form className="form-horizontal" style={{ textSizeAdjust: "auto" , paddingLeft: "400px", paddingRight: "640px"}}>
                <div className="form-group">
                    <select style={{fontSizeAdjust: "100%"}} className="form-control col-3" onChange={(e) => { this.OnSetCompany(e) }} value={this.state.selectedCompany}>
                        {this.state.clients.map(client => {
                            return <option value={client.id}>{client.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <button onClick={ (event) => { this.buttonStateChange()}}>Start/Stop</button>
                </div>
                <div className="form-group">
                    <textarea>{this.state.TStart}</textarea>
                </div>
                <div className="form-group">
                    <textarea>{this.state.TEnd}</textarea>
                </div>
                <div className="form-group">
                    <label style={{textSizeAdjust: "auto"}} className="control-label" htmlFor="TDesc">Timesheet Description:</label>
                    <input onChange={ (event) => { this.onChange(event) }} className="form-control" type="text" id="TDesc" name="TDesc"></input>
                </div>
                <div className="form-group">
                    <input onClick={ (event) => { this.onSubmit(event) }} type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default TimelogCreator;