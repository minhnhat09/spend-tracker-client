import React, { Component } from "react";
import User from "../images/user.jpg";
class Landing extends Component {
  render() {
    return (
      <div className="demo-layout">
        <div className="row">
          <div className="sidebar col s3">
            <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
              <header className="demo-drawer-header">
                <img src={User} className="demo-avatar" alt="" />
                <div className="demo-avatar-dropdown">
                  <span>
                    hello@example.com<i className="material-icons right">
                      more_vert
                    </i>
                  </span>
                </div>
              </header>
              <div className="collection demo-navigation mdl-navigation mdl-color--blue-grey-800">
                <a className="collection-item mdl-navigation__link" href="">
                  <i
                    className="mdl-color-text--blue-grey-400 material-icons"
                    role="presentation"
                  >
                    help_outline
                  </i>
                  <span className="visuallyhidden">Help</span>
                </a>
              </div>
            </div>
          </div>
          <div className="main-content col s9 offset-s3">
            <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
              <nav>
                <div className="nav-wrapper">
                  <a href="#" className="brand-logo">
                    Home
                  </a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                      <a href="#">
                        <i className="material-icons">search</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="material-icons right">more_vert</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
