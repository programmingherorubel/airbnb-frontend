import React from 'react';
import Navbar from './Navigation/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
           <Navbar />
           <div className='pt-24'><Outlet/></div>
           <p className='2xl'>Footer</p>
        </>
    );
};

export default Main;