import React from 'react';
import './App.css'
import { Route, Redirect, withRouter, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import PageHeader from './components/PageHeader/PageHeader';
import Menu from './components/MainMenu/Menu';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import arweave from './arweave-config';
import 'react-toastify/dist/ReactToastify.css';
import LogPage from './Home/LogPage';
import Home from './Home/HomePage';
import DataTransfer from './components/Timesheet/DataTransfer';

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