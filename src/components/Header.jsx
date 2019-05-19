import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import {AllProjectIcon,HelpIcon,LogoutIcon,MenuIcon} from '../svgs';

function Header({logout}) {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <div className="plugin-header">
      <LoadingBar showFastActions />
      <h2 className="header-title-1">Triggers</h2>
      <h3 className="header-title-2">Webhook Forms</h3>
      {showMenu === false && (
        <div className="menu-btn open" onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </div>
      )}
      {showMenu && (
        <>
          <div className="menu-btn close" onClick={() => setShowMenu(false)}>
            <span />
            <span />
            <span />
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <Link to="/">
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
                <a href="#" onClick={logout}>
                  <LogoutIcon style={{ marginRight: '13px' }} />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.auth.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);

