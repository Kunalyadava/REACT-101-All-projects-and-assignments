import React from 'react'

export default function Login() {
    
    return (
        <div>
            <form data-testid = "auth_form"  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input  style = {{padding:"5px", margin: "10px"}} type = "submit"/>

            </form>                
        </div>
    )
}