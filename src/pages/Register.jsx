import React from 'react';
import logo from '../logo.svg';
import { push } from 'connected-react-router';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Form from './Form';

export class Register extends Form {


  doSubmit=(value) =>{
    
    
    // if (user.email && user.password) {
    //   //dispatch(userActions.register(user));
    // }
  }

  render() {
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
            <Field
              name="password"
              type="password"
              label="Password"
              placeholder="***********"
              component={this.renderInput}
            />

            <div className="form-field">
              <input type="submit" value="Register" />
            </div>
            <a className="link-left" to="/login">
              I have an account
            </a>
            <a className="link-right" to="/reset-password">
              Forgot password?
            </a>
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
    onAuth: credentials => dispatch(actions.auth.auth(credentials)),
    onAutoSignup: () => dispatch(actions.auth.authCheckState()),
    push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'registerForm',
    destroyOnUnmount: true
    //validate
  })(Register)
);
