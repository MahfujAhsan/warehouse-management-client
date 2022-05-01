import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinner from '../Spinner/Spinner';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSignUp = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password)
    };
    const navigateLogin = () => {
        navigate('/login');
    };
    if(loading) {
        return <Spinner/>
    }
    return (
        <div className='container my-5 w-75'>
            <h3 style={{ letterSpacing: "0.5rem" }} className='text-center text-uppercase my-4 fw-bold font-monospace'>Please SignUp</h3>
            <form onSubmit={handleSignUp} className='w-50 mx-auto'>
                <div className="mb-3 d-flex justify-content-between">
                    <input style={{ border: "3px solid #BF5737" }} type="text" placeholder='First Name' className="form-control shadow-none py-3 fs-5 font-monospace w-50 m-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <input style={{ border: "3px solid #BF5737" }} type="text" placeholder='Last Name' className="form-control shadow-none py-3 fs-5 font-monospace w-50 m-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="email" ref={emailRef} placeholder='Your Email' className="form-control shadow-none py-3 fs-5 font-monospace m-2" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="password" ref={passwordRef} placeholder='Secret KeY' className="form-control shadow-none py-3 fs-5 font-monospace m-2" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="password" placeholder='Confirm Secret KeY' className="form-control shadow-none py-3 fs-5 font-monospace m-2" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="tel" placeholder='Your Phone' className="form-control shadow-none py-3 fs-5 font-monospace m-2" id="exampleInputPassword1" />
                </div>
                <input type="submit" className="btn btn-light w-50 mx-auto d-block py-2 border border-3 border-dark shadow-none text-capitalize fs-5 fw-bold" value="SignUp"/>
                <div className='my-3'>
                <p className='text-center font-monospace'>Already have an Account? <Link onClick={navigateLogin} to="/login" className='text-danger fw-bold pe-auto text-decoration-none'>Please LogIn.</Link></p>
                <div className='text-center'>
                </div>
            </div>
            </form>
        </div>
    );
};

export default SignUp;