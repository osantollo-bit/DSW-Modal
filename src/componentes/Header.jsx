import { Link } from "react-router-dom";
function Header() {

    return(
        <header>
            <h1>Harry Style</h1> 
            <nav>
                    <Link to="/inicio" >Inicio</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/formulario">Preguntas</Link>
            </nav>
        </header>
    )
    
}

export default Header;