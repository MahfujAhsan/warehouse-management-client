import React from 'react';

const Spinner = () => {
    return (
        <div className='vh-100 d-flex align-items-center'>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Loading...</button>
        </div>
    );
};

export default Spinner;