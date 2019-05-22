import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import MainMenu from './MainMenu'

function Header({logout}) {

  return (
    <div className="plugin-header">
      <LoadingBar showFastActions />
      <h2 className="header-title-1">Triggers</h2>
      <h3 className="header-title-2">Webhook Forms</h3>
      <MainMenu logout={logout}/>
      
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

