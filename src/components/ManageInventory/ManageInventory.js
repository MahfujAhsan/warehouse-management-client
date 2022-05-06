import React from 'react';

const ManageInventory = ({ item }) => {
    const { _id, name, image, shortDescription, price, quantity } = item;
    const handleItemDelete = id => {
        const proceed = window.confirm('Are You Sure?');
        if(proceed) {
            console.log(id)
            const url = `http://localhost:5000/inventory/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    
                }
            })
        }
    }
    return (
        <div role="button" className='col-4 bg-image hover-zoom'>
            <div style={{ height: "800px" }} className='border border-2 border-dark rounded p-3 position-relative'>
                <h3 className='fs-6 text-center'>{name}</h3>
                <div className="p-4">
                    <img className="rounded w-100" src={image} alt='inventoryItem' />
                </div>
                <p className='text-dark fw-light m-0'>
                    {shortDescription}
                </p>
                <div className='p-2'>
                    <div className='mb-5'>
                        <div className='d-flex justify-content-between align-items-center pb-1'>
                            <p className='w-50 my-auto'>Price : </p><span style={{ color: '#BF5737' }} className='text-center rounded font-monospace w-50 fw-bold fs-4'>{price}€</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center pb-1'>
                            <p className='w-50 my-auto'>Manufacturer : </p><h4 style={{ color: '#BF5737' }} className='text-center fs-5'>{item.manufacturer}</h4>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='w-50 my-auto'>Quantity : </p><input className='text-center rounded font-monospace w-50 fw-bold' style={{ border: '2px solid #BF5737' }} type="number" value={quantity} name="quantity" />
                        </div>
                    </div>
                </div>
                <button onClick={() => handleItemDelete(item._id)} className='w-75 mb-2 position-absolute bottom-0 start-50 translate-middle-x rounded py-2 fw-bold border border-dark border-2 btn btn-dark'>Delete</button>
            </div>
        </div>
    );
};

export default ManageInventory;