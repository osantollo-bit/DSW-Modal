
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {

    // HOOK PARA CAMBIAR DE PANTALLA.
    const navigate = useNavigate()

    // ESTADOS PARA GUARDAR LOS DATOS DEL INICIO DE SESIÓN.
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    // FUNCIÓN PARA INICIAR SESIÓN.
    function iniciarSesion(evento) {

        evento.preventDefault()

        setCorreo("")
        setContrasena("")

        // REDIRIGE A INICIO.
        navigate("/")
    }

    return (

        <main className="login">

            <div className="login-contenedor">

                {/* PESTAÑAS */}
                <div className="login-pestanas">

                    <button
                        className="activo"
                        onClick={() => navigate("/login")}
                    >
                        Iniciar sesión
                    </button>

                    <button
                        onClick={() => navigate("/registro")}
                    >
                        Registrarse
                    </button>

                </div>

                {/* FORMULARIO DE INICIO DE SESIÓN */}
                <div className="login-formulario">

                    <h2>Bienvenido</h2>

                    <p>Inicia sesión con tu cuenta institucional</p>

                    <form onSubmit={iniciarSesion}>

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
                            Iniciar sesión
                        </button>

                    </form>

                </div>

            </div>

        </main>

    )
}

export default Login



/*
Los estilos de registro se muetsran,  Porque Registro se está mostrando dentro de Login.
*/