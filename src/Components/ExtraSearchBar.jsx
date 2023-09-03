import React from 'react';

const ExtraSearchBar = ({setInputValue}) => {

    return (
        <div className='w-[70%]  mx-auto'>
            <input onChange={(e)=>setInputValue(e.target.value)} className='w-full p-3 border' />
            </div>
    );
};

export default ExtraSearchBar;