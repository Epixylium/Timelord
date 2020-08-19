import React, { Component } from 'react';
import { getClients } from './helpers';
import styled from 'styled-components';
import CStruct from './ClientStructure';
import { Link } from 'react-router-dom';


class ClientTable extends Component {
    render() {
        const clients_html = [];
    
        for(let i in this.props.clients) {
          const client = this.props.clients[i];
          
          const client_html =  <CStruct key={client.id} client={client}/>;
    
          clients_html.push(client_html);
        }
    
        return (
          <div className="row gutters-sm">
            <div className="col-12 col-lg-9 col-xl-12">
                <div className="portlet">
                    <div className="portlet-header border-bottom">
    
                        <div className="float-end">
    
                            <Link to='/ClientCreator' className="btn btn-sm btn-primary btn-pill px-2 py-1 fs--15 mt--n3">
                               New Client
                            </Link>
    
                        </div>
    
                        <span className="d-block text-muted text-truncate font-weight-medium pt-1">
                            Clients
                        </span>
                    </div>
                    <div className="portlet-body pt-0">
                          <div className="table-responsive">
                            <table className="table table-align-middle border-bottom mb-6">
                                <thead>
                                    <tr className="text-muted fs--13">
                                    <th className="w--200 hidden-lg-down">Client Name</th>
                                    <th className="w--200 hidden-lg-down">Client Email</th>
                                    <th className="w--200 hidden-lg-down">Client Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients_html}
                                </tbody>
                            </table>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        );
      }
}

export default ClientTable;