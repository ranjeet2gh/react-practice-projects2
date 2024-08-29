import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Routes>
            <Route
                {...rest}
                element={
                    isAuthenticated ? (
                        <Component />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />
        </Routes>
    );
};

export default PrivateRoute;
