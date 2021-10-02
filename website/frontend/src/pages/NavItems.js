import React, { useState } from "react";
import "../css/NavItems.css";
import "../css/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import firebase from "../config/firebase-config";
import google from "../config/auth-method";
import DropDownItem from "./dropdownitem";

class NavItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dropdown: false,
    };
  }
  componentDidMount(){
    console.log(this.state.dropdown);
  }


  render() {
    const { open } = this.state.open;
    const { authenticated } = this.props;
    const { username } = this.props;

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
              <a target={"_blank"} href="/eyetest" className="navlist-item">
                VisionTest
              </a>
            </li>
            <li className="navlist-li">
              <a target={"_blank"} href="/auraltest" className="navlist-item">
                Aural Test
              </a>
            </li>
            <li className="navlist-li ">
              <a target={"_blank"} href="/results" className="navlist-item disabled">
                Get Results
              </a>
            </li>
            <li className="navlist-li">
              {authenticated ? (
                <div>
                <a href="#" onClick={this._handleDropdown}>
                <div className="navlist-item">
                  Hi {username} 
                </div>
                </a>
                {this.state.dropdown &&
                    <div className="dropdown">
                      <DropDownItem>
                        <button
                          className="navlist-item btn"
                          onClick={this._handleLogoutClick}
                        >
                          Logout
                        </button>
                      </DropDownItem>
                    </div>
                  }
                </div>
                
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
    firebase.auth().signInWithPopup(google).then((result)=>{
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(this.props.username);
    }).catch((err)=>{
      console.log(err);
    })
  };
  _handleLogoutClick = () => {
    firebase.auth().signOut().then(()=>{
      console.log("Logged out!")
    }).catch((err)=>{
      console.log(err);
    })
  };
  _handleDropdown = () => {
    this.setState({dropdown: !this.state.dropdown})
  };
}

export default NavItems;
