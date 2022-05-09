import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../components/custome/Loader';
// import Home from '../pages/Home';


// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Home = React.lazy(()=> import('../pages/Home'));
const Body = () => {
    return (
        <Suspense fallback={<Loader />}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </Suspense>
    );
};

export default Body;