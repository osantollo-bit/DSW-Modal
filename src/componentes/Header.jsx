import { Link } from "react-router-dom";
import { UserRound } from 'lucide-react'
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
                    <Link to="/login">Iniciar sesión</Link>

                    {/* Icono de usuario */}
                    <Link to="/login" className="iconoUsuario">
                        <UserRound size={25} />
                    </Link>
            </nav>
        </header>
    )
    
}

export default Header;