import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookDetailsPage from '../Pages/BookDetailsPage'
import Home from '../Pages/Home'
import InvalidPage from '../Pages/InvalidPage'
import SectionPage from '../Pages/SectionPage'

export default function AllRoutes() {
    return (
        <div>
             <Routes>
                <Route path = "/" exact element={<Home />} />
                <Route path = "/section/:section" exact element={<SectionPage />} />
                <Route path = "/bookdetailspage/:id" exact element={<BookDetailsPage />} />
                <Route path='*' element={<InvalidPage />} />
            </Routes>
        </div>
    )
}
