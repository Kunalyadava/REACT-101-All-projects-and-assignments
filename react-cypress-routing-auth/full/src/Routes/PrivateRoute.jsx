import React, { Component } from 'react'
import {AuthContext} from '../Context/AuthContextProvider'
import {Outlet,  Navigate} from 'react-router-dom'

import { useContext } from 'react'

export default function PrivateRoute({Component}) {
    const {authDetails} = useContext(AuthContext)

    console.log(authDetails.isAuth)
    if(authDetails.isAuth){
        return (
            <div>
                <Outlet />
            </div>
        )
    }
    else {
        return(
            <Navigate to= "/login" replace = {true} />
        )
    }

}