import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../Redux/AppReducer/action'
import { useEffect } from 'react'

export default function Register() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const [interests, setInterests] = useState("")
    const isAuth = useSelector((state) => state.AppReducer.isAuth);
    const dispatch = useDispatch();
    let navigate = useNavigate()

    const handleSubmit= (e) => {
        e.preventDefault()
        dispatch(registerUser(name, location, interests, password))
    }
    
    useEffect(() => {
        if(isAuth){
            navigate(`/dashboard`)
        }

    }, [isAuth])

    return (
        <div>
            <form onSubmit = {handleSubmit} className = "auth_form"  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 350}}
                    type = "name"
                    className = "name"
                    placeholder = "Enter Name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)} 
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 350}}
                    type = "text"
                    className = "location"
                    placeholder = "Location"
                    value = {location}
                    onChange = {(e) => setLocation(e.target.value)} 
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 350}}
                    type = "text"
                    className = "interests"
                    placeholder = "What are your interests? Add comma separated values"
                    value = {interests}
                    onChange = {(e) => setInterests(e.target.value)} 
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 350}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)} 
                />
                <br />
                <input  className = "submit" style = {{padding:"5px", margin: "10px"}} type = "submit"/>

            </form>                
        </div>
    )
}