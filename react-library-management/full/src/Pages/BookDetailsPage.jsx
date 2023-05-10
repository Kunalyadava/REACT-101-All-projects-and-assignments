import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"
import Navbar from "./Navbar"

export default function BookDetailsPage() {
    const [bookDetails, setBookDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`).then(res => setBookDetails(res.data))
    }, []) 

    console.log(bookDetails)
    return (
        <div>
            <Navbar />

            <div className="bookContainer" style = {{margin: 20, border: "1px solid grey", padding: "10px"}} >
                <h5 className="title">{bookDetails.title} </h5>
                <div className="price"> {bookDetails.price} </div>
                <div className="section"> {bookDetails.section} </div>
                <div className="author"> {bookDetails.author} </div>
                <div className="description">  {bookDetails.description} </div>
                <div className="isbn"> {bookDetails.isbn} </div>
            </div>
        </div>
    )
}
