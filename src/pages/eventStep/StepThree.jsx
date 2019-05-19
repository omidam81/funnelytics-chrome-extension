import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray } from 'redux-form';
import * as actions from '../../store/actions';
import {AddFieldIcon ,CheckBoxIcon} from '../../svgs';
import Form from '../Form';

export class StepThree extends Form {
         options = [
           { name: 'Option 1', value: '1' },
           { name: 'Option 2', value: '2' },
           { name: 'Option 3', value: '3' },
           { name: 'Option 4', value: '4' }
         ];

        //  renderValidationMembers = ({
        //    fields,
        //    meta: { error, submitFailed }
        //  }) => (
        //    <ul className="call-info-ul">
        //      <li>
        //        <button
        //          className="add-field-btn"
        //          onClick={() => fields.push({})}
        //          id="addNewRule"
        //        >
        //          <AddFieldIcon />
        //          Add Validation Rule
        //        </button>
        //      </li>
        //      {fields.map((member, index) => (
        //        <li key={index}>
        //          <div className="create-new-trigger">
        //            <h2 className="steps-title">{`Rule ${index +
        //              1}`}</h2>
        //            <span
        //              className="remove-field"
        //              onClick={() => fields.remove(index)}
        //            >
        //              Remove Rule
        //            </span>

        //            <div className="form-field">
        //              <Field
        //                name={`${member}.contain`}
        //                type="select"
        //                //label="What type of field is this?"
        //                placeholder="Contains"
        //                component={this.renderSelect}
        //              >
        //                {this.options.map((p, k) => {
        //                  return (
        //                    <option value={p.value} key={k}>
        //                      {p.name}
        //                    </option>
        //                  );
        //                })}
        //              </Field>
        //            </div>
        //            <div className="form-field">
        //              <Field
        //                name={`${member}.select`}
        //                type="select"
        //                //label="What type of field is this?"
        //                placeholder="Please Choose"
        //                component={this.renderSelect}
        //              >
        //                {this.options.map((p, k) => {
        //                  return (
        //                    <option value={p.value} key={k}>
        //                      {p.name}
        //                    </option>
        //                  );
        //                })}
        //              </Field>
        //            </div>
        //          </div>
        //        </li>
        //      ))}
        //    </ul>
        //  );

         renderMembers = ({ fields, meta: { error, submitFailed } }) => (
           <ul className="call-info-ul">
             <li>
               <button
                 className="add-field-btn"
                 onClick={() => fields.push({})}
                 id="addNewField"
               >
                 <AddFieldIcon />
                 Add Form Field
               </button>
             </li>
             {fields.map((member, index) => (
               <li key={`${member}._id`}>
                 <div className="create-new-trigger">
                   <h2 className="steps-title">{`Field ${index +
                     1}`}</h2>
                   <span
                     className="remove-field"
                     onClick={() => fields.remove(index)}
                   >
                     Remove Field
                   </span>
                   <div className="form-field">
                     {/* <div class="input-icon-left blue">
                <InputIcon />
              </div> */}
                     <Field
                       name={`${member}.selector`}
                       type="text"
                       label="Choose the selector for this field"
                       placeholder="Trigger"
                       component={this.renderInput}
                     />
                   </div>
                   <div className="form-field">
                     <Field
                       name={`${member}.type`}
                       type="select"
                       label="What type of field is this?"
                       placeholder="Select a item"
                       component={this.renderSelect}
                     >
                       {this.options.map((p, k) => {
                         return (
                           <option value={p.value} key={k}>
                             {p.name}
                           </option>
                         );
                       })}
                     </Field>
                   </div>
                   <div className="form-field">
                     <Field
                       name={`${member}.label`}
                       type="text"
                       label="Name this field"
                       placeholder="Field Name"
                       component={this.renderInput}
                     />
                   </div>

                   <div className="form-field">
                     <label className="label-checkbox">
                       {/* <input
                         type="checkbox"
                         name={`${member}.identifiable`}
                       /> */}
                       <Field
                         name={`${member}.identifiable`}
                         type="checkbox"
                         label="This field is an identifiable attribute"
                         //placeholder="Field Name"
                         component={this.renderInput}
                       />
                       {/* This field is an identifiable attribute */}
                       <CheckBoxIcon />
                     </label>
                   </div>
                   {/* <div className="validation-rules-btn opened">
                     <span className="plus-dash" />
                     Validation Rules
                   </div> */}
                   {/* <div className="dialog-content-container">
                     <FieldArray
                       name={`${member}.validationRules`}
                       component={this.renderValidationMembers}
                     />
                   </div> */}
                 </div>
               </li>
             ))}
           </ul>
         );

         render() {
           return (
             <>
               <h2 className="steps-title">Add Your Form Fields</h2>
               <form
                 onSubmit={this.props.handleSubmit(this.props.onSubmit)}
               >
                 <div className="dialog-content-container">
                   <FieldArray
                     name="formFeilds"
                     component={this.renderMembers}
                   />
                 </div>
                 {/* <div className="p-grid">
            <div className="p-col">
              <button
                onClick={this.props.previousPage}
                classType="previous"
              />
            </div>
            <div className="p-col">
              <button type="submit" />
            </div>
          </div> */}
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

const mapDispatchToProps = dispatch => {
  return {
    //createLocation: param => dispatch(actions.location.create(param)),
    //updateLocation: (id, param) => dispatch(actions.location.update(id, param))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'eventForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(StepThree)
);
