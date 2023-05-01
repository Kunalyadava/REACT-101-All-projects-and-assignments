import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import  {Products}  from "./Pages/AllProducts";
import  {ProductDetails}  from "./Pages/ProductDetails";

export default function AllRoutes() {
    return (
        <div>
      <AllProducts />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
        </div>
    )
}
