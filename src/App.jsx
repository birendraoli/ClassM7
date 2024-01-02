
import { useState } from 'react'
import './App.css'
import Dashboard from './Home/Dashboard'
import Nav from './NAvbar/Nav'
import { BrowserRouter as Rou, Routes, Route } from "react-router-dom";
import About from './About/About';
function App() {
  const [mode,setMode] = useState(false)
  return (
    <>
    <Rou>
    <Nav mode={mode} set={setMode}/>
      <Routes>
        <Route index element={<Dashboard mode={mode}/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<h1>404 Page not Found</h1>}/>
      </Routes>
    </Rou>
    
    </>
  )
}

export default App
