import React, {Component} from 'react';

class CStruct extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.clients.name}</td>
                <td style={{ textAlign: "left" }}>{this.props.clients.email}</td>
                <td style={{ textAlign: "left" }}>{this.props.clients.address}</td>
            </tr>
        );
    };
}

export default CStruct;