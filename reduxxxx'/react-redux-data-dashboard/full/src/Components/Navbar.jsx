import { NavLink } from 'react-router-dom'

const links = [
    {
        to: "/coffee-data",
        title: "CoffeeData"
    },
    {
        to: "/employee-data",
        title: "EmployeeData"
    },
    {
        to: "/restaurant-data",
        title: "RestaurantData"
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