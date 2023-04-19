import { createContext, useState } from "react";

export const AuthContext=createContext()

export default function AuthContextProvider({ children}){
 const [isAuth,setIsAuth]=useState(false) 
const [token,setToken]=useState(null)
// const [loading,setLoading]=useState(false)
// const [error,setError]=useState(false)
 const login =(token)=>{
  setIsAuth(true)
  setToken( token)
 }
 const logout =()=>{
  setIsAuth(true)
  setToken(null)
 }
  return(
   <AuthContext.Provider value={{isAuth,login,token,logout}}>
{ children}
  </AuthContext.Provider>
  )
}
