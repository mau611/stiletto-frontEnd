import './App.css';
import ShowProductoAlmacen from './componentes/almacen/ShowProductoAlmacen';
import CreateProductoAlmacen from './componentes/almacen/CreateProductoAlmacen';
import EditProductoAlmacen from './componentes/almacen/EditProductoAlmacen';
import Inicio from './componentes/estructura/inicio';
import Agenda from './componentes/agenda/Agenda';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
