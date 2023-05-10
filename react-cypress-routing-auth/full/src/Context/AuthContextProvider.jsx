import React, {useState} from 'react'
import App from '../App'

export var AuthContext = React.createContext()

export default function AuthContextProvider() {
  const [authDetails, setAuthDetails] = useState({
    isAuth: false,
  }) 

  const value = {
    authDetails, 
    setAuthDetails
  }

  return (
    <div>
      <AuthContext.Provider value = {value}>
        <App />
      </AuthContext.Provider> 
    </div>
  )
}
