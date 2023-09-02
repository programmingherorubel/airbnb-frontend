import React, { useEffect, useState } from 'react';
import Category from '../Components/Category';
import Rooms from '../Components/Rooms';

const Home = () => {
    const [roomData, setRoomData] = useState([]);
    const [selectCategory, setSelectCategory] = useState('');
    const prices = roomData.map(item => item.price);
    const lowestValue = Math.min(...prices);
    const highValue = Math.max(...prices);
    const [usrData,setUserData] = useState(100)
    

    const userOnchenge = (e)=>{
        setUserData(e.target.value)
    }

    console.log(usrData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:9000/rooms/?category=${selectCategory}&price=${usrData}`
                );
                const data = await response.json();
                setRoomData(data);
            } catch (error) {
                console.error('Error fetching room data:', error);
            }
        };

        fetchData();
    }, [selectCategory,usrData]);


    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await fetch('http://localhost:9000/rooms');
                const data = await response.json();
                setRoomData(data);
            } catch (error) {
                console.error('Error fetching initial room data:', error);
            }
        };
        fetchInitialData();
    }, []);







    return (
        <div>
            <Category userOnchenge={userOnchenge} usrData={usrData} lowestValue={lowestValue} highValue={highValue} setSelectCategory={setSelectCategory} />
            <Rooms roomData={roomData} />
        </div>
    );
};

export default Home;
