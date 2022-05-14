import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((data) => {
                    setEmployees(data)
                })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("employees/create")}>Hire Employee</button>
            </div>
            {
                employees.slice(0, 5).map(
                    (employeeObject) => {
                        return <p key={`employee--${employeeObject.id}`}>{employeeObject.name} works at {employeeObject.location.address}</p>
                    }
                )
            }
        </>
    )
}