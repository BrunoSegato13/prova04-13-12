import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Category from './pages/category';
import HomePage from './pages/HomePage/HomePage';

const AppRouters = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/category" exact element={<Category/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default AppRouters;