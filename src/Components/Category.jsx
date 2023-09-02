import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CustomContainer from './CustomContainer';
import Modal from './Modal';


const Category = ({setSelectCategory,highValue,lowestValue,userOnchenge,usrData}) => {
    const [categoryData,setCategoryData]=useState([])
    
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
    useEffect(()=>{
        fetch(`http://localhost:9000/category`)
        .then(res => res.json())
        .then(data => setCategoryData(data))
    },[])

  
    return (
        <CustomContainer>
            <div className='flex justify-center items-center'>
                <div className='m-6 w-[85%]'>
                    <Slider {...settings}>
                        {
                            categoryData.map((item,index)=><div onClick={()=>setSelectCategory(item.label)} className='text-center text-gray-700' key={index}>
                                <i className={item.icon}></i>
                                <p><b>{item.label}</b></p>
                            </div>)
                        }
                    </Slider>
                </div>
                <div className='w-[15%] mx-auto text-center '>
                    <Modal usrData={usrData} userOnchenge={userOnchenge} lowestValue={lowestValue}highValue={highValue} />
                </div>
            </div>
        </CustomContainer>
    );
};

export default Category;