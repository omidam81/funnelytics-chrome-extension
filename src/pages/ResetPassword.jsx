import React, { Component } from "react";
import logo from '../logo.svg';

class ResetPassword extends Component {
    render() {
        return (
          <div className="splash-screen">
              <div className="splash-screen-main">
  
                  <div className="splash-logo">
                      <img src={logo} className="App-logo" alt="logo" />
                  </div>
                  <form className="login-form">
                      <div className="form-field">
                          <label>Email Address</label>
                          <input type="email" name="email" placeholder="example@example.comx" />
                      </div>
                      <div className="form-field">
                          <input type="submit" value="Send me link" />
                      </div>
                  </form>
              </div>
         </div>
        );
      }
    }
export { ResetPassword };




