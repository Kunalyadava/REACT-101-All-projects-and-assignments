import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoffeeData from '../Components/CoffeeData'
import EmployeeData from '../Components/EmployeeData'
import RestaurantData from '../Components/RestaurantData'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = "/coffee-data" exact element={<CoffeeData />} />
                <Route path = "/employee-data" exact element={<EmployeeData />} />
                <Route path = "/restaurant-data" exact element={<RestaurantData />} />
            </Routes>
        </div>
    )
}

export {AllRoutes}
