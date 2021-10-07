import React from "react";
import "../css/Navbar.css";
import NavItems from "./NavItems";
import logo from "../assets/blaze.png";
import { Link } from "react-router-dom";
const Navbar = (props) => {
    
    return (
        <div className='nav-container'>
            <div className='main-nav'>
                <div className="row">
                <div className="col-sm-3">
                <div className='logo'>
                    <Link target="_blank" to='/'>
                        <img src={logo} alt='Blaze' className='logo-img' />
                    </Link>
                </div>
                </div>
                <div className="col-sm-3 logo-text">
                    <span>Vision Voice</span>
                </div>
                </div>
                <NavItems theme={props.theme} toggleTheme={props.toggleTheme}/>
            </div>
        </div>
    );
};

export default Navbar;
