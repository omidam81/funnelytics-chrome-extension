import React, { Component } from 'react';

class Form extends Component {
    renderError = error => {
        return (
            <div
                className="p-message p-component p-message-error"
                style={{ textAlign: 'center', width: '100%', padding: '0' }}
            >
                {/* <span className="p-message-text" style={{ fontSize: '11px' }}>
                    error
                </span> */}
            </div>
        );
    };
    baseRenderInput = render => ({ input, meta, label, type, ...rest }) => {
        return (
            <div className="form-field">
                <label>{label}</label>
                    {render(input, label, type, rest)}
                    {meta.error && meta.touched && <div className="alert alert-danger">{meta.error}</div>}
            </div>
        );
    };
    renderSelect = this.baseRenderInput((input, label, type, { children }) => (
      <select {...input} placeholder={label} className="form-control">
        {children}
      </select>
    ));

    renderInput = this.baseRenderInput((input, label, type = 'text',rest) => (
      <input
        {...input}
        type={type}
        {...rest}
        //placeholder={label}
        //className="form-control"
      />
    ));
    renderInputTextarea = this.baseRenderInput((input, label) => (
      <textarea {...input} rows={5} cols={30} className="form-control" />
    ));

    renderSwitch = this.baseRenderInput((input, label) => (
      <label className="switch mt-1 plano-form-switch">
        <input type="checkbox" {...input} className="form-control" />
        <span className="slider round" />
      </label>
    ));

    

    // renderDatePicker = ({ input, meta, label, type, ...rest }) => {
    //   return (
    //     <Calendar {...input} label
    //       showTime={true} hourFormat="12"
    //     />
    //   );

    // };
    
}

export default Form;
