import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MovieDetails from '../pages/MovieDetails';
import Register from '../pages/Register';
import PrivateRouter from './PrivateRouter';


const AppRouter = () => {




  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/details/:id" element={<MovieDetails/>}/> */}
        <Route element={<PrivateRouter/>} >
            <Route path="/details/:id" element={<MovieDetails/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter