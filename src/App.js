import React, {Component} from 'react';
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

class App extends Component {
  render() {   
    let header = (
    
      <header id="header">
        <PageHeader 
          isAuthenticated={this.state.isAuthenticated} 
          history={this.props.history} 
          current_balance={this.state.balance}
          wallet_address={this.state.wallet_address}
          username={this.state.username}
          toggleAside={() => this.toggleAside() }
          />
      </header>
    );
    let side_menu = (<aside id="aside-main" className={this.state.aside_classes}>
    <Menu {...this.props} toggleAside={() => this.toggleAside() } pending_messages={this.state.pending_messages}/>
    </aside>);
    let routes = [
      <Route key='logout' path="/logout" exact component={() => <Logout onLogout={this.disconnectWallet.bind(this)} addSuccessAlert={this.addSuccessAlert} expandContentArea={() => {this.expandContentArea()}} />} />
    ];
    if(!this.state.isAuthenticated) {
      routes = [
        <Route key='login' path="/login" exact component={() => <Login expandContentArea={() => {this.expandContentArea()}} setWalletAddress={this.setWalletAddress.bind(this)} />} />,
      ];
      if(this.props.location !== '/login') routes.push(<Redirect key='redirect-to-login' to='/login' />);
      header = null;
      side_menu = null;
    } else {
      this.resetContentArea();
    }

    if(this.state.isAuthenticated && this.props.location.pathname === '/login') {
      routes = (
        <>
        <Redirect to='/' />
        </>
      );
    }
    return(
      <>
        <div id="wrapper" className="d-flex align-items-stretch flex-column">
            <ToastContainer />
              {header}
            <div id="wrapper_content" className="d-flex flex-fill">
              {side_menu}
            <div id="middle" className="flex-fill">
              {routes}
            </div>
          </div>
        </div>
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