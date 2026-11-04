import { Link } from "react-router-dom";
import "./header.css";
function Header() {

    return(
        <header>
            <h1>Harry Style</h1> 
            <nav>
                    <Link to="/" >Inicio</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/formulario">Preguntas</Link>
                    <Link to="/discos">Discos</Link>
            </nav>
        </header>
    )
    
}

export default Header;