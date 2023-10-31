import { NavLink, Link } from "react-router-dom";
import Home from "../Pages/Home";

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <Link to="/About">
                    <h1>logo</h1>
                </Link>
            </div>
            <ul>
                    <li>
                        <NavLink to="/">
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services">
                            services
                        </NavLink>
                    </li>
            </ul>

        </nav>
    )
}
 export default Navbar;