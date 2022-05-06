import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ManageItems = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);
    const text = item.details;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    // const controlQuantity = e => {
    //     const {quantity, ...rest} = item;
    //     const newQuantiy = e.target.value;
    //     const newItem = {quantity: newQuantiy, ...rest}
    //     setItem(newItem);
    // };
    const handleQuantity = e => {
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
        const quantity = parseInt(e.target.restockQuantity.value) + item.quantity;
        const updatedStock = { quantity };
        console.log(updatedStock)
        const url = `http://localhost:5000/inventory/${itemId}`;
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
        
    };
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-5 d-flex align-items-center'>
                    <div className='border border-2 border-dark rounded p-5'>
                        <form onSubmit={handleRestock}>
                            <input className='py-2 my-2' type="number" name="restockQuantity" placeholder='Quantity' id="" />
                            <button className='my-2 rounded py-2 fw-bold border border-dark border-3 ms-2 btn btn-dark'>Stock Update</button>
                        </form>
                    </div>
                </div>
                <div className='col-7'>
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
                            <div className='p-2 mb-3'>
                                <div className='mb-0'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='w-50 my-auto'>Item ID : </p><span style={{ color: '#BF5737' }} className='text-end rounded font-monospace w-50 fw-bold fs-6'>{item._id}€</span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='w-50 my-auto'>Price : </p><span style={{ color: '#BF5737' }} className='text-end rounded font-monospace w-50 fw-bold fs-4'>{item.price}€</span>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='w-50 my-auto'>Manufacturer : </p><h4 style={{ color: '#BF5737' }} className='text-center'>{item.manufacturer}</h4>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='w-50 my-auto'>Sold : </p><h4 style={{ color: '#BF5737' }} className='text-center'>{item.sold}</h4>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleQuantity}>
                                <div className='d-flex justify-content-between align-items-center p-2 mb-4'>
                                    <p className='w-50 my-auto'>Quantity : </p><input  className='text-center rounded font-monospace w-50 fw-bold' style={{ border: '2px solid #BF5737' }} type="number" value={item.quantity} name="quantity" readOnly/>
                                </div>
                                <button className='w-75 my-2 position-absolute bottom-0 start-50 translate-middle-x rounded py-2 fw-bold border border-dark border-2 btn btn-dark'>Delivered</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;