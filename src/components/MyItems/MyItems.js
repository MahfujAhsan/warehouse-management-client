import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/inventory?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data)
        }
        getItems();
    }, [user])
    return (
        <div>
            <h2>My Items: {items.length}</h2>
        </div>
    );
};

export default MyItems;