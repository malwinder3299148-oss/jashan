import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import About from './pages/About.jsx'

import {BrowserRouter, Routes, Route} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
        <Route path='/About' element={<About/>}/>

 </Routes>
 </BrowserRouter>

)
