import React from 'react'
import {useContext} from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRouter = () => {
    const {currentUser} = useContext(AuthContext)
    let location = useLocation

    if(!currentUser) {
        return <Navigate to="/login" state={{from:location}} recipe/>
    }
  return  ( 
  <Outlet/> 
  /* ROute içindeki childrenı ifade eder. */
  )
    
}

export default PrivateRouter