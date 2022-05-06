import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/inventory`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4' placeholder='Item Name' {...register("name", { required: true })} />
                <input className='mb-4' type="number" placeholder='price' {...register("price")} />
                <input className='mb-4' type="number" placeholder='quantity' {...register("quantity")} />
                <input className='mb-4' type="url" placeholder='img url' {...register("image")} />
                <input className='' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;