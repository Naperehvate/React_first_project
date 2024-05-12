import logo from "./logo.svg"

const Menu = () => {
    return (
        <>
            <a href="#" class="nav-link text-light">HOME</a>
            <a href="#" class="nav-link text-light">ABOUT US</a>
            <a href="#" class="nav-link text-light">CONTACTS</a>
        </>
    )
}

const Header = () => {
    return (
        <header className="fixed-top bg-dark mb-5">
        <div className="container d-flex justify-content-between align-items-center">
            <img src={logo} width="50px" alt="logo" />
            <nav className="d-flex justify-content-between w-50">
                <Menu />
            </nav>
        </div>
        </header>
    )
}

export default Header;