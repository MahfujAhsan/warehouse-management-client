import React from 'react';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import githubLogo from "../../media/github.png"
import { Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLog = () => {
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if(githubLoading) {
        return <Spinner/>
    }
    if (githubError) {
        <Spinner/>
        errorElement = <p className='text-danger'>Error: {githubError?.message} {githubError?.message}</p>
    }
    if (githubUser) {
        <Spinner/>
        navigate(from, { replace: true });
    }
    
    return (
        <div className='my-3'>
            <div className='d-flex justify-content-center align-items-center my-4'>
                <div style={{ borderBottom: "4px solid #67696A" }} className='w-25'></div>
                <div className='mx-3 fs-4 font-monospace fw-bold'>Or</div>
                <div style={{ borderBottom: "4px solid #67696A" }} className='w-25'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGithub()} className='bg-light fw-bold py-2 px-4 border border-3 border-dark rounded font-monospace' >
                <img src={githubLogo} alt="gitHubLogo" /> <span>Continue with GitHub</span>
            </button>
        </div>
    );
};

export default SocialLog;