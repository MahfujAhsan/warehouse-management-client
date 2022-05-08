import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = 'https://powerful-dawn-08831.herokuapp.com/inventory';
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2>My Items: {items.length} </h2>
        </div>
    );
};

export default MyItems;