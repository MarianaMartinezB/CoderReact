import CartWidget from './CartWidget';
import './NavBar.css'

const NavBar =() => {
    return (
        <nav className="NavBar">
            <h1>Tienda de Libros</h1>
            <div>
                <button className = "button">Coaching</button>
                <button className = "button">PNL</button>
                <button className = "button">Eneagrama</button>
                <button className = "button">Astrologia</button>
                <button className = "button"v>Ofertas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;