import React from 'react';
import { reduxForm, Field } from 'redux-form';
import logo from '../logo.svg';

import { Link,Redirect } from 'react-router-dom';
//import { userActions } from '../actions';
import { push } from 'connected-react-router';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import Form from './Form';
import validate from './validate/login';

export class Login extends Form {
  doSubmit = value => {
      console.log(value);
    const { email, password } = value;
    if (email && password) {
        this.props.onAuth({username:email, password});
    }
  };
  render() {
    if (this.props.isAuthenticated) return <Redirect to="/" />;
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
              placeholder="Email Address"
              component={this.renderInput}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              component={this.renderInput}
            />

            <div className="form-field">
              <input type="submit" value="Login" />
            </div>
            <Link className="link-left" to="/register">
              Don’t have an account?
            </Link>
            <Link className="link-right" to="/reset-password">
              Forgot password?
            </Link>
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
    form: 'loginForm',
    destroyOnUnmount: true,
    validate
  })(Login)
);
