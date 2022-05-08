import React from 'react';
import nFound from "../../media/notFound.gif"

const NotFound = () => {
    return (
        <div className='w-100 mx-auto'>
            <img style={{maxHeight: "520px"}} className='w-100 mx-auto' src={nFound} alt="" />
        </div>
    );
};

export default NotFound;