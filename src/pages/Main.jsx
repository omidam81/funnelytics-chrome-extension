import React, { Component } from 'react';
import { push } from 'connected-react-router';
import LoadingBar from 'react-redux-loading-bar';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Projects from './Projects';
import Project from './Project';
import ProjectForm from './ProjectForm';
import TriggerForm from './TriggerForm';
import TriggerEditForm from './TriggerEditForm';
import TriggerDetail from './TriggerDetail';


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
          <Route exact path="/project" component={ProjectForm} />
          <Route exact path="/trigger" component={TriggerForm} />
          <Route exact path="/trigger/:id" component={TriggerDetail} />
          <Route exact path="/trigger-edit/:id" component={TriggerEditForm} />
          <Route exact path="/project/:id" component={Project} />
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

