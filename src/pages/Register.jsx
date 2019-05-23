import React from 'react';
import logo from '../logo.svg';
import { push } from 'connected-react-router';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Form from './Form';
import validate from './validate/register';

export class Register extends Form {

  doSubmit=(value) =>{
    this.props.register({ email: value.email, password: value.password });
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
            <Link className="link-left" to="/login">
              I have an account
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
    register: credentials => dispatch(actions.auth.athen(credentials)),
    push: path => dispatch(push(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'registerForm',
    destroyOnUnmount: true,
    validate
  })(Register)
);
