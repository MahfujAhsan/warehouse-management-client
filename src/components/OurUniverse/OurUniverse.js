import React from 'react';
import univ1 from "../../media/universe1.jpg";
import univ2 from "../../media/universe2.jpg";
import univ3 from "../../media/universe3.jpg";

const OurUniverse = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <div style={{ borderBottom: "2px solid #67696A" }} className='w-25'></div>
                <div style={{ letterSpacing: "0.1rem", color: "#BF5737" }} className='mx-1 mx-md-3 fs-5 fs-3 font-monospace fw-bold text-uppercase text-center'>Our Universe</div>
                <div style={{ borderBottom: "2px solid #67696A" }} className='w-25'></div>
            </div>
            <div className='row gy-3 gx-md-5'>
                <div role="button" className='col-12 col-md-4 bg-image hover-zoom position-relative'>
                    <img className='rounded w-100' src={univ1} alt="" />
                    <button style={{ marginTop: "30px" }} className='w-100 text-center rounded py-2 fw-bold border border-0 bg-white'>A FAMILY STORY</button>
                </div>
                <div className='col-12 col-md-4 bg-image hover-zoom position-relative'>
                    <img className='rounded w-100' src={univ2} alt="" />
                    <button style={{ marginTop: "30px" }} className='w-100 text-center rounded py-2 fw-bold border border-0 bg-white'>MANIFESTO</button>
                </div>
                <div className='col-12 col-md-4 bg-image hover-zoom position-relative'>
                    <img className='rounded w-100' src={univ3} alt="" />
                    <button style={{ marginTop: "30px" }} className='w-100 text-center rounded py-2 fw-bold border border-0 bg-white'>MADE IN GRASSE</button>
                </div>
            </div>
        </div>
    );
};

export default OurUniverse;