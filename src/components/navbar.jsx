// add CSS to your component
import './navbar.css';

// components must return something.  It can only return one parent
// Don't forget to export at the end
// Don't forget to import where you want to use it

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Menu will be here</h1>
        </nav>
    );
}

export default Navbar;
