import React from 'react'

export default function Login() {
    
    return (
        <div>
            <form className = "auth_form"  >
                <input
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>                
        </div>
    )
}