// add CSS to your component
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar">
            <div className="left">
                <div className="img-container">
                    <img className='logo' src="./img/logo3_NO_BG.png" alt="logo"/>
                </div>
                <ul className="links-left">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    
                </ul>
            </div>
            <div className="search">
                <input type="search" />
                <button className="search-btn">Search</button>
            </div>
            <div className="right">

                <ul className='links-right'>
                    <li>
                        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
