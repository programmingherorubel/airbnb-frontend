import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Profile from './Profile';

const Navbar = () => {
    return (
        <div className='z-[1000] w-full xl:px-20 lg:px-16 md:px-10 sm:px-5 px-2 shadow-md bg-white fixed '>
            <div className='py-4 border-b-[2px]'>
                <div className='flex justify-between items-center gap-3 sm:gap-0'>
                    <div>
                        <Link to='/'><Logo/></Link>
                    </div>
                    <div><SearchBar></SearchBar></div>
                    <div><Profile /></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;