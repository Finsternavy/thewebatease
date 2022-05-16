// add CSS to your component
import './navbar.css';

// components must return something.  It can only return one thing
// Don't forget to export at the end
// Don't forget to import where you want to use it
function Navbar(){
    return (
        <div className="navbar">
            <h1>Menu will be here</h1>
        </div>
    );
}

export default Navbar;
