import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export default function Login() {
    const { authDetails, setAuthDetails } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit= async(e) => {
        e.preventDefault()
        try {
            let res = await fetch("https://reqres.in/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email,
                password
              })
            });
            res = await res.json();
            console.log(res)
            // update auth
            setAuthDetails({
                ...authDetails,
                isAuth: true,
                loading: false,
                token: res.token,
            })
          } catch (err) {
            setAuthDetails({
                ...authDetails,
                isAuth: false,
                loading: false
            })
        }

        console.log(authDetails)
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