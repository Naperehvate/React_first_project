import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Link to="/" class="nav-link text-light">
                HOME
            </Link>
            <Link to="/blogs" class="nav-link text-light">
                BLOGS
            </Link>
            <Link to="/about" class="nav-link text-light">
                ABOUT US
            </Link>
            <Link to="/contacts" class="nav-link text-light">
                CONTACTS
            </Link>
        </>
    );
};

const Header = () => {
    return (
        <header className="sticky-top bg-dark">
            <div className="container d-flex justify-content-between align-items-center">
                <img src={logo} width="50px" alt="logo" />
                <nav className="d-flex justify-content-between w-50">
                    <Menu />
                </nav>
            </div>
        </header>
    );
};

export default Header;
