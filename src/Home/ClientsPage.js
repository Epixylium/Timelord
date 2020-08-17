import React, { Component } from 'react';
import {saveClient} from './helpers';

class ClientsPage extends Component {
    state = {
        Cid: "",
        Cname: "",
        Caddress: "",
    }

    onChange(event) {
        const name = event.target.name;
        const newValue = {};

        newValue[name] = event.target.value;

        this.setState(newValue);
    }

    onSubmit(event) {
        event.preventDefault();
        
        saveClient(this.state.Cid, this.state.Cname, this.state.Caddress);
    }

    render() {
        return (
            <form className="form-horizontal" style={{paddingLeft: "750px", paddingRight: "750px"}}>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="Cid">Company ID</label>
                    <input onChange={ (event) => { this.onChange(event) }} className="form-control" type="text" id="Cid" name="Cid"></input>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="Cname">Company Name</label>
                    <input onChange={ (event) => { this.onChange(event) }} className="form-control" type="text" id="Cname" name="Cname"></input>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="Caddress">Company Address</label>
                    <input onChange={ (event) => { this.onChange(event) }} className="form-control" type="text" id="Caddress" name="Caddress"></input>
                </div>
                <div className="form-group">
                    <input onClick={ (event) => { this.onSubmit(event) }} type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default ClientsPage