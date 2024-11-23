import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Loader from './Components/Loader'
import Footer from './Components/Footer'
import Work from './Components/Work'
import { AnimatedBackground, matrixRain } from 'animated-backgrounds'
import { color } from 'framer-motion'

function App() {
  

  return (
    
    <BrowserRouter>
    
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/work" element={<Work/>}></Route>
     
    </Routes>
    <div className='bg-[#efefef] h-[5vh] border-t-2 border-black flex justify-center items-center'><h1 className='font-bold uppercase font-mono'>workwithus@blgstudio.com</h1> </div>
    </BrowserRouter>
      

    
 
  )
}

export default App
