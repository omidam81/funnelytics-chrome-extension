import React, { Component } from 'react';
import { push } from 'connected-react-router';
import LoadingBar from 'react-redux-loading-bar';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Projects from './Projects';
import Project from './Project';
import ProjectForm from './ProjectForm';
import EventForm from './EventForm';
import EventEditForm from './EventEditForm';
import EventDetail from './EventDetail';


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
          <Route exact path="/new-project" component={ProjectForm} />
          <Route exact path="/new-event" component={EventForm} />
          <Route exact path="/event/:id" component={EventDetail} />
          <Route exact path="/event-edit/:id" component={EventEditForm} />
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

