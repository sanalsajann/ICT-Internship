import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Add from './components/Add'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Welcome to Product App</h1>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App
