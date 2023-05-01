import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import ProductDetails from '../Pages/ProductDetails'
import Products from '../Pages/Products'
import PrivateRoute from './PrivateRoute'

export default function AllRoutes() {
    return (
        <div>
             <Routes>
                <Route path = "/" exact element={<Login />} />
                <Route element = {<PrivateRoute />} >
                    <Route path = "/products" exact element={<Products />} />
                    <Route path = "/products/:id" exact element={<ProductDetails />} />
                    <Route path = "/cart" exact element={<Cart />} />
                </Route>
            </Routes>
        </div>
    )
}