/*global chrome*/
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import StepTitle from '../../components/StepTitle';
import Form from '../Form';
//chrome.tabs.sendMessage(tab.id, { message: 'clicked_browser_action' });
//console.log('chrome', chrome);

//port.postMessage({ joke: 'Knock knock' });
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('extention listener');
  console.log('extention Got sender', sender);
  if (request.message == 'xpath') {
      console.log('request',request.inspect);
  }
});
export class StepTwo extends Form {
  state = {
    status: false
  };
  constructor(props) {
    super(props);
    
      this.handleInspector = this.handleInspector.bind(this);
      // port.onMessage.addListener(function(msg) {
      //   console.log('msg',msg);
      //   //port.postMessage({ message: 'clicked_browser_action' });
      // });
  }
  
  handleInspector = () => {
    console.log('handleInspector');
    chrome.tabs.query({ active: true, currentWindow: true }, function(
      tabs
    ) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { message: 'clicked_browser_action' });
    });
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
