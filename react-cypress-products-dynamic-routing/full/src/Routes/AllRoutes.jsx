import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from '../Pages/AllProducts'
import ProductDetails from '../Pages/ProductDetails'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path = "/" exact element={<AllProducts />} />
                <Route path = "/products/:id" exact element={<ProductDetails />} />
            </Routes>
        </div>
    )
}
