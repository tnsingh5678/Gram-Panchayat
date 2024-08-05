import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import AdminLogin from './owner/AdminLogin'
import Bck from './components/bck'
import Register from './components/Register'
import AdminRegister from './owner/AdminRegister'
import Home from './Home'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/user" element={<Bck/>}></Route>
        <Route path="/user/register" element={<Register/>}></Route>
        <Route path="/admin" element={<Login/>}></Route>
        <Route path="/admin/register" element={<AdminRegister/>}></Route>
      </Routes>

    </Router>
    </>
  )
}

export default App
