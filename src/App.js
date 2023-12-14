import './css/App.css';
import Formulario from './components/Formulario';
import Navegacion from './components/Navegacion';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Error from './components/Error';
import Usuarios from './components/Usuarios';
//import Buscar from './componentes/Buscar';

function App() {
  return (
    <>
    <Navegacion />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/formulario' element={<Formulario/>}/>
      <Route path='/Usuarios' element={<Usuarios/>}/>    
      <Route path='*' element={<Error/>}/>
    </Routes>
    
    </>
    );
}

export default App;
