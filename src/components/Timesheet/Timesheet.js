import React, {Component} from 'react';
import Moment from 'react-moment';

class Timesheet extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.timelogs.start}</td>
                <td>{this.props.timelogs.finish}</td>
                <td style={{ textAlign: "left" }}>{this.props.timelogs.desc}</td>
            </tr>
        );
    };
}

export default Timesheet