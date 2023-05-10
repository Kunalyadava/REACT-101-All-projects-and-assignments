import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import axios from 'axios'

export default function Login() {
    const { authDetails, setAuthDetails } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                ...authDetails,
                isAuth: true,
                loading: false,
                token: res.data.token,

            })
        })
        .catch(err => {
            setAuthDetails({
                ...authDetails,
                isAuth: false,
                loading: false
            })
        })
    }
    
    return (
        <div>
            <form onSubmit = {handleSubmit} data-testid = "auth_form"  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    data-testid = "email"

                    placeholder = "Enter Email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)} 
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} 
                />
                <br />
                <input  style = {{padding:"5px", margin: "10px"}} type = "submit"/>

            </form>                
        </div>
    )
}
