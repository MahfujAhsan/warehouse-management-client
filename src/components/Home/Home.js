import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBG from "../../media/hero-section-bg.jpg";
import OurUniverse from '../OurUniverse/OurUniverse';
import Spinner from '../Spinner/Spinner';
import Creation from './Inventory/Creation';
import Inventory from './Inventory/Inventory';
// const axios = require('axios').default;

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = 'https://powerful-dawn-08831.herokuapp.com/inventory';
        <Spinner />
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='container my-4'>
            <section>
                <img className='img-fluid rounded' src={heroBG} alt="heroBG" />
            </section>
            <h3 style={{ letterSpacing: "0.1rem", color: "#BF5737" }} className='text-center text-uppercase mt-4 mt-md-5 fw-bold font-monospace fs-6 fs-3'>Collection Matières</h3>
            <p className='text-dark fw-light mt-4 w-75 mx-auto text-center'>
                Through the years, driven by the quest to capture the most emblematic perfumery raw materials on Earth, Les Eléments collection has offered a unique, unending journey of scent through execptional creation embodying Grasse's most venerable tradition.
            </p>
            <section className='container row gy-3 gy-md-5 my-1'>
                {
                    items.slice(0, 6).map(item => <Inventory key={item._id} item={item} />)
                }
            </section>
            <div className='text-center my-5'>
                <Link style={{ border: '3px solid #BF5737' }} to="/manageInventories" className='w-25 mx-auto text-decoration-none px-5 py-3 rounded text-dark fw-bold fs-5 shadow-lg'>Manage Inventories</Link>
            </div>
            <section className='my-5'>
                <Creation />
            </section>
            <section><OurUniverse/></section>
        </div>
    );
};

export default Home;