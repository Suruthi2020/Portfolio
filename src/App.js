import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Navbar'
import Academic from './Academic';
import Project from './Projects';
import Contact from './Contact';
import Homepage from './Homepage';

function App() {
  return (
    <>
  <BrowserRouter>
  <Home/>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/academic' element={<Academic/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
