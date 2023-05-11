import React, { useEffect, useState } from 'react'
import { TableUsers } from '../components/Tables/TableUsers'
import axios from 'axios'

export const ViewUsersPage = () => {
    const [tableUsers, setTableUsers] = useState([{}])

    const getTableUsers = async() =>{
        try {
            const { data } = await axios('http://localhost:3200/user/get')
            setTableUsers(data.users)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getTableUsers, [])
    return (
        <>        
            <br />
            <div className="container">
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-2 col-lg-8">
                        <input type="search" id="form1" className="form-control" />
                        <label className="form-label" htmlFor="form1" />
                    </div>
                    <div className="col-md-6 col-lg-2">
                        <button type="button" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div >
            {
                tableUsers.map(({_id, name, surname, email, role}, index) => {
                    return(
                        <div key={index}>
                            <TableUsers
                            name={name}
                            surname={surname}
                            email={email}
                            role={role}
                            ></TableUsers>
                        </div>
                    )
                })
            }            
            <br />
        </>
    )
}
