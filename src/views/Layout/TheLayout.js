import React from 'react';
import Body from '../body/Body';
import Footer from '../components/shared/Footer';
import Menubar from '../components/shared/Menubar';

const TheLayout = () => {
    return (
        <>
            <div className="menubar">
                <Menubar />
            </div>
            <div className="body">
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
};

export default TheLayout;