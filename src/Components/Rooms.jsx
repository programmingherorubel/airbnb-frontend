import React from 'react';
import CustomContainer from './CustomContainer';
import Room from './Room';

const Rooms = ({roomData}) => {
    
    return (
        <CustomContainer>
            <div className='py-8 grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4'>
                {
                    roomData.map((item,index)=><Room key={index} item={item}></Room>)
                }
            </div>
        </CustomContainer>
    );
};

export default Rooms;