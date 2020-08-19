import React, {Component} from 'react';

class CStruct extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.client.name}</td>
                <td style={{ textAlign: "left" }}>{this.props.client.email}</td>
                <td style={{ textAlign: "left" }}>{this.props.client.address}</td>
            </tr>
        );
    };
}

export default CStruct;