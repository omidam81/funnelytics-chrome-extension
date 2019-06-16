/*global chrome*/
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form';
//import { save, load } from 'redux-localstorage-simple';
import StepTitle from '../../components/StepTitle';
import Form from '../Form';

export class StepTwo extends Form {
  state = {
    status: false
  };
  componentDidMount() {
    console.log(this.props);
    chrome.storage.local.get('xpath',(data)=> {
      console.log('data', data);
       this.props.change('selector', "data.xpath");
      if (typeof data.xpath == 'undefined') {
        // That's kind of bad
      } else {
         this.props.change('selector', data.xpath);
      }
    });
  }
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
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        message: 'clicked_browser_action'
      });
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
//const xpath = localStorage.getItem('xpath');
// chrome.storage.local.get("xpath", function(data) {
//     if(typeof data.xpath == "undefined") {
//         // That's kind of bad
//     } else {
//         // Use data.count
//     }
//   });
const mapStateToProps = state => {
  return {
    event: state.projectEvent.event
    // ? state.projectEvent.event
    // : {
    //     selector: xpath
    //   }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    change: (field, value) => dispatch(change('triggerForm', field, value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'triggerForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(StepTwo)
);
