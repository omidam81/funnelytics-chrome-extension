import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Form from '../Form';
import { Types } from '../../constants';
import StepTitle from '../../components/StepTitle';

export class StepOne extends Form {
  
  render() {
    return (
      <>
        <StepTitle title={'Create New Trigger'}/>
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
              {Types.map((p, k) => {
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



export default connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: 'triggerForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(StepOne)
);
