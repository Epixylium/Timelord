import React from 'react';
import './App.css'
import {Route, Link} from 'react-router-dom';
import Timesheets from './Timesheets/LogPage';
import Home from './Home/HomePage';

class App extends React.Component {
  render() {   
    return(
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
            fontWeight: "bold",
            height: 60,
          }}   
        >
          <p>T i m e L o r d</p>
        </div>
        <div className="Navi" 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "",
          }}>
          <header>
            <nav>
              <ul>
                <li><Link to="/Timesheets">Timesheets</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/"></Link></li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact component={Home}/>
          <Route path="/Timesheets" exact component={Timesheets}/>
          <Route path="/" exact/>
        </div>
      </>
    );
  }
}

export default App