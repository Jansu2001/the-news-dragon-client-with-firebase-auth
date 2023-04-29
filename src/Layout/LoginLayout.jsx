import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const LoginLayout = () => {
    

    return (
        <div>
            <NavigationBar></NavigationBar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;