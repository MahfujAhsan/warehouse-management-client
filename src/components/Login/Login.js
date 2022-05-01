import React, { useRef } from 'react';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import SocialLog from '../SocialLog/SocialLog';
import Spinner from '../Spinner/Spinner';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if(loading || sending) {
        return <Spinner/>
    }
    if (user) {
        navigate(from, { replace: true });
    };
    if(error) {
        <Spinner/>
        errorElement = <p>Error: {error?.message}</p>
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        await signInWithEmailAndPassword(email, password);
    };
    const navigateRegister = () => {
        navigate('/signup');
    };
    return (
        <div className='container mt-5 w-75'>
            <h3 style={{ letterSpacing: "0.5rem" }} className='text-center text-uppercase my-4 fw-bold font-monospace'>Please SignIn</h3>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="email" ref={emailRef} placeholder='Your Email' className="form-control shadow-none py-3 fs-5 font-monospace" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="password" ref={passwordRef} placeholder='Your Secret KeY' className="form-control shadow-none py-3 fs-5 font-monospace" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-light w-50 mx-auto d-block py-2 border border-3 border-dark shadow-none text-capitalize fs-5 fw-bold">Login</button>
                <p className='text-center'>{errorElement}</p>
                <div>
                <p className='text-center font-monospace'>New to Molinard? <Link to="/signup" className='text-danger fw-bold pe-auto text-decoration-none' onClick={navigateRegister}>Please Register.</Link></p>
            </div>
            <div className='text-center'>
                <SocialLog></SocialLog>
            </div>
            </form>
        </div>
    );
};

export default Login;