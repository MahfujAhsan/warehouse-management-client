import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../Spinner/Spinner';

const SignUp = () => {
    const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const handleSignUp = async (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            return toast("Your SecretKeY Didn't Match")
        };
        if((password.length, confirmPassword.length) < 6) {
            return toast('You Should at least 6 character to create a SecretKeY')
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile(`{ displayName: ${firstName} ${lastName}}`);
        if(email && password) {
            toast('Congrats, Please Verfify Your Email.')
        };
        navigate('/login');
    };
    if (loading) {
        return <Spinner />
    }
    return (
        <div className='container my-5 w-75'>
            <h3 style={{ letterSpacing: "0.1rem" }} className='text-center text-uppercase my-4 fw-bold font-monospace fs-6 fs-3'>Please SignUp</h3>
            <form style={{ fontFamily: "monospace" }} onSubmit={handleSignUp} className='w-75 mx-auto'>
                <div className="mb-3 d-md-flex justify-content-between">
                    <input style={{ border: "3px solid #BF5737" }} type="text" ref={firstNameRef} placeholder='First Name' className="form-control shadow-none py-md-3 fs-6 font-monospace w-100 m-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <input style={{ border: "3px solid #BF5737" }} type="text" ref={lastNameRef} placeholder='Last Name' className="form-control shadow-none py-md-3 fs-6 font-monospace w-100 m-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="email" ref={emailRef} placeholder='Your Email' className="form-control shadow-none py-md-3 fs-6 font-monospace m-2" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="password" ref={passwordRef} placeholder='Secret KeY' className="form-control shadow-none py-md-3 fs-6 font-monospace m-2" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="password" ref={confirmPasswordRef} placeholder='Confirm Secret KeY' className="form-control shadow-none py-md-3 fs-6 font-monospace m-2" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <input style={{ border: "3px solid #BF5737" }} type="tel" placeholder='Your Phone' className="form-control shadow-none py-md-3 fs-5 font-monospace m-2" id="exampleInputPassword1" />
                </div>
                <button className="btn btn-light w-50 mx-auto d-block py-md-2 border border-3 border-dark shadow-none text-capitalize fs-6">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;