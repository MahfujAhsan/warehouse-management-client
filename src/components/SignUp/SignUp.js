import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../Spinner/Spinner';

const SignUp = () => {
    const [updateProfile] = useUpdateProfile(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleSignUp = async (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            return toast("Your SecretKeY Didn't Match")
        };
        if ((password.length, confirmPassword.length) < 6) {
            return toast('You Should at least 6 character to create a SecretKeY')
        }
        await updateProfile(`{ displayName: ${firstName} ${lastName}}`);
        if (email && password) {
            toast('Congrats, Please Verfify Your Email.')
        };
        e.target.reset();
        navigate('/login');
    };
    if (loading) {
        return <Spinner />
    };
    return (
        <div className='container my-5 w-75'>
            <h3 style={{ letterSpacing: "0.1rem" }} className='text-center text-uppercase my-4 fw-bold font-monospace fs-6 fs-3'>Please SignUp</h3>
            <form onSubmit={handleSignUp} style={{ fontFamily: "monospace" }} className='w-100 mx-auto'>
                <div className="d-flex justify-content-between align-items-center">
                    <input style={{ border: "3px solid #BF5737" }} type="text" placeholder='First Name' className="shadow-none py-md-3 fs-6 font-monospace w-100 m-2 rounded ps-3" />
                    <input style={{ border: "3px solid #BF5737" }} type="text" placeholder='Last Name' className="shadow-none py-md-3 fs-6 font-monospace w-100 m-2 rounded ps-3" />
                </div>
                <div className='d-flex justify-content-center flex-column w-100'>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' className="shadow-none py-md-3 fs-6 font-monospace m-2 border border-3 border-dark rounded ps-3" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Secret KeY' className="shadow-none py-md-3 fs-6 font-monospace m-2 border border-3 border-dark rounded ps-3" />
                </div>
                
                    <div className="">
                        <input style={{ border: "3px solid #BF5737" }} type="password" ref={confirmPasswordRef} placeholder='Confirm Secret KeY' className="shadow-none py-md-3 fs-6 font-monospace m-2 w-100 rounded ps-3" />
                    </div>
                
                <div className="">
                    <input style={{ border: "3px solid #BF5737" }} type="tel" placeholder='Your Phone' className="shadow-none py-md-3 fs-6 font-monospace m-2 w-100 rounded ps-3" />
                </div>
                <button onClick={() => createUserWithEmailAndPassword(email, password)} className="btn btn-light w-50 mx-auto d-block my-3 py-md-2 border border-3 border-dark shadow-none text-capitalize fs-5 fs-md-4">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;