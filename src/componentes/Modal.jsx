import "./modal.css";

function Modal({ titulo, mensaje, textoBoton, funcion }) {
    return (
        <div className="modal">
            <div className="contenidoModal">
                <h2>{titulo}</h2>

                <p>{mensaje}</p>

                <button onClick={funcion}>
                    {textoBoton}
                </button>
            </div>
        </div>
    );
}

export default Modal;



