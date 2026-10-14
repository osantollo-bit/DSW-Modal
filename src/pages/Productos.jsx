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
            <h1>Productos</h1>
            <Button funcion={mostrarMensaje}>Guardar</Button>


            {mostrar && (
                <Modal funcion={cerrarMensaje}>
                    <h2>Mensaje</h2>
                    <p>Se envió correctamente</p>

                    <Button funcion={cerrarMensaje}>
                        Aceptar
                    </Button>
                </Modal>
            )}
        </main>
    )
}

export default Productos;