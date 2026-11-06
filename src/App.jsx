
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Inicio from './pages/Inicio'
import Formulario from './pages/Formulario'
import Productos from './pages/Productos'
import Discos from './pages/Discos'
import Footer from './componentes/Footer'
import Login from './pages/Login'


function App() {
  
  return (
    <BrowserRouter> 
      <Header/>

      <Routes> //escribes todas las rutas disponibles de tu sitio.
        <Route path='/' element={<Inicio />}/>
        <Route path='/formulario' element={<Formulario />}/>
        <Route path='/productos' element={<Productos />}/>
        <Route path='/discos' element={<Discos />}/>
        <Route path='/login' element={<Login />} />
      </Routes>

      {/* Elemento que aparece en todas las páginas */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
