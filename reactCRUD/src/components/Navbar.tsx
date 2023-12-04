import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/createWeapon" className='nav-link'>Add new weapon</Link>
            </div>
        </nav>
    )
}

export default Navbar;