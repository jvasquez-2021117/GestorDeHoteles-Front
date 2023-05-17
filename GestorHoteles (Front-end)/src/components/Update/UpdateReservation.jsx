import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const UpdateReservation = () => {
    const [tableReservation, setTableReservation] = useState([{}])
    const { id } = useParams();


    const [room, setRoom] = useState([{}])
    const [hotel, setHotel] = useState([{}])
    const [event, setEvent] = useState([{}])
    /* const [user, setUser] = useState([{}]) */

    const getRoom = async () => {
        try {
            const { data } = await axios('http://localhost:3200/room/get')
            setRoom(data.rooms)
        } catch (e) {
            console.log(e);
        }
    }
    const getHotel = async () => {
        try {
            const { data } = await axios('http://localhost:3200/hotel/getHotel')
            setHotel(data.hotel)
        } catch (e) {
            console.log(e);
        }
    }
    const getEvent = async () => {
        try {
            const { data } = await axios('http://localhost:3200/events/getEvent')
            setEvent(data.event)
        } catch (e) {
            console.log(e);
        }
    }
    /*     const getUser = async () => {
            try {
                const { data } = await axios('http://localhost:3200/user/get')
                setUser(data.users)
            } catch (e) {
                console.log(e);
            }
        } */
    const getTableReservation = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/reservation/getById/${id}`)
            setTableReservation(data.reservation)
        } catch (e) {
            console.log(e);
        }
    }

    const updateReservation = async () => {
        try {
            let updatedReservation = {
                /* user: document.getElementById('').value, */
                hotel: document.getElementById('inputHotel').value,
                room: document.getElementById('inputRoom').value,
                event: document.getElementById('inputEvent').value,
                /* date: document.getElementById('inputDate').value */
            }
            const { data } = await axios.put(`http://localhost:3200/reservation/updateReservation/${id}`, updatedReservation)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getRoom(),
            getHotel(),
            getEvent(),
            /* getUser(), */
            getTableReservation()
    }, [])

    return (
        <>
            <section className='vh-100'>
                <div className="container h-100">
                    <div className='row d-flex justify-content-center h-100'>
                        <div className='col-xl-9'>
                            <div className='card'>
                                <div className='card-body'>
                                    <form action="#">
                                        <div className="row">
                                            <div className=" col form-group">
                                                <label htmlFor="inputHotel" className="form-label">Hotel</label>
                                                <select id="inputHotel" className="form-control" required>
                                                    {
                                                        hotel.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id} defaultValue={tableReservation.hotel}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col form-group">
                                                <label htmlFor="inputRoom" className="form-label">Room</label>
                                                <select name="" id="inputRoom" className="form-control" required>
                                                    {
                                                        room.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id} defaultValue={tableReservation.room}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col form-group">
                                                <label htmlFor="inputEvent" className="form-label">Event</label>
                                                <select name="" id="inputEvent" className="form-control" required>
                                                    {
                                                        event.map(({ _id, name }, i) => {
                                                            return (
                                                                <option key={i} value={_id} defaultValue={tableReservation.event}>{name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col form-group">
                                                <label htmlFor="inputDate">Date</label>
                                                <input type="date" className="form-control" id="inputDate" defaultValue={tableReservation.date} />
                                            </div>
                                        </div>
                                        <br />
                                        <center>
                                            <Link to={'/reservation'}>
                                                <button onClick={() => updateReservation()} type="submit" className="btn btn-success btn-lg">Lease</button>
                                            </Link>
                                            <Link to={'/reservation'}>
                                                <button type="submit" className="btn btn-danger btn-lg">Cancel</button>
                                            </Link>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
