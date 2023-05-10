import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products'
import Home from '../Pages/Home'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = "/" exact element={<Home />} />
                <Route path = "/about" exact element={<About />} />
                <Route path = "/contact" exact element={<Contact />} />
                <Route path = "/products" exact element={<Products />} />
            </Routes>
        </div>
    )
}

export {AllRoutes}