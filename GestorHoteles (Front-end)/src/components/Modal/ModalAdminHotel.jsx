import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

export const ModalAdminHotel = ({ isOpen, onClose }) => {
    const [hotel, setHotel] = useState([{}])

    const getHotel = async () => {
        try {
            const { data } = await axios('http://localhost:3200/hotel/getHotel')
            setHotel(data.hotel)
        } catch (e) {
            console.log(e);
        }
    }

    const addAdminHotel = async() => {
        try {
            let admminHotel = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                email: document.getElementById('inputEmail').value,
                password: document.getElementById('inputPassword').value,
                hotel: document.getElementById('inputHotel').value
            }
            const { data } = await axios.post('http://localhost:3200/userHotel/add', admminHotel)
            alert(data.message)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getHotel, [])

    if (!isOpen) {
        return null
    }
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className='text-dark'>CREATE ADMIN HOTEL</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id='inputName' placeholder='Name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputSurname" className="form-label">Surname</label>
                            <input type="text" className="form-control" id='inputSurname' placeholder='Surame' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" name="" id="inputEmail" className='form-control' placeholder='name@gmail.com' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputHotel" className="form-label">Hotel</label>
                            <select name="" id="inputHotel" className="form-control" required>
                                {
                                    hotel.map(({ _id, name }, i) => {
                                        return (
                                            <option key={i} value={_id}>{name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" name="" id="inputPassword" className='form-control' placeholder='Password'/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => addAdminHotel()} type="submit" className="btn btn-primary">Add</button>
                    <button className='btn btn-danger' onClick={onClose}>cerrar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}