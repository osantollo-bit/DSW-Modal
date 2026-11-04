import ButtonChildren from '../componentes/Button';
import Card from '../componentes/Card'
import ModalChildren from "../componentes/ModalChildren";
import { useState } from 'react';
function Discos(){


    const [mostrar, setMostrar] = useState(false);
    
        function mostrarMensaje() {
            setMostrar(true);
        }
        
        function cerrarMensaje() {
            setMostrar(false);
        }


    return(
        <main>
            <h1>Comidas</h1>
            <div className="contenedor">

                <Card
                    titulo="Hamburguesa"
                    descripcion="Queso, lechuga, carne, jitomate."
                    imagen="/Img/burguer.jpg"
                    
                >
                    <ButtonChildren funcion={mostrarMensaje}> Agregar</ButtonChildren>
                </Card>

                <Card
                    titulo="Hamburguesa"
                    descripcion="Queso, lechuga, carne, jitomate."
                    imagen="/Img/burguer.jpg"
                >
                    <ButtonChildren funcion={mostrarMensaje}> Agregar</ButtonChildren>
                </Card>

                <Card
                    titulo="Hamburguesa"
                    descripcion="Queso, lechuga, carne, jitomate."
                    imagen="/Img/burguer.jpg"
                >
                    <ButtonChildren funcion={mostrarMensaje}> Agregar</ButtonChildren>
                </Card>

            </div>


            {mostrar && (
                <ModalChildren>
                    <h2>Mensaje</h2>
                    <p>El modal se abrió correctamente.</p>

                    <ButtonChildren funcion={cerrarMensaje}>
                        Aceptar
                    </ButtonChildren>
                </ModalChildren>
            )}


        </main>
    )
}

export default Discos;


/*con children
                <Card>
                    <img
                        className="imagenTarjeta"
                        src="/Img/burguer.jpg"
                        alt="Hamburguesa"
                    />

                    <h2>Hamburguesa</h2>

                    <p>Hamburguesa con queso y verduras.</p>

                    <p className="precio">$85</p>

                    <div className="cantidad">
                        <button>−</button>
                        <span>0</span>
                        <button>+</button>
                    </div>

                    <button className="botonAgregar">
                        Agregar
                    </button>
                </Card>

*/

<Card>
    <h2>Hamburguesa</h2>
    <p>Hamburguesa con queso</p>
    <button>Agregar</button>
</Card>

