// PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext'; // Adjust path as necessary

const PrivateRoute = () => {
    const { isAuthenticated } = useContext(UserContext);
    const isAuth = localStorage.getItem('Is_Auth');
    console.log('isAuth',isAuth);
    console.log("Is authenticated:", isAuthenticated);

    return isAuth=='true' ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
