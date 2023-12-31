import React from 'react';

const Room = ({item}) => {
    return (
        <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='aspect-square w-full relative overflow-hidden rounded-xl'>
          <img className=' object-cover  h-full  w-full 'src={item.image}alt='Room'/>
          <div
            className=' absolute top-3 right-3'>
          </div>
        </div>
        <div className='font-semibold text-lg'>{item.location}</div>
        <div className='font-light text-neutral-500'>
          {item.dateRange}
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {item.price}</div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </div>
    );
};

export default Room;