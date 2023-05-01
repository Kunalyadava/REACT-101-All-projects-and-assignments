import React from 'react'
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Routes/Navbar"

const AllRoutes = () => {
    return (
        <div>
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path="/login" element={<Login/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/products" element={<Productss/>}/>
  <Route path="/about-us" element={<About />}/>
 </Routes>
</BrowserRouter>;
        </div>
    )
}

export {AllRoutes}
