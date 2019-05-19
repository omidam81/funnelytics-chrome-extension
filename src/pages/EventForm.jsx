import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import EventWizard from './EventWizard';

import Form from './Form';
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length <= 4) {
    errors.username = 'Minimum 5 characters is required';
  }

  return errors;
};
export class NewEvent extends Form {
  doSubmit = value => {
    // console.log(value);
    // const { name } = value;
    // if (this.props.project._id)
    //   this.props.update(this.props.project._id, { name });
    // else this.props.create({ name });
  };
  handleRemove = () => {};
  render() {
    return (
      <EventWizard onSubmit={this.doSubmit} onDelete={this.handleRemove} />
    );
  }
}
const mapStateToProps = state => {
  return {
    initialValues: state.projectEvent.event
  };
};

const mapDispatchToProps = dispatch => {
  return {
    create: param => dispatch(actions.project.create(param)),
    push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'eventForm',
    destroyOnUnmount: true
    //validate
  })(NewEvent)
);
