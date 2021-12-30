import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <div className="logout">
            <h1>
                Are you sure you want to logout?
            </h1>
            <Link to='/' onClick={handleLogout}><button>Yes</button></Link>
            <Link to='/homepage'><button>No</button></Link>
        </div>
    );
}

export default Logout;