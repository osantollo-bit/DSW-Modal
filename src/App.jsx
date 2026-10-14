
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Inicio from './pages/Inicio'
import Formulario from './pages/Formulario'
import Productos from './pages/Productos'


function App() {
  

  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/formulario' element={<Formulario />}/>
        <Route path='/productos' element={<Productos />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
