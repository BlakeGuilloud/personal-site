import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Articles extends Component {
  state = {};

  render() {
    return (
      <div className="articles">
        <div className="articles__title">
          Articles
        </div>
        <div className="articles__content">
          <Link to="articles/npm-publish" className="articles__content-item">
            <div className="articles__content-item-wrapper">
              <img className="articles__content-item__logo" src="http://yeoman.io/static/npm-logo.aad1b4abba.png" alt=""/>
              <div className="articles__content-item__title">
                Publish a package on NPM!
              </div>
            </div>
            <div className="articles__content-item__summary">
              A short tutorial on how to publish and version an npm package.
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

Articles.displayName = 'Articles';

Articles.propTypes = {};
