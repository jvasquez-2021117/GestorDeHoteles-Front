import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

export const ModalHotel = ({ isOpen, onClose }) => {

    const [room, setRoom] = useState([{}])

    const getRoom = async () => {
        try {
            const { data } = await axios('http://localhost:3200/room/get')
            setRoom(data.rooms)
        } catch (e) {
            console.log(e);
        }
    }

    const addHotel = async () => {
        try {
            let hotel = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                address: document.getElementById('inputAddress').value,
                qualification: document.getElementById('inputQualification').value,
                /* rooms: document.getElementById('inputRoom').value */
            }
            const { data } = await axios.post('http://localhost:3200/hotel/addHotelImg', hotel);
            alert(data.message)
        } catch (e) {
            console.log(e);
        }
    }

    if (!isOpen) {
        return null
    }

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className='text-dark'>ADD HOTEL</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id='inputName' aria-describedby='nameHelp' placeholder='Name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputDescription" className="form-label">Description</label>
                            <textarea className='form-control' name="" id="inputDescription" placeholder='Description'></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <textarea className='form-control' name="" id="inputAddress" placeholder='Address'></textarea>
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
                            <label htmlFor="inputQualification" className="form-label">Qualification</label>
                            <select className="form-control" id="inputQualification">
                                <option>1 estrella</option>
                                <option>2 estrellas</option>
                                <option>3 estrellas</option>
                                <option>4 estrellas</option>
                                <option>5 estrellas</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <div className="col-md- pe-5">
                                <h6 className="mb-0">Photo</h6>
                                <input className="form-control " id="formFileLg" type="file" />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => addHotel()} type="submit" className="btn btn-primary">Add</button>
                    <button className='btn btn-danger' onClick={onClose}>cerrar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
