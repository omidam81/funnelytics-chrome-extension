import React, { Component } from 'react';
import { ConnectedRouter, push } from 'connected-react-router';
import * as actions from './store/actions';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Register from './pages/Register';
import Splash from './pages/Splash';
import Login from './pages/Login';
import Main from './pages/Main';
import ResetPassword from './pages/ResetPassword';

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
          
        <Route exact path="/splash" component={Splash} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/register" component={Register} />
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
