import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import "./index.css"
import About from './pages/About';

import Home from './pages/Home';
import Projects from './pages/Projects';


export default function App() {
  return (
    <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project' element={<Projects/>} />
      <Route path='/about' element={<About/>} />
   
     </Routes>
    </BrowserRouter>
  )
}
