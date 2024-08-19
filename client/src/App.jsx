import React, { useContext, useEffect } from 'react'
import {Context} from './main'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import { Toaster } from "react-hot-toast";
import NotFound from './component/NotFound/notfound'
import Home from './Home'
import SideBar from './component/components/SideBar'
import Sidebardata from "./data/Sidebardata"
import axios from "axios";
import About from './Pages/About'
const App = () => {
  const{isAuthorized, setIsAuthorized, setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getuser",
          {
            withCredentials:true
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true)
      } catch (error) {
        setIsAuthorized(false)
      }
    };
    fetchUser();
  }
  ,[isAuthorized])
  return (
    <>
     <BrowserRouter>
       {/* <Navbar/> */}
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/singh" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Sidebardata/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
      {/* <Footer/> */}
      <Toaster/>
     </BrowserRouter>
    </>
  )
}

export default App