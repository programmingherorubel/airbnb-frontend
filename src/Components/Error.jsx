import React from 'react';

const Error = ({error}) => {
    return (
        <div>
            <h6 style={{color:'red',textAlign:'center'}}>{error}</h6>
        </div>
    );
};

export default Error;