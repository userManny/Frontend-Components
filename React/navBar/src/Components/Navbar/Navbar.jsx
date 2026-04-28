import "./Navbar.css";

function Navbar(){

    return(
        <>
        <nav className="navBar">
         <div className="logo">Lenskart</div>

         <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
         
         <button className="login">Login</button>

        </nav>
        </>
    )
}

export default Navbar;