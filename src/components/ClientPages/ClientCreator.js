import React, { Component } from 'react';
import { saveClient } from './helpers';
import { toast } from 'react-toastify';

class ClientCreator extends Component {
    state = {
        Cemail: "",
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
        saveClient(this.state.Cemail, this.state.Cname, this.state.Caddress);
        if(this.validateClient() == true) {
            saveClient(this.state.Cemail, this.state.Cname, this.state.Caddress);
            this.props.history.push('/ClientList')
        }
    }

    validateClient() {
        if(this.state.Cemail.length == 0) {
            toast("You have not given any input for Company Email!", { type: toast.TYPE.ERROR }); 

            return false;
        }

        if(this.state.Cname.length == 0) {
            toast("You have not given any input for Company Name!", { type: toast.TYPE.ERROR }); 

            return false;
        }

        if(this.state.Caddress.length == 0) {
            toast("Please fill in the Company Address before submitting client!", { type: toast.TYPE.ERROR }); 

            return false;
        }

        return true;
    }

    render() {
        return (
            <form className="form-horizontal" style={{ textSizeAdjust: "auto" , paddingLeft: "400px", paddingRight: "640px"}}>
                <div className="form-group">
                    <label style={{textSizeAdjust: "auto"}} className="control-label" htmlFor="Cid">Company Email: </label>
                    <input onChange={ (event) => { this.onChange(event) }} className="form-control" type="text" id="Cemail" name="Cemail"></input>
                </div>
                <div className="form-group">
                    <label style={{textSizeAdjust: "auto"}} className="control-label" htmlFor="Cname">Company Name :</label>
                    <input onChange={ (event) => { this.onChange(event) }} className="form-control" type="text" id="Cname" name="Cname"></input>
                </div>
                <div className="form-group">
                    <label style={{textSizeAdjust: "auto"}} className="control-label" htmlFor="Caddress">Company Address: </label>
                    <input onChange={ (event) => { this.onChange(event) }} className="form-control" type="text" id="Caddress" name="Caddress"></input>
                </div>
                <div className="form-group">
                    <input onClick={ (event) => { this.onSubmit(event) }} type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default ClientCreator;