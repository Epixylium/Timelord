import React, {Component} from 'react';

class DescriptionBox extends Component {
    render() {
        return <tr>
        <td>{this.props.workdesc.desc}</td>
        </tr>;
    }
}

export default DescriptionBox