import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';

const ProtectRoute = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectRoute;