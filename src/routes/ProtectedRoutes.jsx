import React from 'react'
import { useAuth } from '../provider/AuthProvider';
import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {

    const {token}= useAuth();

    if(!token){
        return <Navigate to="/signin" />
    }

    return <Outlet />
}

export default ProtectedRoutes
