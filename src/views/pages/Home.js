import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import WhyUs from '../components/WhyUs';
import HomeServices from '../components/HomeServices';

const Home = () => {
    return (
        <>
            <Header />
            <About />
            <HomeServices />
            <WhyUs />
        </>
    );
};

export default Home;