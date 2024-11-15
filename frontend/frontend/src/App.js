import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Detailcar from './components/Detailcar';
import Contacts from './components/Contacts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route index element={<Catalog/>}/>
      <Route path='car/:car_id' element={<Detailcar/>}/>
      <Route path={'contacts'} element={<Contacts/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
