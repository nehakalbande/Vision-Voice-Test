import React from "react";
import "../css/Navbar.css";
import NavItems from "./NavItems";
import logo from "../assets/blaze.png";

const Navbar = (props) => {
    return (
        <div className='nav-container'>
            <div className='main-nav'>
                <div className="row">
                <div class="col-sm-3">
                <div className='logo'>
                    <a target={"_blank"} href='/'>
                        <img src={logo} alt='Blaze' className='logo-img' />
                    </a>
                </div>
                </div>
                <div className="col-sm-3 logo-text">
                    <span>Vision Voice</span>
                </div>
                </div>
                <NavItems authenticated={props.authenticated} handleNotAuthenticated={props._handleNotAuthenticated} />
            </div>
        </div>
    );
};

export default Navbar;
