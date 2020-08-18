import React, { Component } from 'react';
import ClientTable from './ClientTable';
import { getClients } from './helpers';

class ClientList extends Component {
    state = {
        clients: []
    }
    componentDidMount() {
        const that = this;
        getClients().then(clients => {
            that.setState({clients: clients});
        })
    }
    
    render() {
        return (
            <ClientTable clients={this.state.clients}></ClientTable>
        )
    }
}

export default ClientList;