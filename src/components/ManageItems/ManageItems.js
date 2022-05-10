import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ManageItems = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    });
    const text = item.details;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const handleQuantity = e => {
        e.preventDefault()
        const quantity = e.target.quantity.value - 1;
        const updatedQuantity = { quantity };
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    };
    const handleRestock = e => {
        e.preventDefault()
        const quantity = parseInt(e.target.restockQuantity.value) + item.quantity;
        const updatedStock = { quantity };
        const url = `http://localhost:5000/inventory/${itemId}`;
        <Spinner />
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.target.reset();
    };
    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col-md-5 vh-md-100 d-flex'>
                    <div className='border border-2 border-dark rounded p-5 d-md-flex justify-content-center align-items-center w-100'>
                        <form className='text-center d-md-flex flex-column w-100' onSubmit={handleRestock}>
                            <input style={{ border: '3px solid #BF5737' }} className='py-2 my-2 ps-2 ps-md-3 text-dark rounded' type="number" name="restockQuantity" placeholder='Quantity' />
                            <button className='my-2 rounded py-2 fw-bold border border-dark border-3 ms-2 btn btn-dark fs-6'>Stock Update</button>
                        </form>
                    </div>
                </div>
                <div className='col-md-7 my-4 my-md-0'>
                    <div role="button" className='bg-image hover-zoom'>
                        <div className='border border-2 border-dark rounded p-5 position-relative'>
                            <h3 className='fs-6 text-center'>{item.name}</h3>
                            <div className="p-4 text-center">
                                <img className="rounded w-50" src={item.image} alt='inventoryItem' />
                            </div>
                            <p className='text-dark fw-light mt-4 text-center'>
                                {
                                    isReadMore ? text?.slice(0, 150) : text
                                }
                                <span style={{ color: "#67696A" }} className='fw-bold fs-6 font-monospace' onClick={toggleReadMore}>
                                    {isReadMore ? "...Read More" : "Show Less"}
                                </span>
                            </p>
                            <div className='p-2'>
                                <div className='mb-0'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='w-50 my-auto fw-bold'>Item ID : </p><span style={{ color: '#BF5737' }} className='text-end rounded font-monospace w-50 fw-bold fs-6'>{item._id}€</span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='w-50 my-0 fw-bold'>Price : </p><span style={{ color: '#BF5737' }} className='text-end rounded font-monospace w-50 fw-bold fs-6'>{item.price} €</span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='w-50 m-0 fw-bold'>Supplier : </p><h4 style={{ color: '#BF5737' }} className='text-center fs-6 text-end m-0'>{item.manufacturer}</h4>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='w-50 my-0 fw-bold'>Sold : </p><h4 style={{ color: '#BF5737' }} className='text-center fs-6 my-0'>{item.sold}</h4>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleQuantity}>
                                <div className='d-flex justify-content-between align-items-center p-2 mb-4'>
                                    <p className='w-50 my-0'>Quantity : </p><input className='text-center rounded font-monospace w-50 fw-bold' style={{ border: '2px solid #BF5737' }} type="number" value={item.quantity ?? ""} name="quantity" readOnly />
                                </div>
                                <button className='w-75 my-2 position-absolute bottom-0 start-50 translate-middle-x rounded py-2 fw-bold border border-dark border-2 btn btn-dark fs-6'>Delivered</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-5 d-flex flex-column'>
                <Link style={{ border: '3px solid #BF5737' }} className='w-25 mx-auto text-decoration-none px-5 py-3 rounded text-dark fw-bold fs-6 shadow-lg' to="/manageInventories">Manage Inventories</Link>
            </div>
        </div>
    );
};

export default ManageItems;