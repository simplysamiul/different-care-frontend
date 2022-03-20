import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Footer.css';
const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="footer-container">
                <div className="footer-content">
                <div className="footer-info">
                    <h2>Different Care</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo molestias nostrum nulla accusamus commodi pariatur quis id ratione veritatis magnam laboriosam laudantium, et iusto eaque.</p>
                </div>
                <div className="footer-services">
                    <h3>Service Provide</h3>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> Neurology</Link>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> Cardiology</Link>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> Surgery</Link>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> Dentist</Link>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> Orthopedic</Link>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> X-ray</Link>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> Dental</Link>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> Dermatologist</Link>
                </div>
                <div className="poor-fund">
                    <h3>Poor Fund</h3>
                </div>
                <div className="footer-address">
                    <h3>Address</h3>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;