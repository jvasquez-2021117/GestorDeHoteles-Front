import axios from 'axios'
import React from 'react'
import { Modal } from 'react-bootstrap'

export const ModalConsumption = ({ isOpen, onClose }) => {
    const addConsumption = async() => {
        try {
            let consumption = {
                product: document.getElementById('inputProduct').value,
                price: document.getElementById('inputPrice').value,
            }
            const { data } = await axios.post('http://localhost:3200/consumption/addConsumption', consumption)
            alert(data.message)
        } catch (e) {
            console.log(e);
        }
    }

    if (!isOpen) {
        return null;
    }
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className="text-dark">ADD Consumption</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputProduct" className="form-label">Product</label>
                            <input type="text" className="form-control" id="inputProduct" placeholder='Product' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPrice" className="form-label">Price</label>
                            <input type="number" className="form-control" id="inputPrice" placeholder='Price' />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => addConsumption()} type="submit" className="btn btn-primary">Add</button>
                    <button className='btn btn-danger' onClick={onClose}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
