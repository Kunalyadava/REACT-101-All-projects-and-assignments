import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Navbar() {
    let navigate = useNavigate()

    const handleSectionRedirect= (section) => {
      navigate(`/section/${section}`)
    }
    return (
        <div className="navbar" style = {{display: "flex", justifyContent: "space-around", backgroundColor: "pink"}} >
            <h4 onClick = {() => handleSectionRedirect(`mythology`)} className="mythology">Mythology</h4>
            <h4 onClick = {() => handleSectionRedirect(`mystery`)} className="mystery">Mystery</h4>
            <h4 onClick = {() => handleSectionRedirect(`history`)} className="history">History</h4>
            <h4 onClick = {() => handleSectionRedirect(`technology`)} className="technology">Technology</h4>
        </div>
    )
}
