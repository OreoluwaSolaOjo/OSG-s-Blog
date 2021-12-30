import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
    const isAuthenticated = localStorage.getItem("authenticated");
    const path = <Link to="/homepage" />

    return (
        <nav className="navbar">
            <Link to="homepage">
                <h1>OSG's blog</h1>
            </Link>
            {isAuthenticated && <div className="links">
                <Link to="/homepage">Home</Link>
                <Link to="/Create">Create Article</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Logout">Logout</Link>
            </div>}

        </nav>
    );
}

export default Header;