import React, { useState } from 'react';

const Inventory = ({ item }) => {
    const { name, image, shortDescription, price, quantity, manufracturer } = item;
    const text = shortDescription;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }
    return (
        <div role="button" className='col-4 bg-image hover-zoom'>
            <div className='border border-2 border-dark rounded p-3 position-relative'>
                <h3 className='fs-6 text-center'>{name}</h3>
                <div class="p-4">
                    <img className="rounded w-100" src={image} alt='inventoryItem' />
                </div>
                <p className='text-dark fw-light m-0'>
                    {
                        isReadMore ? text.slice(0, 25) : text
                    }
                    <span style={{ color: "#67696A" }} className='fw-bold fs-6 font-monospace' onClick={toggleReadMore}>
                        {isReadMore ? "...Read More" : "Show Less"}
                    </span>
                </p>
                <div className='p-2'>
                    <div className='mb-5'>
                        <div className='d-flex justify-content-between align-items-center py-3'>
                            <p className='w-50 my-auto'>Price : </p><span style={{color: '#BF5737'}} className='text-center rounded font-monospace w-50 fw-bold fs-4'>{price}€</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='w-50 my-auto'>Quantity : </p><input className='text-center rounded font-monospace w-50 fw-bold' style={{ border: '2px solid #BF5737' }} type="number" value={quantity} name="quantity" />
                        </div>
                    </div>
                    <h4>{manufracturer}</h4>
                </div>
                <button className='w-75 mb-2 position-absolute bottom-0 start-50 translate-middle-x rounded py-2 fw-bold border border-dark border-2 btn btn-dark'>Stock Update</button>
            </div>
        </div>
    );
};

export default Inventory;