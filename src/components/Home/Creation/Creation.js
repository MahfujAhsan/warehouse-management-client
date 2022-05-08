import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../media/picto-logo.png";

const Creation = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 bg-light text-center'>
                    <img style={{ marginTop: "-30px" }} src={logo} alt="" />
                    <div className='text-center  p-md-5'>
                        <div className='bg-white p-2 mb-4 mb-md-0 rounded'>
                            <h3 style={{ letterSpacing: "0.1rem", fontFamily: "monospace" }} className='text-center text-uppercase text-dark mt-2 mt-md-3 fw-bold font-monospace fs-6 fs-3'>The Creation of Perfume</h3>
                            <h3 className='text-center text-uppercase text-dark mt-2 mt-md-3 fw-bold font-monospace fs-6'>COMPOSE YOUR OWN PERFUME</h3>
                            <p className='text-dark fw-light my-4 w-100 mx-auto p-md-5 text-center lh-lg'>
                                Experience the perfumer's gestures.
                                Accompanied by an expert,discover the architecture of a perfume, the ingredients that make it up, that match and complement each other. Discover our workshops in
                                Grasse, Paris and Nice.
                            </p>
                            <Link style={{ border: '3px solid #BF5737' }} className='w-1000 mx-auto text-decoration-none px-5 py-2 rounded text-dark fw-bold fs-6 shadow-lg' to="/addItems">Add Product</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 border border-2 border-dark p-0'>
                    <iframe title='iframe'  id="ytplayer" type="text/html" width="560px" height="600px" src="https://www.youtube.com/embed/y-0v7fVko_I"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Creation;