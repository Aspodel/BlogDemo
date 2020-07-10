import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header-bar">
        <div className="header-left">
          <span className="logo">To Techs</span>
          <div className="header-nav">
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Technology</a>
            </li>
            <li>
              <a href="/">Space</a>
            </li>
            <li>
              <a href="/">Nasa</a>
            </li>
            <li>
              <a href="/">Astronomy</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
          </div>
        </div>
        <a className="join-us" href="/">
          Join Us
        </a>
      </div>
    );
  }
}

export default Header;
