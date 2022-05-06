import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Spinner from '../Spinner/Spinner';

const ProtectRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading) {
        return <Spinner></Spinner>
    }
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectRoute;