import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import SocialLog from '../SocialLog/SocialLog';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useAuthState(auth)
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const navigateRegister = () => {
        navigate('/signup');
    };

    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(email)
    };

    if (user) {
        const url = 'https://floating-reef-95698.herokuapp.com/login';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user?.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token)
                navigate(from, { replace: true });
            })
    };
    if (error) {
        errorElement = <p>{error.message}</p>
    };
    return (
        <div className='container mt-3 w-75'>
            <h3 style={{ letterSpacing: "0.1rem" }} className='text-center text-uppercase my-4 fw-bold fs-6 fs-3 font-monospace'>Please SignIn</h3>
            <div className="d-flex flex-column mb-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' className="shadow-none py-3 fs-6 font-monospace mb-3 border-3 border-dark rounded ps-3" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Your Secret KeY' className="shadow-none py-3 fs-6 font-monospace border-3 border-dark rounded ps-3" required />
                <button onClick={() => { signInWithEmailAndPassword(email, password) }} type="submit" className="btn btn-light w-50 mx-auto d-block py-md-2  border border-3 border-dark shadow-none text-capitalize fs-5 mt-md-4 my-3 fw-bold">Login</button>
            </div>
            <div>
                {
                    loading && <p className='text-danger fw-bold text-center my-3'>Loading...</p>
                }
            </div>
            <p style={{ color: "#BF5737", fontSize: "16px" }} className='text-center fw-bold fs-6 mt-3'>{errorElement}</p>
            <div>
                <p className='text-center font-monospace'>New to Molinard? <Link to="/signup" className='text-danger fw-bold pe-auto text-decoration-none' onClick={navigateRegister}>Please Register.</Link></p>
            </div>
            <p className='text-center font-monospace'>Forgot Password? <button onClick={handlePasswordReset} className='text-danger fw-bold pe-auto border border-0 bg-white'>Get New One.</button></p>
            <div>
                {
                    sending && <p className='text-danger fw-bold text-center my-3'>Check Email</p>
                }
            </div>
            <div className='text-center'>
                <SocialLog></SocialLog>
            </div>
        </div>
    );
};

export default Login;