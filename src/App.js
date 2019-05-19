import React, { Component } from 'react';
import { ConnectedRouter, push } from 'connected-react-router';

import * as actions from './store/actions';
import { connect } from 'react-redux';
import { Router, Route, Switch, withRouter,Redirect } from "react-router-dom";
import './App.css';
import { RegisterAccount, ResetPassword, Splash } from './pages'
import Login from './pages/Login';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Project from './pages/Project';
import ProjectForm from './pages/ProjectForm';
import EventForm from './pages/EventForm';
import EventDetail from './pages/EventDetail';
import Help from './pages/Help';


class App extends Component {
  componentWillMount() {
    
    this.props.onAutoSignup();
    
  }
  render() {
    const { isAuthenticated, pathname } = this.props;
    return (
      // <Router history={history} forceRefresh={true}>
      <ConnectedRouter history={this.props.history}>
        {/* <LoadingBar showFastActions /> */}
        <Switch>
          
        <Route exact path="/splash" component={withRouter(Splash)} />
        <Route exact path="/login" component={withRouter(Login)} />
        <Route exact path="/reset-password" component={withRouter(ResetPassword)} />
        <Route exact path="/register" component={withRouter(RegisterAccount)} />
          {isAuthenticated && (<>
            <Route path="/" component={Main} />
            {/* <Route exact path='/add-triggeer' component={withRouter(Splash)}></Route>
            <Route exact path="/projects" component={withRouter(Projects)} />
            <Route exact path="/new-project" component={withRouter(ProjectForm)} />
            <Route exact path="/new-event" component={withRouter(EventForm)} />
            <Route exact path="/event/:id" component={withRouter(EventDetail)} />
            <Route exact path="/project/:id" component={withRouter(Project)} /> */}
           
            {/* <Route exact path="/help" component={withRouter(Help)} /> */}
          </>)}

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