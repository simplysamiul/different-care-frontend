import React from 'react';
import headerImg from '../../assestes/img/header-1.png';
import '../../styles/Header.css';
import '../../styles/customeBtn.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header-area'>
            <div className="header-container">
                <div className="header-content">
                    <div className="header-text">
                        <h1>We are a reliable  <br /> partner</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi modi laborum enim minus numquam!</p>
                        <div className='custome-btn'>
                            <Link to="/doctor"><button>Find Doctor</button></Link>
                        </div>
                    </div>
                    <div className="header-img">
                        <img src={headerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;