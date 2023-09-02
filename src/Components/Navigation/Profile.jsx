import React from 'react';

const Profile = () => {
    return (
        <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
        Airbnb your home <button><i className="fa-solid fa-globe text-gray-700" style={{fontSize:'20px'}}></i></button>
        </div>
        <div
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          {/* <AiOutlineMenu /> */}
          <div className='flex gap-4'>
          <i className="fa-solid fa-bars text-gray-700"></i>

        <i className="fa-solid fa-user text-gray-700"></i>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;