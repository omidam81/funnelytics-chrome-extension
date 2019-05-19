import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Form from '../Form';

export class StepOne extends Form {
  options = [
    { name: 'Button Click', value: 'click' },
    { name: 'Form Submission', value: 'submit' },
    { name: 'Video Play', value: 'video' },
    { name: 'Purchase', value: 'purchase' }
  ];
  render() {
    return (
      <>
        <h2 className="steps-title">Create New Trigger</h2>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-field">
            <Field
              name="name"
              type="text"
              label="What would you like to name your trigger?"
              placeholder="Trigger"
              component={this.renderInput}
            />
          </div>
          <div className="form-field">
            <Field
              name="type"
              type="select"
              label="What kind of action will this trigger?"
              placeholder="Select a item"
              component={this.renderSelect}
            >
              {this.options.map((p, k) => {
                return (
                  <option value={p.value} key={k}>
                    {p.name}
                  </option>
                );
              })}
            </Field>
          </div>
          <div className="form-field">
            <input type="submit" value="Continue To Step 2" />
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
  })(StepOne)
);
