import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'

export const ModalReservation = ({ isOpen, onClose }) => {
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

    const createReservation = async() =>{
        try {
            let reservation = {
                user: document.getElementById('inputUser').value,
                hotel: document.getElementById('inputHotel').value,
                room: document.getElementById('inputRoom').value,
                event: document.getElementById('inputEvent').value,
                date: document.getElementById('inputDate').value
            }
            const { data } = await axios.post('http://localhost:3200/reservation/addReservation', reservation)
            alert(data.message)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getRoom, [])
    useEffect(() => getHotel, [])
    useEffect(() => getEvent, [])
    useEffect(() => getUser, [])
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
                                    user.map(({_id, name}, i)=> {
                                        return(
                                            <option key={i} value={_id}>{name}</option>                                            
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
                                            <option key={i} value={_id}>{name}</option>                                            
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
                                            <option key={i} value={_id}>{name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEvent" className="form-label">Event</label>
                            <select name="" id="inputEvent" className="form-control" required>
                                <option value="">Any</option>
                                {
                                    event.map(({_id, name}, i) =>{
                                        return(
                                            <option key={i} value={_id}>{name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDate">Date</label>
                            <input type="date" className="form-control" id="inputDate" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => createReservation()} type="submit" className="btn btn-primary">Add</button>
                    <button className='btn btn-danger' onClick={onClose}>cerrar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
