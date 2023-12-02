import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Man from './pages/Man';
import Woman from './pages/Woman';
import Accessory from './pages/Accessory';
import Electronics from './pages/Electronics';
import ProductDetails from './pages/ProductDetails';
import Favorites from './pages/Favorites';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return <div className='overflow-hidden '>
  
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/man' element={<Man />} />
        <Route path='/woman' element={<Woman />} />
        <Route path='/electronics' element={<Electronics />} />
        
        <Route path='/accessory' element={<Accessory />} />
        <Route path='/favorites' element={<Favorites />} />
        
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
