import React, {useContext} from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export const Dashboard = () => {
    const { authDetails, setAuthDetails } = useContext(AuthContext)
    console.log("authDetails", authDetails)
    return (
        <div >
            <h3 style = {{padding:"10px"}} data-testid = "token"  >Token: {authDetails.token} </h3>
            <button style = {{padding:"5px", margin: 10}} data-testid = "logout" onClick = {() => setAuthDetails({...authDetails, isAuth: false, token: null})}>LOGOUT</button>
        </div>
    )
}
