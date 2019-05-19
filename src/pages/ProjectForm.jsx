import React, { Component } from "react";
import logo from '../logo.svg';
import { push } from 'connected-react-router';
import { reduxForm, Field } from 'redux-form';
import Header from '../components/Header';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import Form from './Form';
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length <=4) {
    errors.username = 'Minimum 5 characters is required';
  }
  
  return errors;
};
export class NewProject extends Form {

    doSubmit = value => {
        console.log(value);
        const { name } = value;
        if (this.props.project._id) this.props.update(this.props.project._id,{name})
        else this.props.create({ name });
        
    };
    
    
    render() {
        return (
            <div className='triggers'>
                <Header/>
                <div className='create-new-trigger'>
                    <br />
                    <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
                        <div className="form-field">
                            
                            <Field
                                name="name"
                                type="text"
                                label="What would you like to name your Project?"
                                placeholder="Project Name"
                                component={this.renderInput}
                            />
                        </div>
                        <div className="form-field">
                            <input type="submit" value="Create Project" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.project.loading,
        error: state.project.error,
        project: state.project.project
    };
};

const mapDispatchToProps = dispatch => {
    return {
        create: param => dispatch(actions.project.create(param)),
        push: path => dispatch(push(path))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'ProjectForm',
    destroyOnUnmount: true,
    validate
  })(NewProject)
);

