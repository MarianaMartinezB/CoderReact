import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
    <Link to="/" className="Brand">
        Tienda de Libros
    </Link>
    <div>
        <NavLink to="/category/coaching" className="button">
        Coaching
        </NavLink>
        <NavLink to="/category/pnl" className="button">
        PNL
        </NavLink>
        <NavLink to="/category/ejecutivo" className="button">
        Coaching Ejecutivo
        </NavLink>

    </div>
    <CartWidget />
    </nav>
);
};

export default NavBar;
