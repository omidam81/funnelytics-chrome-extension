import React from 'react';
import { push } from 'connected-react-router';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { Types } from './../constants';
import { InputLetIcon, CheckBoxIcon, AddFieldIcon } from '../svgs';
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
                <InputLetIcon />
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
              <input
                type="text"
                placeholder="Field Name"
                name="fieldName"
              />
            </div>
            <div className="form-field">
              <label className="label-checkbox">
                <input type="checkbox" />
                This field is an identifiable attribute
                <CheckBoxIcon />
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
                <InputLetIcon />
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
              <input
                type="text"
                placeholder="Field Name"
                name="fieldName"
              />
            </div>
            <div className="form-field">
              <label className="label-checkbox">
                <input type="checkbox" />
                This field is an identifiable attribute
                <CheckBoxIcon />
              </label>
            </div>
            <div className="validation-rules-btn">
              <span className="plus-dash" />
              Validation Rules
            </div>
          </form>
          <div className="seperator" />
          <button className="add-field-btn">
            <AddFieldIcon/>
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
