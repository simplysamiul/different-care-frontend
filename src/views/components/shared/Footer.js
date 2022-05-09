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
                <div className="footer-services footer-link">
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
                <div className="poor-fund footer-link">
                    <h3>Poor Fund</h3>
                    <p><i className="fa-solid fa-angles-right"></i>The Smile Foundation</p>
                    <p><i className="fa-solid fa-angles-right"></i>Logistics Centre</p>
                    <p><i className="fa-solid fa-angles-right"></i>Feed the Babies</p>
                    <p><i className="fa-solid fa-angles-right"></i>Helping Hands Club</p>
                    <p><i className="fa-solid fa-angles-right"></i>Hard Knocks School</p>
                    <p><i className="fa-solid fa-angles-right"></i>Sisters of Charity</p>
                    <p><i className="fa-solid fa-angles-right"></i>Heartland Institution</p>
                </div>
                <div className="footer-menu footer-link">
                    <h3>Our All Thing</h3>
                    <Link to="/home"><i className="fa-solid fa-angles-right"></i> Home</Link>
                    <Link to="/services"><i className="fa-solid fa-angles-right"></i> Services</Link>
                    <Link to="/doctors"><i className="fa-solid fa-angles-right"></i> Doctors</Link>
                    <Link to="/appoinments"><i className="fa-solid fa-angles-right"></i> Appoinments</Link>
                </div>
                <div className="footer-address footer-link">
                    <h3>Address</h3>
                    <p><i class="fa-solid fa-location-dot"></i> College-Gate, Tongi, Gazipur, Dhaka-1216, Bangladesh</p>
                    <p><i class="fa-solid fa-phone"></i> +880-1755-800-646</p>
                    <p><i class="fa-solid fa-envelope"></i> care@support.com</p>
                </div>
                </div>
                <div className="copy-right">
                <p>Copyright © reserved different.care@owner.com <small>|| Md samiul Islam</small></p>
                <div className="social-icon">
                <i className="fa-brands fa-dribbble-square"></i>
                <i className="fa-brands fa-instagram-square"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-twitter-square"></i>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;