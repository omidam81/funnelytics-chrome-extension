import React from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from './Outside';
import { AllProjectIcon, HelpIcon, LogoutIcon, MenuIcon } from '../svgs';

export class MainMenu extends React.Component {
  state = {
    showMenu: false
  };

  render() {
    const { showMenu } = this.state;
    return (
      <>
        {showMenu === false && (
          <div
            className="menu-btn open"
            onClick={() => this.setState({ showMenu: true })}
          >
            <MenuIcon />
          </div>
        )}
        {showMenu === true && (
          <div
            className="menu-btn close"
            onClick={() => this.setState({ showMenu: true })}
          >
            <span />
            <span />
            <span />
          </div>
        )}
        <ClickOutside onClickOutside={() => this.setState({ showMenu: false })}>
          {showMenu && (
            <div className="main-menu">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => this.setState({ showMenu: true })}
                  >
                    <AllProjectIcon style={{ marginRight: '13px' }} />
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link to="/help">
                    <HelpIcon style={{ marginRight: '13px' }} />
                    Help
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={this.props.logout}>
                    <LogoutIcon style={{ marginRight: '13px' }} />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </ClickOutside>
      </>
    );
  }
}

export default MainMenu;
