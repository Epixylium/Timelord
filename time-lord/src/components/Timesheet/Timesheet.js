import React, { Component } from 'react';
import Moment from 'react-moment';

class Timesheet extends Component {
    render() {
        return <>
        {this.props.timelog.desc}<br/>
        <Moment format="DD/MM/YYYY HH:MM">{this.props.timelog.start}</Moment><br/>
        <Moment format="DD/MM/YYYY HH:MM">{this.props.timelog.finish}</Moment>
        <br/><br/></>;
    }
}

export default Timesheet;