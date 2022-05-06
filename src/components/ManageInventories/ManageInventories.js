import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [items, setIteams] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/inventory';
        fetch(url)
            .then(res => res.json())
            .then(data => setIteams(data))
    }, []);
    return (
        <div className='container'>
            <section className='container row gy-5 mt-5'>
                <div>
                    {
                        items.map(item => <p className='col-4'>{item._id} {item.name}</p>)
                    }
                </div>
            </section>
        </div>
    );
};

export default ManageInventories;