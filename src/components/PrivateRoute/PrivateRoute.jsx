// PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext'; // Adjust path as necessary

const PrivateRoute = () => {
    const { isAuthenticated } = useContext(UserContext);
    console.log("Is authenticated:", isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
