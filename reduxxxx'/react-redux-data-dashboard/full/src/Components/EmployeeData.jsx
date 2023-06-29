import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoffee, getEmployeeData } from '../Redux/AppReducer/action'

export default function Dashboard() {

  const employeeData = useSelector((state) => state.employeeData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEmployeeData())

  }, [])


  console.log(employeeData)
  return (
   <div>
     <h2 style = {{textAlign: "center"}} >Employee Data</h2>
      <div className = "employee_data_cont" style = {{display: "flex", gap: "50px", margin: "50px", flexWrap: "wrap"}} >
        {
          employeeData && employeeData.map(item => {
            return(
              <div className = "employee" style = {{width: "250px"}}  >
                <img src = {item.image} className = "image" alt = "img" width = "70%" />
                <div className = "name"> {item.name} </div>
                <div className = "gender"> {item.gender} </div>
                <div className = "department"> {item.department} </div>
              </div>
            )
          })
        }
    </div>
   </div>
   
  )
}