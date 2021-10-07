import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavItems.css";
import "../css/dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import firebase from "../config/firebase-config";
import google from "../config/auth-method";
import DropDownItem from "./dropdownitem";
import { useGlobalContext } from "../reducer/context";

const NavItems = (props) => {
  const renderIcon = ()=>{
    if(props.theme==="dark"){
      return <i class="far fa-moon fa-2x" style={{color:"white", paddingRight:"20px"}} onClick={()=>props.toggleTheme()}></i>
    }
    return <i class="far fa-sun fa-2x" style={{color:"white", paddingRight:"20px"}} onClick={()=>props.toggleTheme()}></i>
  }
  const [open, setOpen] = useState(false);
  const {
    userName,
    authenticated,
    dispatch,
    isDropDownOpen,
  } = useGlobalContext();
  const _handleSignInClick = () => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then((result) => {
        const token = result.credential.accessToken;
        const {
          email,
          given_name,
          picture,
        } = result.additionalUserInfo.profile;
        dispatch({
          type: "SIGN_IN_USER",
          payload: { userName: given_name, email, profileImg: picture },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const _handleLogoutClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT_USER" });
        console.log("Logged out!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _handleDropDownClick = () => {
    dispatch({ type: "Toggle_DropDown" });
  };

  return (
    <>
      <FontAwesomeIcon
        icon={open ? faTimes : faBars}
        className="icons"
        onClick={() => setOpen(!open)}
      />
      <div className="nav-items">
        <ul className={open ? "navlist active" : "navlist mob"}>
          <li className="navlist-li">
            <Link to="/eyetest" className="navlist-item">
              VisionTest
            </Link>
          </li>
          <li className="navlist-li">
            <Link to="/auraltest" className="navlist-item">
              Aural Test
            </Link>
          </li>
          <li className="navlist-li ">
            <Link to="/results" className="navlist-item disabled">
              Get Results
            </Link>
          </li>
          <li className="navlist-li ">
            <a href="/contact" target={"_blank"} className="navlist-item">
              Contact Us
            </a>
          </li>
          <li className="navlist-li">
            {authenticated ? (
              <div>
                <a href="#" className="navlist-item-link" />
                <div
                  className="navlist-item-user"
                  onClick={_handleDropDownClick}
                >
                  Hi {userName}
                </div>

                {isDropDownOpen && (
                  <div className="dropdown">
                    <DropDownItem>
                      <button
                        className="navlist-item btn"
                        onClick={_handleLogoutClick}
                      >
                        Logout
                      </button>
                    </DropDownItem>
                  </div>
                )}
              </div>
            ) : (
              <button className="navlist-item btn" onClick={_handleSignInClick}>
                Login
              </button>
            )}
          </li>
          <li>
            {renderIcon()}
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavItems;
