import React from 'react';
import { push } from 'connected-react-router';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import logo from '../logo.svg';
import validate from './validate/resetPassword';
import Form from './Form';

export class ResetPassword extends Form {
  doSubmit = value => {
    //    this.props.authx({
    //      email: value.email,
    //      password: value.password
    //    });
  };

  render() {
      console.log('props',this.props)
    return (
      <div className="splash-screen">
        <div className="splash-screen-main">
          <div className="splash-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(this.doSubmit)}
          >
            <Field
              name="email"
              type="email"
              label="Email Address"
              placeholder="example@example.com"
              component={this.renderInput}
            />
            <div className="form-field">
              <input type="submit" value="Send me link" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: credentials => dispatch(actions.auth.authx(credentials)),
    push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'resetPwdForm',
    destroyOnUnmount: true,
    validate
  })(ResetPassword)
);
