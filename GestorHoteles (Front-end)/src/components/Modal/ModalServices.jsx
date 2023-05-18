import axios from 'axios'
import React from 'react'
import { Modal } from 'react-bootstrap'

export const ModalServices = ({ isOpen, onClose }) => {
    const addServices = async() => {
        try {
            let services = {
                name: document.getElementById('inputName').value,
                price: document.getElementById('inputPrice').value,
            }
            const { data } = await axios.post('http://localhost:3200/services/addServices', services)
            alert(data.message);
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
                    <Modal.Title className="text-dark">ADD Services</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder='Name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPrice" className="form-label">Price</label>
                            <input type="number" className="form-control" id="inputPrice" placeholder='Price' />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => addServices()} type="submit" className="btn btn-primary">Add</button>
                    <button className='btn btn-danger' onClick={onClose}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
