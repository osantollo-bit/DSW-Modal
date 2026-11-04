
import "./card.css";

function Card({ imagen, titulo, descripcion, children }) {
    return (
        <div className="tarjeta">

            <img
                className="imagenTarjeta"
                src={imagen}
                alt={titulo}
            />

            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            {children}

        </div>
    );
}

export default Card


/*Con children:
import "./card.css";

function Card({ children }) {
    return (
        <div className="tarjeta">
            {children}
        </div>
    );
}

export default Card;
*/