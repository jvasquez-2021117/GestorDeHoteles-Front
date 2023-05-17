import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TableReservation } from '../components/Tables/TableReservation'

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
                    <div className="col-md-6 col-lg-2">
                        <button type="button" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
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
            </section>
            <br />
        </>
    )
}
