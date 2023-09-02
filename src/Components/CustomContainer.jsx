import React from 'react';

const CustomContainer = ({children}) => {
    return (
        <div className='max-w-[90%] mx-auto md:px-8 lg-px-8 sm-px-4'>
            {children}
        </div>
    );
};

export default CustomContainer;