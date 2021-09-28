import React, { useState } from "react";
import "../css/NavItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import firebase from "../config/firebase-config";
import google from "../config/auth-method";

class NavItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      auth: false
    };
  }
  
  render() {
    const { open } = this.state.open;
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
              
              {this.state.auth?(
                <button
                  className="navlist-item btn"
                  onClick={this._handleLogoutClick}
                >
                  Logout
                </button>
              ):(
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
    firebase.auth().signInWithPopup(google).then((result)=>{
      const token = result.credential.accessToken;
      const user = result.user;
      this.setState({auth: true})
      console.log(this.state.auth);
    }).catch((err)=>{
      console.log(err);
    })
  };
  _handleLogoutClick = () => {
    firebase.auth().signOut().then(()=>{
      this.setState({auth: false});
      console.log("Logged out!")
    }).catch((err)=>{
      console.log(err);
    })
  };
}

export default NavItems;
