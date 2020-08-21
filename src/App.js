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
import HomePage from './Home/HomePage';
import ClientList from './components/ClientPages/ClientList';
import ClientCreator from './components/ClientPages/ClientCreator';
import TimelogCreator from './components/Timesheet/TimelogCreator';

class App extends Component {
  state = {
    isAuthenticated: null,
    contentToggled: false,
    contentStyle: {marginLeft: '0px'},
    balance: 0,
    wallet_address: null,
    aside_classes: "aside-start aside-primary font-weight-light aside-hide-xs d-flex flex-column h-auto",
    aside_open: false,
  }

  constructor(props) {
    super(props);

    this.toggleAside.bind(this);
    this.addErrorAlert.bind(this);
    this.addSuccessAlert.bind(this);
  } 

  componentDidMount() {
    const wallet_address = sessionStorage.getItem('AR_Wallet', null);
    const jwk = JSON.parse(sessionStorage.getItem('AR_jwk', null));  
    
    if(jwk !== null) {
      this.setState({isAuthenticated: true, wallet_address: wallet_address, jwk: jwk});
      this.loadWallet(wallet_address);
    }

    const isAuthenticated = sessionStorage.getItem('isAuthenticated');

    this.setState({isAuthenticated: isAuthenticated === 'true' ? true : false});

    
    if(this.props.isAuthenticated === undefined) {
      return;
    }

    const that = this;
  }

  componentDidUpdate(prevProps) {
    if(this.props.isAuthenticated !== undefined && this.props.isAuthenticated !== prevProps.isAuthenticated) {
      this.setState({isAuthenticated: this.props.isAuthenticated});

      if(this.props.isAuthenticated && !this.props.expand_content_area) {
        this.setState({contentStyle: {marginLeft: '0px'}});
      }
    }
  }

  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }

  async loadWallet(wallet_address) {
    const that = this;

    if(wallet_address) {
        arweave.wallets.getBalance(wallet_address).then((balance) => {
            let ar = arweave.ar.winstonToAr(balance);

            const state = {balance: ar};

            that.setState(state);
        });
    }     
  }

  setWalletAddress(wallet_address_files) {
      const that = this;

      const reader = new FileReader();
      reader.onload = function() {
          const text = reader.result;
          const jwk = JSON.parse(text);

          arweave.wallets.jwkToAddress(jwk).then((wallet_address) => {                
              that.setState({wallet_address: wallet_address, jwk: jwk});
              sessionStorage.setItem('AR_Wallet', wallet_address);
              sessionStorage.setItem('AR_jwk', JSON.stringify(jwk));
          
              that.loadWallet(wallet_address);

              that.setState({isAuthenticated: true});
              sessionStorage.setItem('isAuthenticated', true);
              that.resetContentArea();
              that.addSuccessAlert("You have successfully connected.");
          });
          
      }
      reader.readAsText(wallet_address_files[0]);

  }

  addSuccessAlert(message)  {
    toast(message, { type: toast.TYPE.SUCCESS });     
  }

  addErrorAlert(message) {
    toast(message, { type: toast.TYPE.ERROR });  
  }

  disconnectWallet() {
      sessionStorage.removeItem('AR_Wallet');
      sessionStorage.removeItem('AR_jwk');
      sessionStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('exchange');
      sessionStorage.removeItem('coinpair');

      this.setState({isAuthenticated: false, wallet_address: null, jwk: null, balance: 0});

      this.addSuccessAlert("Your wallet is now disconnected");
  }

  toggleAside() {
    if(this.state.aside_open) {
      this.setState({
        aside_classes: "aside-start aside-primary font-weight-light aside-hide-xs d-flex flex-column h-auto",
        aside_open: false
      });
    } else {
      this.setState({
        aside_classes: "aside-start aside-primary font-weight-light aside-hide-xs d-flex flex-column h-auto js-aside-show",
        aside_open: true
      })
    }
  }

  resetContentArea() {
    document.body.classList.add('layout-admin'); 
    document.body.classList.add('aside-sticky'); 
    document.body.classList.add('header-sticky'); 
  }

  expandContentArea() {
    document.body.classList.remove('layout-admin'); 
    document.body.classList.remove('aside-sticky'); 
    document.body.classList.remove('header-sticky'); 
  }

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
          <p style={{display: "flex", justifyContent: "center", fontSize: "60px", fontWeight: "bold"}}>T i m e L o r d</p>
      </header>
    );

    let side_menu = (<aside id="aside-main" className={this.state.aside_classes}>
      <Menu {...this.props} toggleAside={() => this.toggleAside() } pending_messages={this.state.pending_messages}/>
    </aside>);
    let routes = [
      <Route key='home' path="/" exact component={() => <TimelogCreator history={this.props.history}/>}/>,
      <Route key='Timesheets' path="/Timesheets" exact component={LogPage}/>,
      <Route key='TimelogCreator' path="/TimelogCreator" exact component={() => <TimelogCreator history={this.props.history}/>}/>,
      <Route key='ClientList' path="/ClientList" exact component={ClientList}/>,
      <Route key='ClientCreator' path="/ClientCreator" exact component={() => <ClientCreator history={this.props.history}/>}/>,
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
      </>
    );
  }
}

export default withRouter(App);