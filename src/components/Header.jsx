import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <div className="header__title">
          <div className="header__title-name">
            Blake Guilloud
          </div>
          <div className="header__title-title">
            Web Solutions
          </div>
        </div>
        <div className="header__nav">
          <Link to="" className="header__nav-item">
            About
          </Link>
          <Link to="articles" className="header__nav-item">
            Articles
          </Link>
          <Link to="resume" className="header__nav-item">
            Resume
          </Link>
        </div>
      </div>
    );
  }
}

Header.displayName = 'Header';

Header.propTypes = {};
