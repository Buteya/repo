import {Link} from 'react-router-dom';
const Navbar = ()=>{
    return(
        <nav className="navbar">
            <h2>TodoApp...</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/TodoForm">Add New</Link>
            </div>
        </nav>
    );
}

export default Navbar;