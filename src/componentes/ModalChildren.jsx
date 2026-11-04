import "./modal.css"
/*
/*
Creamos un componente llamado Modal que recibe una propiedad especial llamada children.
children permite colocar dentro del modal cualquier contenido que necesitemos: un título, 
un mensaje, un botón u otros elementos.
*/
import "./modal.css";

function ModalChildren({ children }) {
    return (
        <div className="modal">
            <div className="contenidoModal">
                {children}
            </div>
        </div>
    );
}

export default ModalChildren;



