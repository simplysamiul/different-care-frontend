import React from 'react';
import { NavLink } from 'react-router-dom';
import menuLogo from '../../../assestes/img/menu_logo.jpg';
import '../../../styles/Menubar.css';

const Menubar = () => {
    return (
        <div className="menu-area">
            <div className="menu-container">
                <div className="menu-content">
                    <div className="menu-logo">
                        <img src={menuLogo} alt="" />
                    </div>
                    <div className="menu-items">
                        <NavLink to="/home" activeStyle={{ borderBottom: "2px solid #1b85a0" }}>Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/doctors">Doctors</NavLink>
                        <NavLink to="/appoinments">Appoinments</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;