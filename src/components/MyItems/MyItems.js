import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    console.log(auth.currentUser)
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://powerful-dawn-08831.herokuapp.com/myItems?email=${email}`;
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