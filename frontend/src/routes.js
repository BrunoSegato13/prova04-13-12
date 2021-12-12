import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Category from './pages/category';
import HomePage from './pages/HomePage/HomePage';
import Product from './pages/product';
import Vendor from './pages/vendor';

const AppRouters = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/category" exact element={<Category/>}/>
        <Route path="/vendor" exact element={<Vendor/>}/>
        <Route path="/product" exact element={<Product/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default AppRouters;