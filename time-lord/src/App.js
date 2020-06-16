import React from 'react';
import Moment from 'react-moment';
import './App.css';
import 'moment-timezone';
import 'react-moment'

export default class App extends React.Component {
  render() {
    const time = new Date();
    return(
      <Moment interval={1000} date={time}/>
    );
  }
}