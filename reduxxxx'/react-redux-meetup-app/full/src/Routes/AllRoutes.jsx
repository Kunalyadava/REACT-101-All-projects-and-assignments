import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Register from '../Components/Register'

export default function AllRoutes() {
    return (
        <div>
             <Routes>
                <Route path = "/" exact element={<Login />} />
                <Route path = "/dashboard" exact element={<Dashboard />} />
                <Route path = "/home" exact element={<Home />} />
                <Route path = "/register" exact element={<Register />} />
            </Routes>
        </div>
    )
}