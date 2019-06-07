/*global chrome*/
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import StepTitle from '../../components/StepTitle';
import Form from '../Form';
//chrome.tabs.sendMessage(tab.id, { message: 'clicked_browser_action' });
console.log('chrome', chrome);
export class StepTwo extends Form {
  state = {
    status: false
  };
  constructor(props) {
    super(props);
    this.funnyInspector = window.Inspector
      ? window.Inspector({
          onClick: this.inspectorHandler,
          filter: '*'
        })
      : null;
  }
  inspectorHandler = element => {
    //inspectorElemet=element;
    console.log('Clicked element:', element);
  };
  handleInspector = () => {
    // this.setState({
    //   status: !this.state.status
    // });
    if (this.funnyInspector) {
      this.funnyInspector.start();
      this.funnyInspector.stop();
    }
  };
  render() {
    return (
      <>
        <StepTitle title={'Define Form Submit Button'} />
        <form onSubmit={this.props.onSubmit}>
          <Field
            name="selector"
            inspector={this.handleInspector}
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

export default connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: 'triggerForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(StepTwo)
);
