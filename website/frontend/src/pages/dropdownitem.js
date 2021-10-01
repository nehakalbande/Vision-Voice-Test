import React from "react";
import '../css/dropdown.css'

const DropDownItem = (props) => {
    return (
        <a href="#" className="menu-item">
            
            {props.children}
        </a>
    );
};

export default DropDownItem;
//<span className = "icon-button">{props.icon}</span>