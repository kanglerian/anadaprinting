import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Undangan from './pages/Undangan';
import DetailUndangan from './pages/page/DetailUndangan';
import Merchandise from './pages/Merchandise';
import DetailMerchandise from './pages/page/DetailMerchandise';
import Souvenir from './pages/Souvenir';
import DetailSouvenir from './pages/page/DetailSouvenir';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Undangan/>} />
        <Route path='/undangan/:id' element={<DetailUndangan/>} />
        <Route path='/merchandise' element={<Merchandise/>} />
        <Route path='/merchandise/:id' element={<DetailMerchandise/>} />
        <Route path='/souvenir' element={<Souvenir/>} />
        <Route path='/souvenir/:id' element={<DetailSouvenir/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;