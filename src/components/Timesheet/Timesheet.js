import React, {Component} from 'react';
import Moment from 'react-moment';

class Timesheet extends Component {
    render() {
        return (
            <tr>
                <td><Moment format="DD/MM/YYYY hh:mm:ss">{this.props.timelog.start}</Moment></td>
                <td><Moment format="DD/MM/YYYY hh:mm:ss">{this.props.timelog.finish}</Moment></td>
                <td style={{ textAlign: "left" }}>{this.props.timelog.desc}</td>
            </tr>
        );
    };
}

export default Timesheet