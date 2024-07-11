import './App.css'
import View from './components/View'
//import Record from './components/Record'
import Add from './components/Add'
import Demoaxios from './components/Demoaxios'
import {Routes,Route} from 'react-router-dom'                   
function App() {
 
  return (
    <>
      <h1>Welcome to React Session</h1>
      <View/>
      <Routes>
        <Route path='/' element={<Demoaxios/>}></Route>
        <Route path='/add' element={<Add person={{
          fname:"Swathi",department:"English Literature",semester:"S4"}}/>}></Route>
      </Routes>
    </>
  )
}

export default App