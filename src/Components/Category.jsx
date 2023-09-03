import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { useGetCategoryQuery } from '../app/api/apiSlice';
import { getCetegory } from '../app/api/featchers/categorySlice/categorySlice';
import CustomContainer from './CustomContainer';
import Error from './Error';
import Loading from './Loading';
import Modal from './Modal';


const Category = () => {
    const dispatch = useDispatch()
    const categoryData = useSelector((state)=> state.category.category)
    const [selectCategory,setSelectCategory]=useState('')
    const {isError,isLoading,data} = useGetCategoryQuery()
    
    
    const categoryHandeler = (info)=>{
        dispatch(getCetegory(info))
    }
  
   
    var settings = {
        arrows: true,
        // centerMode: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
   let content = null

    if(isLoading){
        content = <Loading/>
    }
    if(!isLoading && isError){
        content = <Error error='thare was an Error'/>
    }
    if(!isLoading && !isError && data.length === 0){
        content = <Error error='Data Not Found'/>
    }

    if(!isLoading && !isError && data.length >0){
        content =  <div className='m-6 w-[85%]'>
        <Slider {...settings}>
            {
                data?.map((item,index)=><div onClick={()=>categoryHandeler(item.label)} className='text-center text-gray-700' key={index}>
                    <i className={item.icon}></i>
                    <p><b>{item.label}</b></p>
                </div>)
            }
        </Slider>
    </div>
    }
  
    return (
        <CustomContainer>
            <div className='flex justify-center items-center'>
               {content}
                <div className='w-[15%] mx-auto text-center '>
                    <Modal  />
                </div>
            </div>
        </CustomContainer>
    );
};

export default Category;