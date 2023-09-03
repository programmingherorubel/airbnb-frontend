import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetRoomsQuery } from '../app/api/apiSlice';
import CustomContainer from './CustomContainer';
import Error from './Error';
import Loading from './Loading';
import Room from './Room';
import ExtraSearchBar from './ExtraSearchBar';

const Rooms = () => {
    const categoryData = useSelector((state) => state.category.category)
    const {price} = useSelector((state)=>state.price)
    let highValue
    const [inputValue,setInputValue]=useState('')
    

const allValue = {
    categoryData,
    price,
    inputValue
}



const { isError, isLoading, data } = useGetRoomsQuery(allValue)
    
    
    let content = null

    if(isLoading ){
        content = <Loading/>
    }
    if(!isLoading && isError){
        content = <Error error='thare was an Error'/>
    }
    if(!isLoading && !isError && data.length === 0){
        content = <Error error='Data Not Found'/>
    }

    
     highValue = data?.reduce((minPrice, room) => {
        return room.price > minPrice ? room.price : minPrice;
      }, 0);
    

    if (!isLoading && !isError && data.length > 0) {
        content = (
          <div className='py-8 grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4'>
            {data.map((item, index) => (
              <Room key={index} item={item}></Room>
            ))}
          </div>
        );
      }
    return (
        <CustomContainer>
          <ExtraSearchBar setInputValue={setInputValue}/>
            {content}
        </CustomContainer>
    );
};

export default Rooms;