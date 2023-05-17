/* import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export const ModalUpdateReservation = ({ isOpen, onClose }) => {
    const [tableReservation, setTableReservation] = useState([{}])
    const {id} = useParams();


    const [room, setRoom] = useState([{}])
    const [hotel, setHotel] = useState([{}])
    const [event, setEvent] = useState([{}])
    const [user, setUser] =useState([{}])

    const getRoom = async () => {
        try {
            const { data } = await axios('http://localhost:3200/room/get')
            setRoom(data.rooms)
        } catch (e) {
            console.log(e);
        }
    }
    const getHotel = async() =>{
        try {
            const { data } = await axios('http://localhost:3200/hotel/getHotel')
            setHotel(data.hotel)
        } catch (e) {
            console.log(e);
        }
    }
    const getEvent = async() =>{
        try {
            const { data } = await axios('http://localhost:3200/events/getEvent')
            setEvent(data.event)
        } catch (e) {
            console.log(e);
        }
    }
    const getUser = async() =>{
        try {
            const { data } = await axios('http://localhost:3200/user/get')
            setUser(data.users)
        } catch (e) {
            console.log(e);
        }
    }
    const getTableReservation = async() => {
        try {
            const { data } = await axios(`http://localhost:3200/reservation/getById/${id}`)
            setTableReservation(data.reservation)
        } catch (e) {
            console.log(e);
        }
    }

    const updateReservation = async() =>{
        try {
            let updatedReservation = {
                user: document.getElementById('').value,
                hotel: document.getElementById('inputHotel').value,
                room: document.getElementById('inputRoom').value,
                event: document.getElementById('inputEvent').value,
                date: document.getElementById('inputDate').value
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
        getUser(),
        getTableReservation()
    }, [])
    if (!isOpen) {
        return null
    }
    return (
        <>
        <Modal show={isOpen}>
            <Modal.Header>
                    <Modal.Title className='text-dark'>Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                    <div className="mb-3">
                            <label htmlFor="inputUser" className="form-label">User</label>
                            <select name="" id="inputUser" className="form-control" required>
                                {
                                    user.map(({ _id, name }, i) => {
                                        return (
                                            <option key={i} value={_id} defaultValue={tableReservation.user}>{name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputHotel" className="form-label">Hotel</label>
                            <select name="" id="inputHotel" className="form-control" required>                                
                                {
                                    hotel.map(({_id, name}, i)=> {
                                        return(
                                            <option key={i} value={_id} defaultValue={tableReservation.hotel}>{name}</option>                                            
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
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
                        <div className="mb-3">
                            <label htmlFor="inputEvent" className="form-label">Event</label>
                            <select name="" id="inputEvent" className="form-control" required>                                
                                {
                                    event.map(({_id, name}, i) =>{
                                        return(
                                            <option key={i} value={_id} defaultValue={tableReservation.event}>{name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDate">Date</label>
                            <input type="date" className="form-control" id="inputDate" defaultValue={tableReservation.date} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-primary">Add</button>
                    <button className='btn btn-danger' onClick={onClose}>cerrar</button>
                </Modal.Footer>
        </Modal>
        </>
    )
}
 */