import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import menuLogo from '../../../assestes/img/menu_logo.jpg';
import '../../../styles/Menubar.css';

const Menubar = () => {
    return (
        <div className="menu-area">
            <div className="menu-container">
                <div className="menu-content">
                    <div className="menu-logo">
                        <Link to="/"><img src={menuLogo} alt="" /></Link>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/home" >Home</NavLink>
                        <NavLink to="/services" >Services</NavLink>
                        <NavLink to="/doctors" >Doctors</NavLink>
                        <NavLink to="/appoinments" >Appoinments</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;