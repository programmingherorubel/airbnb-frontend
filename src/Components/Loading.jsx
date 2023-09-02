import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div style={{width:'100%',height:'60vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <ScaleLoader color="#FF385C" />
        </div>
    );
};

export default Loading;