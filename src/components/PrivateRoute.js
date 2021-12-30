import React from "react";
import { Navigate, Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("authenticated");
    console.log("this", isAuthenticated);

    return (
        isAuthenticated ? children : <Navigate to="/" />
    );
}

export default PrivateRoute;