import React, {useState } from 'react'
import { authenticateUser } from '../Redux/AppReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isAuth = useSelector((state) => state.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit= (e) => {
        e.preventDefault()
        dispatch(authenticateUser(email, password))
    }
    
    useEffect(() => {
        if(isAuth){
            navigate(`/dashboard`)
        }
    }, [isAuth])

    console.log(isAuth)
    
    return (
        <div>
            <form onSubmit = {handleSubmit} className = "auth_form"  >
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
                <input className = "submit" style = {{padding:"5px", margin: "10px"}} type = "submit"/>

            </form>                
        </div>
    )
}