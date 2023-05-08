import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useVerifyUser from '../../hooks/useVerifyUser';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useVerifyUser(user?.email)
    console.log(isAdmin)
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin==="admin"){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;