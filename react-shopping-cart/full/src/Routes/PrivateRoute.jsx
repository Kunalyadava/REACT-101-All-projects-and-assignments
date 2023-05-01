import React, { Component } from 'react'
import {Context} from '../Context/ContextProvider'
import {Outlet,  Navigate} from 'react-router-dom'

import { useContext } from 'react'

export default function PrivateRoute({Component, ...rest}) {
    const {authDetails} = useContext(Context)

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
            <Navigate to= "/" replace = {true} />
        )
    }

}