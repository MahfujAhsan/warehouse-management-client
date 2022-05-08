import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ManageInventories = () => {
    const [items, setIteams] = useState([]);
    useEffect(() => {
        const url = 'https://powerful-dawn-08831.herokuapp.com/inventory';
        <Spinner/>
        fetch(url)
            .then(res => res.json())
            .then(data => setIteams(data))
    }, []);
    const handleItemDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            console.log(id)
            const url = `https://powerful-dawn-08831.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingItems = items.filter(item => item._id !== id);
                        setIteams(remainingItems);
                    }
                })
        }
    };
    return (
        <div className='container'>
            <section className='row gy-3 gy-md-5 my-md-4'>
                {
                    items.map(item =>
                        <div key={item._id} role="button" className='col-12 col-md-4 text-center bg-image hover-zoom position-relative'>
                            <div style={{ maxHeight: "500px" }} className='border border-2 p-3'>
                                <h6>{item.name}</h6>
                                <div className='p-5'>
                                    <img className='w-50' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h6>Price: <span className='text-danger fs-5'>€ {item.price}</span></h6>
                                </div>
                                <div>
                                    <h6>Quantity: <span className='text-danger fs-5'>{item.quantity}</span></h6>
                                </div>
                                <div>
                                    <h6>Quantity: <span className='text-danger fs-5'>{item.email}</span></h6>
                                </div>
                                <button onClick={() => handleItemDelete(item._id)} className='w-75 mb-2 position-absolute bottom-0 start-50 translate-middle-x rounded py-2 fw-bold border border-dark border-2 btn btn-dark'>Delete</button>
                            </div>
                        </div>)
                }
            </section>
            <div className='text-center my-5 d-flex flex-column'>
                <Link style={{ border: '3px solid #BF5737'}} className='w-25 mx-auto text-decoration-none px-5 py-3 rounded text-dark fw-bold fs-6 shadow-lg' to="/addItems">Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventories;