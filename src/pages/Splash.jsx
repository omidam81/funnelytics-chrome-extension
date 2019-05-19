import React, { Component } from "react";
import logo from '../logo.svg';

import { Link } from "react-router-dom"


class Splash extends Component {
  render() {
      return (
        <div className="splash-screen">
            <div className="splash-screen-main">
                <div className="splash-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p className="splash-description">Log in to see the Funnelytics editor. Build, preview, manage and test in-product interactions to help your users succeed.</p>
                <Link to="login">
                    <button className="login-button">
                        Login
                    </button>
                </Link>
            </div>
            <div className="splash-screen-footer">
                <h3 className="splash-footer-heading">Need Help?</h3>
                <ul>
                    <li><a href="">Get Started Guide</a></li>
                    <li><a href="">Help Desk</a></li>
                    <li><a href="">Contact Support</a></li>
                </ul>
            </div>
        </div>
      );
    }
  }
export { Splash };




