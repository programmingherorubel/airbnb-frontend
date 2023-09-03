import React, { useEffect, useState } from 'react';
import Category from '../Components/Category';
import Rooms from '../Components/Rooms';

const Home = () => {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(
    //               
    //             );
    //             const data = await response.json();
    //             setRoomData(data);
    //         } catch (error) {
    //             console.error('Error fetching room data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [selectCategory,usrData]);


    return (
        <div>
            <Category  />
            <Rooms  />
        </div>
    );
};

export default Home;
