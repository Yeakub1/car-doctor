import React, { useContext } from 'react';
import { authContext } from '../components/Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, lodding } = useContext(authContext);
    if (lodding) {
        return <progress className='progress w-56'></progress>
    }
    if (user?.email) {
        return children;
    }
    return (
        <Navigate to='/register' replace></Navigate>
    );
};

export default PrivateRoute;