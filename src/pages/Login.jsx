import { useState } from 'react'
import ButtonChildren from "../componentes/ButtonChildren";
import ModalChildren from "../componentes/ModalChildren";
import './Login.css'

function Login() {

    // Estados para guardar los datos
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

      // ESTADOS DEL MODAL
    const [mostrar, setMostrar] = useState(false);
    const [mensaje, setMensaje] = useState("");

    // Función para iniciar sesión
    function iniciarSesion(evento) {

        evento.preventDefault()

        if (correo === "" || contrasena === "") {
            
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
        <main className="login">

            <div className="login-contenedor">

                <h2>Iniciar sesión</h2>

                <form onSubmit={iniciarSesion}>

                    <label>Correo electrónico</label>

                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="Ingresa tu correo"
                    />

                    <label>Contraseña</label>

                    <input
                        type="password"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                    />

                    <button type="submit">
                        Iniciar sesión
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

            </div>

        </main>
    )
}

export default Login