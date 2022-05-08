import React from 'react';
import loadingSpinner from "../../media/dbeb4d96a3ac25b12f5dbe71d3a0bfcc.gif"

const Spinner = () => {
    return (
        <div className='w-50 mx-auto'>
            <img style={{maxHeight: "500px"}} className='w-100 mx-auto' src={loadingSpinner} alt="" />
        </div>
    );
};

export default Spinner;