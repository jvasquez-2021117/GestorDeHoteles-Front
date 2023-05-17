import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TableReservation } from '../components/Tables/TableReservation'
import { Link } from 'react-router-dom'

export const ViewReservation = () => {

    const [tableReservation, setTableReservation] = useState([{}])

    const getTableReservation = async () => {
        try {
            const { data } = await axios('http://localhost:3200/reservation/getReservation')
            setTableReservation(data.reservation)
        } catch (e) {
            console.log(e);
        }
    }

    const deleteReservation = async (id) => {
        try {
            let confirmDelete = confirm("Are you sure you want to delete this hold?");
            if (confirmDelete) {
                const { data } = await axios.delete(`http://localhost:3200/reservation/deleteReservation/${id}`);
                console.log(data);
                getTableReservation();
            }
            location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getTableReservation, [])
    return (
        <>
            <br />
            <div className="container">
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-2 col-lg-8">
                        <input type="search" id="form1" className="form-control" />
                        <label className="form-label" htmlFor="form1" />
                    </div>
                </div >
                <section className="intro">
                    <div className="bg-image h-100" style={{ backgroundColor: '#f5f7fa' }}>
                        <div className="mask d-flex align-items-center h-100">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body p-0">
                                                <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '700px' }}>
                                                    <table className="table table-striped ">
                                                        <thead style={{ backgroundColor: '#8c7c62' }}>
                                                            <tr>
                                                                <th scope="col">User</th>
                                                                <th scope="col">Hotel</th>
                                                                <th scope="col">Room</th>
                                                                <th scope="col">Event</th>
                                                                <th scope='col'>Date</th>
                                                                <th scope='col'>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                tableReservation.map(({ _id, user, hotel, room, event, date }, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <TableReservation
                                                                                user={user?.name}
                                                                                hotel={hotel?.name}
                                                                                room={room?.name}
                                                                                event={event?.name}
                                                                                date={date}
                                                                            ></TableReservation>
                                                                            <td className="text-center align-middle">
                                                                                <div className="btn-group align-top">
                                                                                    <Link to={`update/${_id}`} className="btn btn-sm btn-primary btn-outline-secondary badge">
                                                                                        <button className="btn badge" type="button" data-toggle="modal" data-target="#user-form-modal">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                                            </svg>
                                                                                        </button>
                                                                                    </Link>
                                                                                    <Link to={'/reservation'} onClick={() => deleteReservation(_id)} className="btn btn-sm btn-danger btn-outline-secondary badge" type="button">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                                        </svg>
                                                                                    </Link>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div>
        </>
    )
}
