import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useVerifyUser from '../../hooks/useVerifyUser';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useVerifyUser(user?.email)
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin==="seller"){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SellerRoute;