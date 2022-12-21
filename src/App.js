import './App.css';
import ShowProductoAlmacen from './componentes/almacen/ShowProductoAlmacen';
import CreateProductoAlmacen from './componentes/almacen/CreateProductoAlmacen';
import EditProductoAlmacen from './componentes/almacen/EditProductoAlmacen';
import Inicio from './componentes/estructura/inicio';
import Agenda from './componentes/agenda/Agenda';
import Pacientes from "./componentes/pacientes/Pacientes"
import Clinica from "./componentes/clinica/Clinica"
import ConfigIndex from './componentes/configuracion/Index';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inventario from './componentes/stock/Inventario';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Inicio/>} />
          <Route path='/almacen' element={<ShowProductoAlmacen/>} />
          <Route path='/crear' element={<CreateProductoAlmacen/>} />
          <Route path='/edit/:id' element={<EditProductoAlmacen/>} />
          <Route path='/agenda' element={<Agenda/>} />
          <Route path='/pacientes' element={<Pacientes/>} />
          <Route path='/clinica' element={<Clinica/>} />
          <Route path='/configuracion' element={<ConfigIndex/>} />
          <Route path='/stock' element={<Inventario/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
