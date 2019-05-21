import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Form from '../Form';

export class StepTwo extends Form {
  render() {
    return (
      <>
        <h2 className="steps-title">Define Form Submit Button</h2>
        <form onSubmit={this.props.onSubmit}>
          <Field
            name="name"
            type="text"
            icon
            label="Choose the selector for this field"
            placeholder="Trigger"
            className="input-with-icon-left"
            component={this.renderInput}
          />
          <Field
            name="fieldName"
            type="text"
            label="Name this field"
            placeholder="Submit Button"
            component={this.renderInput}
          />
          <div className="form-field">
            <input type="submit" value="Continue To Step 3" />
          </div>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    event: state.projectEvent.event
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //remove: id => dispatch(actions.projectEvent.remove(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'eventForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(StepTwo)
);
