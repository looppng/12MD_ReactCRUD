import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/createWeapon">Add new weapon</Link>
            </div>
        </nav>
    )
}

export default Navbar;