import "./modal.css"
/*
cerrar → recibirá la función que queremos ejecutar al presionar Aceptar.
children → recibirá lo que queramos colocar dentro del modal.
*/
function Modal({children}){
    return(
        <div className="modal">
            <div className="contenidoModal">
                {children}
            </div>
        </div>
    )
}

export default Modal;

/*

   <button onClick={funcion}>
                    Aceptar
                </button>

*/