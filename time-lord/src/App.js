import React from 'react';
import './App.css'
import {Route, Link} from 'react-router-dom';
import LogPage from './Home/LogPage';
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
            display: "inline",
            justifyContent: "center",
          }}>
          <header>
            <nav>
              <ul>
                <li><Link to="/Timesheets">Timesheets</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Transfer">Data Transfer</Link></li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact component={Home}/>
          <Route path="/Timesheets" exact component={LogPage}/>
          <Route path="/Transfer" exact component={DataTransfer}/>
        </div>
      </>
    );
  }
}

export default App