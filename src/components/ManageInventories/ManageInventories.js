import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [items, setIteams] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/inventory';
        fetch(url)
            .then(res => res.json())
            .then(data => setIteams(data))
    }, []);
    const handleItemDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if (proceed) {
            console.log(id)
            const url = `http://localhost:5000/inventory/${id}`
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
    }
    return (
        <div className='container'>
            <section className='row gy-5 my-4'>
                {
                    items.map(item =>
                        <div key={item._id} role="button" className='col-4 text-center bg-image hover-zoom position-relative'>
                            <div style={{ height: "500px" }} className='border border-2 p-3'>
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
                                <button onClick={() => handleItemDelete(item._id)} className='w-75 mb-2 position-absolute bottom-0 start-50 translate-middle-x rounded py-2 fw-bold border border-dark border-2 btn btn-dark'>Delete</button>
                            </div>
                        </div>)
                }
            </section>
            <div className='text-center'>
                <Link to="/addItems" className='text-center'>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventories;