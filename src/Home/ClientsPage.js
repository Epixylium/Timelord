import React, { Component } from 'react';

class ClientsPage extends Component {
    render() {
        return (
            <form className="form-horizontal" style={{paddingLeft: "750px", paddingRight: "750px"}}>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="Cid">Company ID</label>
                    <input className="form-control" type="text" id="Cid" name="Cid"></input>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="Cname">Company Name</label>
                    <input className="form-control" type="text" id="Cname" name="Cname"></input>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="Caddress">Company Address</label>
                    <input className="form-control" type="text" id="Caddress" name="Caddress"></input>
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default ClientsPage