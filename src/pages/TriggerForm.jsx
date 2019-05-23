import React from 'react';
import { push } from 'connected-react-router';
import { reduxForm} from 'redux-form';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import EventWizard from './TriggerWizard';
import validate from './validate/trigger';

import Form from './Form';

export class TriggerForm extends Form {
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
    form: 'triggerForm',
    destroyOnUnmount: true,
    validate
  })(TriggerForm)
);
