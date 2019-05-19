import React, { Component } from 'react';
import { ConnectedRouter, push } from 'connected-react-router';
import * as actions from './store/actions';
import { connect } from 'react-redux';
import { Router, Route, Switch, withRouter,Redirect } from "react-router-dom";
import './App.css';
import { RegisterAccount, ResetPassword, Splash } from './pages'
import Login from './pages/Login';
import Main from './pages/Main';


class App extends Component {
  componentWillMount() {
    this.props.onAutoSignup();
  }
  render() {
    const { isAuthenticated, pathname } = this.props;
    return (
      <ConnectedRouter history={this.props.history}>
        {/* <LoadingBar showFastActions /> */}
        <Switch>
          
        <Route exact path="/splash" component={withRouter(Splash)} />
        <Route exact path="/login" component={withRouter(Login)} />
        <Route exact path="/reset-password" component={withRouter(ResetPassword)} />
        <Route exact path="/register" component={withRouter(RegisterAccount)} />
          {isAuthenticated && <Route path="/" component={Main} /> }

        {!isAuthenticated && 
          (pathname != '/login' ||
            pathname != '/register' || pathname != '/splash' ||
            pathname != '/reset-password') && <Redirect to="/login" />}
        </Switch>
      </ConnectedRouter>
      
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    pathname: state.router.location.pathname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAutoSignup: () => dispatch(actions.auth.authCheckState()),
    push: path=>dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);




//export default App;