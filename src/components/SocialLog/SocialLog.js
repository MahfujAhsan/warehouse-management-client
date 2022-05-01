import React from 'react';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import githubLogo from "../../media/github.png"
import { Spinner } from 'react-bootstrap';

const SocialLog = () => {
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    
    if (githubLoading) {
        return <Spinner></Spinner>
    }
    
    return (
        <div className='my-3'>
            <button onClick={() => signInWithGithub()} className='bg-light fw-bold py-2 px-4 border border-3 border-dark rounded font-monospace' >
                <img src={githubLogo} alt="gitHubLogo" /> <span>Continue with GitHub</span>
            </button>
        </div>
    );
};

export default SocialLog;