import React, {useContext} from 'react'
import { Dashboard } from './Components/Dashboard'
import Login from './Components/Login'
import { AuthContext } from './Context/AuthContextProvider'

export default function App() {
  const {authDetails} = useContext(AuthContext)
  return (
    <div>
      {
        authDetails.isAuth ? <Dashboard /> : <Login />
      }
    </div>
  )
}