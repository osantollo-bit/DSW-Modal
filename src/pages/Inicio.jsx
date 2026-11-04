import ButtonChildren from "../componentes/ButtonChildren";
import ModalChildren from "../componentes/ModalChildren";
import { useState } from "react";

function Inicio(){

    /*
    ¿qué queremos que haga la página?
        En este ejemplo queremos que suceda lo siguiente:
        1. Al entrar a la página, el modal está oculto.
        2. Al presionar el botón «Abrir modal», aparece el modal.
        3. Al presionar «Aceptar», el modal desaparece.
    Para lograrlo, necesitamos guardar si el modal debe mostrarse y crear funciones que cambien ese estado.
    
    */

     //modal
        const [mostrar, setMostrar] = useState(false);
    
        //Una función es un conjunto de instrucciones que podemos ejecutar cuando necesitamos realizar una acción.
        function mostrarMensaje() {
            setMostrar(true);
        }
    
        function cerrarMensaje() {
            setMostrar(false);
        }
    
    

    return(
        <main>
            <h1>Inicio: botón con children</h1>
            <ButtonChildren funcion={mostrarMensaje}> Abrir modal </ButtonChildren>

{/*Esta parte es la que permite que el modal aparezca solamente cuando lo necesitamos:
El operador && significa que React mostrará el contenido de la derecha cuando la condición de la izquierda sea verdadera.*/}
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

export default Inicio;