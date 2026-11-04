
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Inicio from './pages/Inicio'
import Formulario from './pages/Formulario'
import Productos from './pages/Productos'
import Discos from './pages/Discos'


function App() {
  
  return (
    <BrowserRouter> //Envuelve los componentes que necesitan utilizar la navegación.
      <Header/>

      <Routes> //escribes todas las rutas disponibles de tu sitio.
        <Route path='/' element={<Inicio />}/>
        <Route path='/formulario' element={<Formulario />}/>
        <Route path='/productos' element={<Productos />}/>
        <Route path='/discos' element={<Discos />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
