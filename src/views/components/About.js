import React from 'react';
import aboutOne from '../../assestes/img/about-1.jpg';
import aboutTwo from '../../assestes/img/about-2.jpg';
import aboutThree from '../../assestes/img/about-3.jpg';
import '../../styles/About.css';

const About = () => {
    return (
        <div className='about-area'>
            <div className="about-contianer">
                <div className="about-content">
                    <div className="about-img">
                        <img className='img-one' src={aboutOne} alt="" />
                        <img className='img-two' src={aboutTwo} alt="" />
                        <img className='img-three' src={aboutThree} alt="" />
                        <img className='img-four' src={aboutOne} alt="" />
                    </div>
                    <div className="about-text">
                        <h1>About Us</h1>
                        <h2>Welcome to Different-Care</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br /> <br />
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;