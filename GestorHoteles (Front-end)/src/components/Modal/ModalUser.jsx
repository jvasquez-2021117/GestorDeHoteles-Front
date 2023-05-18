import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Swal from 'sweetalert2'
import { Modal } from 'react-bootstrap';

export const ModalUser = ({ isOpen, onClose }) => {

    const [tableUser, setTableUser] = useState({})

    return (
        <>
            <>
                <Modal show={isOpen}>
                    <Modal.Header>
                        <Modal.Title className="text-dark">Update User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input type="text" defaultValue={tableUser.name} className="form-control" id="inputName" aria-describedby="nameHelp" placeholder='Name' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputDescription" className="form-label">Surname</label>
                                <input type="text" defaultValue={tableUser.surname} className="form-control" id="inputSurname" aria-describedby="nameHelp" placeholder='Name' />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => updateUser()} type="submit" className="btn btn-primary">Add</button>
                        <button className='btn btn-danger' onClick={onClose}>cerrar</button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )

}
