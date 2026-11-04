import Button from "../componentes/Button";
import Modal from "../componentes/Modal";
import { useState } from "react";

function Productos(){

    //modal
    const [mostrar, setMostrar] = useState(false);

    function mostrarMensaje() {
        setMostrar(true);
    }

    function cerrarMensaje() {
        setMostrar(false);
    }



    return(
        <main>
            <h1>Inicio: botón sin children</h1>

            <Button funcion={mostrarMensaje}>
                Abrir modal
            </Button>

            {mostrar && (
                <Modal
                    titulo="Mensaje"
                    mensaje="El modal se abrió correctamente."
                    textoBoton="Cerrar"
                    funcion={cerrarMensaje}
                />
            )}
        </main>
    )
}

export default Productos;



