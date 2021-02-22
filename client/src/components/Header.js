/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still Deciding';
      case false:
        return 'im loggedout';
      default:
        return 'im logged in';
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='left brand-logo'>Emaily</a>
          <ul className='right'>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
