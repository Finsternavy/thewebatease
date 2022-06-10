// add CSS to your component
import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import StoreContext from '../context/storeContext'; 

function Navbar(){

    let cart = useContext(StoreContext).cart;

    return (
        <nav className="navbar">
            <div className="left">
                <div className="img-container">
                    <img className='logo' src="./img/logo_small.png" alt="logo"/>
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
                <input type="search" for="search"/>
                <button className="search-btn" aria-label="Search Button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="right">

                <ul className='links-right'>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/cart"><span className='cart-qty'>{cart.length}</span><i className="fa-solid fa-cart-shopping"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
