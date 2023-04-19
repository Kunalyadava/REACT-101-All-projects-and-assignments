import { useContext } from "react";
import {Context} from 'react'
import {AuthContext} from '../Context/AuthContextProvider'

export const Dashboard=()=>{
  const {logout,token}=useContext(AuthContext)
  return(

    <>
    <h3 data-testid="token">Token: {token}</h3>
    <button data-testid="logout" onClick={logout}>LOGOUT</button>
    </>
  )
}
 
 