import React, {Component} from 'react';
import Moment from 'react-moment';

class Timesheet extends Component {
    render() {
        return <tr>
        <td><Moment format="DD/MM/YYYY HH:MM">{this.props.timelog.start}</Moment></td>
        <td><Moment format="DD/MM/YYYY HH:MM">{this.props.timelog.finish}</Moment></td>
        <td style={{paddingLeft: "4.5%"}}><button>Display</button></td>
        </tr>;
    }
}

export default Timesheet