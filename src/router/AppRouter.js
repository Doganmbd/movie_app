import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';


const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter