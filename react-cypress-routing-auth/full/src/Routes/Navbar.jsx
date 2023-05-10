import { NavLink } from 'react-router-dom'

const links = [
    {
        to: "/login",
        title: "Login"
    },
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/about",
        title: "About"
    },
    {
        to: "/contact",
        title: "Contact"
    },
    {
      to: "/products",
      title: "Products"
    }
]

function Navbar() {
    return(
        <div className = "navbar" >
            {
                links.map( (link) => (
                    <NavLink
                        exact
                        style= {{ padding: 20 , fontSize: "20px", backgroundColor: "whitesmoke", textDecoration: "none"}}
                        activeStyle= {{fontWeight: "bold", color: "red"}}
                        key= {link.to}
                        to={link.to} >
                            {link.title}
                    </NavLink>
                ) )
            }
        </div>
    )
}

export { Navbar }