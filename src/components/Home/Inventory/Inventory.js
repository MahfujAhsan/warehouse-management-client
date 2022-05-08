import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ item }) => {
    const { _id, name, image, shortDescription, price, quantity } = item;
    const navigate = useNavigate();

    const navigateToItemDetails = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div role="button" className='col-12 col-md-4 bg-image hover-zoom'>
            <div style={{ maxHeight: "800px" }} className='border border-2 border-dark rounded p-3 position-relative'>
                <h3 className='fs-5 fs-md-6 text-center'>{name}</h3>
                <div className="p-4">
                    <img className="rounded w-100" src={image} alt='inventoryItem' />
                </div>
                <p className='text-dark fw-light m-0'>
                    {shortDescription}
                </p>
                <div className='p-2'>
                    <div className='mb-5'>
                        <div className='d-flex justify-content-between align-items-center pb-1'>
                            <p className='w-50 my-auto'>Price : </p><span style={{ color: '#BF5737' }} className='text-end rounded font-monospace w-50 fw-bold fs-6 fs-md-5'>{price}€</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pb-1'>
                            <p className='w-40 my-auto'>Manufacturer : </p><h4 style={{ color: '#BF5737' }} className='text-center fs-6 m-0 fs-md-5'>{item.manufacturer}</h4>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='w-50 my-auto'>Quantity : </p><input className='text-center rounded font-monospace w-50 py-0 fw-bold' style={{ border: '2px solid #BF5737' }} type="number" value={quantity} name="quantity" />
                        </div>
                    </div>
                </div>
                <button onClick={() => navigateToItemDetails(_id)} className='w-75 mb-2 position-absolute bottom-0 start-50 translate-middle-x rounded py-2 fw-bold border border-dark border-2 btn btn-dark'>Stock Update</button>
            </div>
        </div>
    );
};

export default Inventory;