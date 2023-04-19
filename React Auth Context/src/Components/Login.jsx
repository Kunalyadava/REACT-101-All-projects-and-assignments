
import React, {useState} from 'react'
import {AuthContext} from '../Context/AuthContextProvider'
import {useContext} from 'react'

export default function Login() {
    const {login,isAuth}=useContext(AuthContext)
    const[email,setEmail]=useState("eve.holt@reqres.in")
    const [password,setPassword]=useState("cityslicka")
    const handleLogin=(e)=>{
        e.preventDefault();
        const userDetails={
            email,password,
        };
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(userDetails),
            headers:{
                "Content-Type":"application/json",
            },
        }).then((res)=>(res.json()))
        .then((data)=>{
            login(data.token)
         })
          .catch((err)=>{
            console.log(err)
        })
    };
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleLogin} >
                <input onChange={(e)=>setEmail(e.target.value)}
                    type = "email"
                    value={email}
                    data-testid = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input onChange={(e)=>setPassword(e.target.value)}
                    type = "password"
                    value={password}
                    data-testid = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}
