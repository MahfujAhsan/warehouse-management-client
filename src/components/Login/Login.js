import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import SocialLog from '../SocialLog/SocialLog';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    };
    if (error) {
        errorElement = <p>{error.message}</p>
    };
    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    };
    const navigateRegister = () => {
        navigate('/signup');
    };

    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(emailRef.current.value)
    };
    return (
        <div className='container mt-3 w-75'>
            <h3 style={{ letterSpacing: "0.1rem" }} className='text-center text-uppercase my-4 fw-bold fs-6 fs-3 font-monospace'>Please SignIn</h3>
            <form style={{ fontFamily: "monospace" }} onSubmit={handleSubmit} className='w-75 mx-auto'>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="email" ref={emailRef} placeholder='Your Email' className="form-control shadow-none py-3 fs-6 font-monospace" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="password" ref={passwordRef} placeholder='Your Secret KeY' className="form-control shadow-none py-3 fs-6 font-monospace" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-light w-50 mx-auto d-block py-md-2  border border-3 border-dark shadow-none text-capitalize fs-md-5 mt-md-4">Login</button>
                    {
                        loading && <p className='text-danger fw-bold text-center my-3'>Loading...</p>
                    }
            </form>
            <p style={{ color: "#BF5737", fontSize: "16px" }} className='text-center fw-bold fs-6 mt-3'>{errorElement}</p>
            <div>
                <p className='text-center font-monospace'>New to Molinard? <Link to="/signup" className='text-danger fw-bold pe-auto text-decoration-none' onClick={navigateRegister}>Please Register.</Link></p>
            </div>
            <p className='text-center font-monospace'>Forgot Password? <button onClick={handlePasswordReset} className='text-danger fw-bold pe-auto border border-0 bg-white'>Get New One.</button></p>
            {
                sending && <p className='text-danger fw-bold text-center my-3'>Check Email</p>
            }
            <div className='text-center'>
                <SocialLog></SocialLog>
            </div>
        </div>
    );
};

export default Login;