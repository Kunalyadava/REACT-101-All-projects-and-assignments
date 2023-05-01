import { Navigate,Route,Routes } from "react-router-dom"
import AuthContext from './Contexts/AuthContext'


export const PrivateRoute=({children})=>{
    const {isAuth}=useContext(AuthContext)

if(isAuth=='logout')
return <Navigate to="/login" />

return children

}