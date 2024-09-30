// /src/components/Navbar.jsx

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Powerpedia</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pericias</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Vantagens</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Arquetipos</a>
                </li>
            </ul>
            </div>
        </div>
</nav>
);
};

export default Navbar;
