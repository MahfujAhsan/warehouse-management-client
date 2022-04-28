import React from 'react';
import heroBG from "../../media/hero-section-bg.jpg";

const Home = () => {
    return (
        <div className='container'>
            <div>
                <img className='img-fluid' src={heroBG} alt="heroBG" />
            </div>
        </div>
    );
};

export default Home;