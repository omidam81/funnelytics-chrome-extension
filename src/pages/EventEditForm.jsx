import React, { Component } from 'react';
import logo from '../logo.svg';
import { push } from 'connected-react-router';
import { reduxForm, Field } from 'redux-form';
import Header from '../components/Header';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { Types } from './../constants';
import { InputLetIcon } from '../svgs';
import Form from './Form';

export class EventEdit extends Form {
  doSubmit = value => {
    console.log(value);
    // const { name } = value;
    // if (this.props.project._id)
    //   this.props.update(this.props.project._id, { name });
    // else this.props.create({ name });
  };

  render() {
    return (
      <div className="triggers">
        <div className="graybox-container">
          <h3>Edit Trigger Name Goes Here</h3>
          <span className="delete-trigger">Delete Trigger</span>
          <span className="event-id">Event ID: #F5llksjf239ds</span>
          <span className="created-on">
            <b>Created On:</b>
            <a href="">https://funnelytics.io/register/</a>
          </span>
        </div>
        <div className="create-new-trigger edit-trigger">
          <h2 className="steps-title">Basic Settings</h2>
          <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
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
          </form>
        </div>
        <div className="graybox-container">
          <h3>Submit Button</h3>
        </div>
        <div className="create-new-trigger edit-trigger">
          <h2 className="steps-title">Form Submit Button</h2>
          <form>
              <Field
                name="name"
                type="text"
                icon
                label="Choose the selector for this field"
                placeholder="Trigger"
                class="input-with-icon-left"
                component={this.renderInput}
              />
            <Field
              name="fieldName"
              type="text"
              label="Name this field"
              placeholder="Submit Button"
              component={this.renderInput}
            />
          </form>
        </div>
        <div className="graybox-container">
          <h3>Form Fields</h3>
        </div>
        <div className="create-new-trigger edit-trigger">
          <h2 className="steps-title">Field 1</h2>
          <span className="remove-field">Remove Field</span>
          <form>
            <div className="form-field">
              <label>Choose the selector for this field</label>
              <div className="input-icon-left blue">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00870993 1.18884L1.64932 13.9512C1.76482 14.8498 2.91998 15.144 3.45119 14.4101L5.50254 11.5764C5.7104 11.2892 6.14277 11.3036 6.33113 11.6039L8.77138 15.4943C9.06484 15.9621 9.68202 16.1035 10.1499 15.81L10.3067 15.7116C10.7746 15.4182 10.916 14.801 10.6225 14.3331L8.18197 10.4423C7.99351 10.1418 8.16909 9.7461 8.51832 9.68423L11.9478 9.07672C12.8403 8.91864 13.079 7.74994 12.3199 7.25458L1.54708 0.223939C0.83262 -0.242369 -0.10007 0.342653 0.00870993 1.18884Z"
                    fill="white"
                  />
                </svg>
              </div>
              <input
                className="input-with-icon-left"
                type="text"
                placeholder="Nothing Selected"
                name=""
              />
            </div>
            <div className="form-field">
              <label>What type of field is this?</label>
              <select>
                <option>Please Choose</option>
                <option>Please Choose</option>
                <option>Please Choose</option>
              </select>
            </div>
            <div className="form-field">
              <label>Name this field</label>
              <input type="text" placeholder="Field Name" name="fieldName" />
            </div>
            <div className="form-field">
              <label className="label-checkbox">
                <input type="checkbox" />
                This field is an identifiable attribute
                <svg
                  class="checkbox-svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.84004 7.67411C4.70222 7.86087 4.49025 7.97882 4.25893 7.99742C4.02761 8.01602 3.79957 7.93349 3.63369 7.77115L1.31126 5.70916C0.966571 5.40312 0.947852 4.87102 1.27018 4.54152C1.568 4.23708 2.05114 4.21651 2.37375 4.49453L4.09675 5.97942L8.0328 0.645597C8.2959 0.289067 8.79824 0.21338 9.15471 0.476558C9.51107 0.739654 9.58673 1.2418 9.32371 1.59821L4.84056 7.67341L4.84004 7.67411Z"
                    fill="white"
                  />
                </svg>
              </label>
            </div>
            <div className="validation-rules-btn">
              <span className="plus-dash" />
              Validation Rules
            </div>
          </form>
          <div className="seperator" />
          <h2 className="steps-title">Field 2</h2>
          <span className="remove-field">Remove Field</span>
          <form>
            <div className="form-field">
              <label>Choose the selector for this field</label>
              <div className="input-icon-left blue">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00870993 1.18884L1.64932 13.9512C1.76482 14.8498 2.91998 15.144 3.45119 14.4101L5.50254 11.5764C5.7104 11.2892 6.14277 11.3036 6.33113 11.6039L8.77138 15.4943C9.06484 15.9621 9.68202 16.1035 10.1499 15.81L10.3067 15.7116C10.7746 15.4182 10.916 14.801 10.6225 14.3331L8.18197 10.4423C7.99351 10.1418 8.16909 9.7461 8.51832 9.68423L11.9478 9.07672C12.8403 8.91864 13.079 7.74994 12.3199 7.25458L1.54708 0.223939C0.83262 -0.242369 -0.10007 0.342653 0.00870993 1.18884Z"
                    fill="white"
                  />
                </svg>
              </div>
              <input
                className="input-with-icon-left"
                type="text"
                placeholder="Nothing Selected"
                name=""
              />
            </div>
            <div className="form-field">
              <label>What type of field is this?</label>
              <select>
                <option>Please Choose</option>
                <option>Please Choose</option>
                <option>Please Choose</option>
              </select>
            </div>
            <div className="form-field">
              <label>Name this field</label>
              <input type="text" placeholder="Field Name" name="fieldName" />
            </div>
            <div className="form-field">
              <label className="label-checkbox">
                <input type="checkbox" />
                This field is an identifiable attribute
                <svg
                  class="checkbox-svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.84004 7.67411C4.70222 7.86087 4.49025 7.97882 4.25893 7.99742C4.02761 8.01602 3.79957 7.93349 3.63369 7.77115L1.31126 5.70916C0.966571 5.40312 0.947852 4.87102 1.27018 4.54152C1.568 4.23708 2.05114 4.21651 2.37375 4.49453L4.09675 5.97942L8.0328 0.645597C8.2959 0.289067 8.79824 0.21338 9.15471 0.476558C9.51107 0.739654 9.58673 1.2418 9.32371 1.59821L4.84056 7.67341L4.84004 7.67411Z"
                    fill="white"
                  />
                </svg>
              </label>
            </div>
            <div className="validation-rules-btn">
              <span className="plus-dash" />
              Validation Rules
            </div>
          </form>
          <div className="seperator" />
          <button className="add-field-btn">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0C4.44772 0 4 0.447715 4 1V4L1 4C0.447715 4 0 4.44771 0 5C0 5.55228 0.447715 6 1 6H4V9C4 9.55229 4.44772 10 5 10C5.55228 10 6 9.55228 6 9V6H9C9.55228 6 10 5.55229 10 5C10 4.44772 9.55228 4 9 4L6 4V1C6 0.447715 5.55228 0 5 0Z"
                fill="white"
              />
            </svg>
            Add Form Field
          </button>
          <button className="save-trigger">Save Trigger</button>
        </div>
        <div className="project-info">
          <span className="project-name">
            <b>Project:</b> Funnelytics
          </span>
          <span className="project-id">
            <b>ID:</b> #666666666666666
          </span>
        </div>

        {/* <div className='create-new-trigger'>
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
                </div> */}
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
    form: 'eventEditForm',
    destroyOnUnmount: true
    //validate
  })(EventEdit)
);
