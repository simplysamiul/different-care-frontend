import React from 'react';
import '../../styles/WhyUS.css';
import CustomeAccordion from './custome/CustomeAccordion';
import whyusImage from '../../assestes/img/why_us.png';

const WhyUs = () => {
    return (
        <div className='whyus-area'>
            <div className="whyus-title">
            <h1>Why Choose Us ?</h1>
            </div>
           <div className='whyus-container'>
                <div className="whyus-img">
                    <img src={whyusImage} alt="" />
                </div>
                <div>
                    <CustomeAccordion />
                </div>
            </div>
        </div>
    );
};

export default WhyUs;