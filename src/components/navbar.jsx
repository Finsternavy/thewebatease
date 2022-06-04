// add CSS to your component
import './navbar.css';
import { Link } from 'react-router-dom'

// components must return something.  It can only return one parent
// Don't forget to export at the end
// Don't forget to import where you want to use it

function Navbar(){
    return (
        <nav className="navbar">
            <div className="left">
                <h1>The Web At Ease</h1>
                <ul className="links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                <input type="search" placeholder='Search' />
                <button className="search-btn">Search</button>
            </div>
            
            
        </nav>
    );
}

export default Navbar;
