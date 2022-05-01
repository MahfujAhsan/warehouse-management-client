import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import SocialLog from '../SocialLog/SocialLog';
import Spinner from '../Spinner/Spinner';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    console.log(user)
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const handleSignIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    };
    if (loading) {
        return <Spinner></Spinner>
    }
    const navigateRegister = () => {
        navigate('/register');
    };
    if(error) {
        return <p>{error.message}</p>
    }
    return (
        <div className='container mt-5 w-75'>
            <h3 style={{ letterSpacing: "0.5rem" }} className='text-center text-uppercase my-4 fw-bold font-monospace'>Please SignIn</h3>
            <form onSubmit={handleSignIn} className='w-50 mx-auto'>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="email" ref={emailRef} placeholder='Your Email' className="form-control shadow-none py-3 fs-5 font-monospace" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="password" ref={passwordRef} placeholder='Your Secret KeY' className="form-control shadow-none py-3 fs-5 font-monospace" id="exampleInputPassword1" autoComplete='off' />
                </div>
                <input type="submit" value="Login" className="btn btn-light w-50 mx-auto d-block py-2 border border-3 border-dark shadow-none text-capitalize fs-5 fw-bold"/>
            </form>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <div style={{ borderBottom: "4px solid #67696A" }} className='w-25'></div>
                <div className='mx-3 fs-4 font-monospace fw-bold'>Or</div>
                <div style={{ borderBottom: "4px solid #67696A" }} className='w-25'></div>
            </div>
            <div>
                <p className='text-center font-monospace'>New to Molinard? <Link to="/signup" className='text-danger fw-bold pe-auto text-decoration-none' onClick={navigateRegister}>Please Register.</Link></p>
            </div>
            <div className='text-center'>
                <SocialLog></SocialLog>
            </div>
        </div>
    );
};

export default Login;