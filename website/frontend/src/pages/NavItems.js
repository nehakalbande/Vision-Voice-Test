import React, { useState } from "react";
import "../css/NavItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class NavItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    const { authenticated } = this.props;
    return (
      <>
        <FontAwesomeIcon
          icon={open ? faTimes : faBars}
          className="icons"
          onClick={() => this.setState({ open: !open })}
        />
        <div className="nav-items">
          <ul className={open ? "navlist active" : "navlist mob"}>
            <li className="navlist-li">
              <a href="/eyetest" className="navlist-item">
                VisionTest
              </a>
            </li>
            <li className="navlist-li">
              <a href="/auraltest" className="navlist-item">
                Aural Test
              </a>
            </li>
            <li className="navlist-li ">
              <a href="/results" className="navlist-item disabled">
                Get Results
              </a>
            </li>
            <li className="navlist-li">
              {authenticated ? (
                <button
                  className="navlist-item btn"
                  onClick={this._handleLogutClick}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="navlist-item btn"
                  onClick={this._handleSignInClick}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </>
    );
  }

  _handleSignInClick = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  _handleLogoutClick = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    this.props._handleNotAuthenticated();
  };
}

export default NavItems;
