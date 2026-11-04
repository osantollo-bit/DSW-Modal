import { useState } from "react";
import Button from "../componentes/Button";
import Modal from "../componentes/Modal";
import "./formulario.css"

function Formulario (){

    const [mostrar, setMostrar] = useState(false);
    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [comentario, setComentario] = useState("");
    const [mensaje, setMensaje] = useState(""); //guardar el mensaje del modal




    //VALIDAR EL FORMULARIO
    function enviarFormualrio(evento){
        evento.preventDefault();

        if ( nombre.trim() === "" || correo.trim() === "" || comentario.trim() === ""){
            setMensaje("Complete todos los campos");
        }else{
            setMensaje("Se envio correctamente")
            limpiarFormulario()//reinicia los estados
        }
        setMostrar(true); //abrir el modal
    }

    function limpiarFormulario() {
        setNombre("");
        setCorreo("");
        setComentario("");
    }

    //CERRAR EL MODAL
    function cerrarMensaje() {
        setMostrar(false);
    }

    function mostrarMensaje() {
        setMostrar(true);
    }

    

    return(
        <main>
            <h1>Formulario</h1>
            <form onSubmit={enviarFormualrio}>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                />

                <label>Correo</label>
                <input
                    type="email"
                    value={correo}
                    onChange={(evento) => setCorreo(evento.target.value)}
                />

                <label>Escribemos tu aclaración</label>
                <input
                    type="text"
                    value={comentario}
                    onChange={(evento) => setComentario(evento.target.value)}
                />

                <Button type="submit">Enviar</Button>
            </form>

            

            {mostrar && (
                <Modal >
                    <h2>Mensaje</h2>
                    <p>{mensaje}</p>

                    <Button funcion={cerrarMensaje}>
                        Aceptar
                    </Button>
                </Modal>
            )}



        </main>
    )
}

export default Formulario;