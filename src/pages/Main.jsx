import React, { Component } from 'react';
import { ConnectedRouter, push } from 'connected-react-router';
import LoadingBar from 'react-redux-loading-bar';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
//import { RegisterAccount, ResetPassword, Splash } from './pages';
import Header from '../components/Header';
import Projects from './Projects';
import Project from './Project';
import ProjectForm from './ProjectForm';
import EventForm from './EventForm';
import EventDetail from './EventDetail';
import Help from './Help';

class App extends Component {

  render() {
    const { isAuthenticated } = this.props;
    if(!isAuthenticated) return this.props.push('/splash');
    return (
      <div className="triggers">
        <LoadingBar showFastActions />
        <Header />
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route
            exact
            path="/new-project"
            component={ProjectForm}
          />
          <Route
            exact
            path="/new-event"
            component={EventForm}
          />
          <Route
            exact
            path="/event/:id"
            component={EventDetail}
          />
          <Route
            exact
            path="/project/:id"
            component={Project}
          />
          <Route exact path="/help" component={Help} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

