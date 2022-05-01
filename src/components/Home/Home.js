import React, { useEffect, useState } from 'react';
import heroBG from "../../media/hero-section-bg.jpg";
import Inventory from './Inventory/Inventory';
// const axios = require('axios').default;

const Home = () => {
    const [items, setIteams] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/inventory';
        fetch(url)
            .then(res => res.json())
            .then(data => setIteams(data))
    }, []);
    return (
        <div className='container my-4'>
            <section>
                <img className='img-fluid rounded' src={heroBG} alt="heroBG" />
            </section>
            <section className='container row gy-5 mt-5'>
                {
                    items.map(item => <Inventory key={item._id} item={item} />)
                }
            </section>

        </div>
    );
};

export default Home;