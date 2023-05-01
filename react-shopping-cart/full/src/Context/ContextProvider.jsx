import React, {useState} from 'react'
import App from '../App'

export var Context = React.createContext()

export default function ContextProvider() {
  const [authDetails, setAuthDetails] = useState({
    isAuth: false,
    token: ""
  }) 
  const [cart, setCart] = useState([])

  const value = {
    authDetails, 
    setAuthDetails,
    cart,
    setCart
  }

  return (
    <div>
      <Context.Provider value = {value}>
        <App />
      </Context.Provider> 
    </div>
  )
}