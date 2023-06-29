import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'

export default function AllRoutes() {
    return (
        <div>
             <Routes>
                <Route path = "/" exact element={<Login />} />
                <Route path = "/dashboard" exact element={<Dashboard />} />
            </Routes>
        </div>
    )
}