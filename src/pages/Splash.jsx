import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Splash() {
  return (
    <div className="splash-screen">
      <div className="splash-screen-main">
        <div className="splash-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="splash-description">
          Log in to see the Funnelytics editor. Build, preview, manage and test
          in-product interactions to help your users succeed.
        </p>
        <Link to="login">
          <button className="login-button">Login</button>
        </Link>
      </div>
      <div className="splash-screen-footer">
        <h3 className="splash-footer-heading">Need Help?</h3>
        <ul>
          <li>
            <Link to="/splash">Get Started Guide</Link>
          </li>
          <li>
            <Link to="/help">Help Desk</Link>
          </li>
          <li>
            <Link to="/support">Contact Support</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Splash;
