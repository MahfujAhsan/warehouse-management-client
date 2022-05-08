import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        const url = `https://powerful-dawn-08831.herokuapp.com/inventory`
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        //     })
        axios.post(url, data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Item is Uploaded')
                    navigate('/manageInventories')
                    console.log(data)
                }
            })
    };
    return (
        <div className='w-50 mx-auto my-3'>
            <h3 style={{ letterSpacing: "0.1rem" }} className='text-center text-uppercase my-4 fw-bold font-monospace fs-6 fs-3'>Add Your Product</h3>
            <form style={{ fontFamily: "monospace" }} className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                {/* <input style={{ border: "3px solid #BF5737" }} className='mb-4 py-2 fs-6 py-md-3 ps-3 text-dark rounded' type="email" placeholder='Your Email' {...register("email")} /> */}
                <input style={{ border: "3px solid #BF5737" }} className='mb-4 py-2 fs-6 py-md-3 ps-3 text-dark rounded' type="text" placeholder='Item Name' {...register("name", { required: true })} />
                <input style={{ border: "3px solid #BF5737" }} className='mb-4 py-2 fs-6 py-md-3 ps-3 text-dark rounded' type="number" placeholder='price' {...register("price")} />
                <input style={{ border: "3px solid #BF5737" }} className='mb-4 py-2 fs-6 py-md-3 ps-3 text-dark rounded' type="number" placeholder='quantity' {...register("quantity")} />
                <input style={{ border: "3px solid #BF5737" }} className='mb-4 py-2 ps-3 text-dark' type="url" placeholder='img url' {...register("image")} />
                <input type="submit" className='btn btn-light w-100 mx-auto d-block py-md-2  border border-3 border-dark shadow-none text-capitalize fs-md-5 mt-md-4 fs-6' value="Upload Product"/>
            </form>
        </div>
    );
};

export default AddItems;