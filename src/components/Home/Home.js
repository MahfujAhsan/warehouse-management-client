import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBG from "../../media/hero-section-bg.jpg";
import Spinner from '../Spinner/Spinner';
import Inventory from './Inventory/Inventory';
// const axios = require('axios').default;

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = 'https://powerful-dawn-08831.herokuapp.com/inventory';
        <Spinner/>
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='container my-4'>
            <section>
                <img className='img-fluid rounded' src={heroBG} alt="heroBG" />
            </section>
            <section className='container row gy-3 gy-md-5 mt-3 mt-md-5'>
                {
                    items.slice(0, 6).map(item => <Inventory key={item._id} item={item} />)
                }
            </section>
            <div className='text-center my-5'>
                <Link style={{ border: '3px solid #BF5737'}} to="/manageInventories" className='w-25 mx-auto text-decoration-none px-5 py-3 rounded text-dark fw-bold fs-5 shadow-lg'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Home;