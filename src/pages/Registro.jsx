
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ButtonChildren from "../componentes/ButtonChildren"
import ModalChildren from "../componentes/ModalChildren"

import './Login.css'

function Registro() {

    // HOOK PARA CAMBIAR DE PANTALLA.
    const navigate = useNavigate()

    // ESTADOS PARA GUARDAR LOS DATOS DEL REGISTRO.
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    // ESTADO PARA CONTROLAR EL MODAL.
    const [mostrar, setMostrar] = useState(false)

    // FUNCIÓN PARA REGISTRAR UNA CUENTA.
    function registrar(evento) {

        evento.preventDefault()

        // MUESTRA EL MODAL.
        setMostrar(true)
    }

    // FUNCIÓN PARA CERRAR EL MODAL.
    function cerrarMensaje() {

        setMostrar(false)

        setNombre("")
        setCorreo("")
        setContrasena("")

        // REGRESA A LOGIN.
        navigate("/login")
    }

    return (

        <main className="login">

            <div className="login-contenedor">

                {/* PESTAÑAS */}
                <div className="login-pestanas">

                    <button
                        onClick={() => navigate("/login")}
                    >
                        Iniciar sesión
                    </button>

                    <button
                        className="activo"
                        onClick={() => navigate("/registro")}
                    >
                        Registrarse
                    </button>

                </div>

                {/* FORMULARIO DE REGISTRO */}
                <div className="login-formulario">

                    <h2>Crea tu cuenta</h2>

                    <p>Con tu correo institucional</p>

                    <form onSubmit={registrar}>

                        <input
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required
                        />

                        <button type="submit">
                            Registrarme
                        </button>

                    </form>

                </div>

                {/* MODAL */}
                {mostrar && (

                    <ModalChildren>

                        <h2>¡Registro completado!</h2>

                        <p>Tu registro se realizó correctamente.</p>

                        <ButtonChildren funcion={cerrarMensaje}>
                            Aceptar
                        </ButtonChildren>

                    </ModalChildren>

                )}

            </div>

        </main>

    )
}

export default Registro
