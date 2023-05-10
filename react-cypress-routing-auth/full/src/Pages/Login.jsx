import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
    const { authDetails, setAuthDetails } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit= (e) => {
        e.preventDefault()
        axios
        .post('https://reqres.in/api/login', {
            email,
            password
        })
        .then(res => {
            console.log(res)
            setAuthDetails({
                isAuth: true
            })
            navigate("/")
        })
        .catch(err => {
            
        })
    }
    
    return (
        <div>
            {
                authDetails.isAuth ? <Navigate to = "/" /> :

                <form style = {{marginTop: "40px"}}  onSubmit = {handleSubmit} className = "auth_form"  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"

                    placeholder = "Enter Email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)} 
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} 
                />
                <br />
                <input className = "submit"  style = {{padding:"5px", margin: "10px"}} type = "submit"/>

            </form>  
            }
                          
        </div>
    )
}