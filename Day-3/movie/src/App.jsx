import './App.css'
import View from './components/View'
import Navbar from './components/Navbar'
import Add from './components/Add'
import {Routes,Route} from 'react-router-dom'                   

function App() {
 
  return (
    <>
      <h1>Welcome to Movie App</h1>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App