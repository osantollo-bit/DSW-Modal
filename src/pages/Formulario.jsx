
import { useState } from "react";
import ButtonChildren from "../componentes/ButtonChildren";
import ModalChildren from "../componentes/ModalChildren";
import "./formulario.css";

function Formulario() {

    // ESTADOS DEL FORMULARIO
    // Guardan la información que escribe el usuario.
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [comentario, setComentario] = useState("");

    // ESTADOS DEL MODAL
    const [mostrar, setMostrar] = useState(false);
    const [mensaje, setMensaje] = useState("");

    // VALIDAR Y ENVIAR EL FORMULARIO
    function enviarFormulario(evento) {

        evento.preventDefault(); // Evita que la página se recargue al enviar el formulario.

        // Verifica que ninguno de los campos esté vacío.
        //trim() es un método de JavaScript que elimina los espacios vacíos al inicio y al final de un texto.
        //El nombre, después de quitar los espacios del inicio y del final, está vacío?
        //||-> Si el nombre está vacío O
        if (
            nombre.trim() === "" ||
            correo.trim() === "" ||
            comentario.trim() === ""
        ) {

            // Si falta información, muestra un mensaje de advertencia.
            setMensaje("Complete todos los campos");

        } else {
            // Si todos los campos tienen información,
            // muestra un mensaje de confirmación.
            setMensaje("Se envió correctamente");

            // Limpia los campos del formulario.
            limpiarFormulario();
        }

        // Abre el modal para mostrar el mensaje.
        setMostrar(true);
    }

    // LIMPIAR EL FORMULARIO
    function limpiarFormulario() {
        // Regresa los estados a su valor inicial.
        setNombre("");
        setCorreo("");
        setComentario("");
    }

    // CERRAR EL MODAL
    function cerrarMensaje() {
        setMostrar(false);         // Cambia el estado para ocultar el modal.
    }

    return (
        <main>

            <h1>Formulario</h1>

            /*
            onSubmit es un evento de React que detecta cuando se intenta enviar el formulario.
            Le estamos diciendo: Cuando se envíe este formulario, ejecuta la función enviarFormulario.
            */

            <form onSubmit={enviarFormulario}>

                {/* CAMPO NOMBRE */}
                <label>Nombre:</label>
                <input
                    type="text" //Indica qué tipo de información puede escribir el usuario.
                    value={nombre} //El contenido de este input será el valor que esté guardado en el estado nombre.
                    onChange={(evento) => setNombre(evento.target.value)} //Significa que queremos detectar cuando el usuario cambie el contenido del input.
                />

                <label>Correo:</label>
                <input
                    type="email"
                    value={correo}
                    onChange={(evento) => setCorreo(evento.target.value)}
                />

                <label>Escríbenos tu aclaración:</label>
                <textarea
                    value={comentario}
                    onChange={(evento) => setComentario(evento.target.value)}
                />

                //Es decir, cuando el usuario hace clic en ese botón, se activa el envío del formulario.
                <button type="submit">
                    Enviar
                </button>

            </form>


            {/* Solo aparece cuando mostrar es true. */}
            {mostrar && (
                <ModalChildren>
                    <h2>Mensaje</h2>
                    <p>{mensaje}</p>

                    <ButtonChildren funcion={cerrarMensaje}>
                        Aceptar
                    </ButtonChildren>
                </ModalChildren>
            )}

        </main>
    );
}

export default Formulario;
