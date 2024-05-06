import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Navbar'
import Academic from './Academic';
import Project from './Projects';
import Contact from './Contact';
import Technicalskills from './Technicalskills';
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/academic' element={<Academic/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/technical' element={<Technicalskills/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
