import axios from 'axios'
import React from 'react'
import { Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const ModalBill = ({ isOpen, onClose, id }) => {

    const [services, setServices] = useState([{}])
    const [consumption, setConsumption] = useState([{}])
    const [reservation, setReservation] = useState({})
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [disabledButtons2, setDisabledButtons2] = useState([]);
    const [arrayServices, setArrayServices] = useState([]);
    const [arrayConsumption, setArrayConsumption] = useState([]);


    const getReservation = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3200/reservation/getById/${id}`);
            setReservation(data.reservation)
        } catch (e) {
            console.log(e);
        }
    }
    
    const getServices = async () => {
        try {
            const { data } = await axios('http://localhost:3200/services/getService');
            setServices(data.service)
        } catch (e) {
            console.log(e);
        }
    }

    const getConsumption = async () => {
        try {
            const { data } = await axios('http://localhost:3200/consumption/getConsumption');
            setConsumption(data.consumption)
        } catch (e) {
            console.log(e);
        }
    }

    const addArrayServices = (id, index) => {
        setArrayServices([
            ...arrayServices,
            id
        ]);
        setDisabledButtons([...disabledButtons, index]);
        console.log(arrayServices);
    }

    const addArrayConsumption = (id, index) => {
        setArrayConsumption([
            ...arrayConsumption,
            id
        ]);
        setDisabledButtons2([...disabledButtons2, index]);
        console.log(arrayConsumption);
    }

    const deleteArrayService = (id, index) => {
        let posicion = arrayServices.indexOf(id);
        if (posicion !== -1) {
            const newArray = [...arrayServices];
            newArray.splice(posicion, 1);
            setArrayServices(newArray);
        }
        setDisabledButtons(disabledButtons.filter((i) => i !== index));
        console.log(arrayServices);
    }

    const deleteArrayConsumption = (id, index) => {
        let posicion = arrayConsumption.indexOf(id);
        if (posicion !== -1) {
            const newArray = [...arrayConsumption];
            newArray.splice(posicion, 1);
            setArrayConsumption(newArray);
        }
        setDisabledButtons2(disabledButtons2.filter((i) => i !== index));
        console.log(arrayConsumption);
    }

    const addBill = async () => {
        try {
            let bill = {
                user: reservation.user._id,
                nit: document.getElementById('inputNit').value,
                hotel: reservation.hotel._id,
                room: reservation.room._id,
                services: arrayServices,
                consumption: arrayConsumption,
                description: 'hola'
            }
            console.log(reservation.hotel._id);
            const { data } = await axios.post('http://localhost:3200/bill/addBill', bill)
            alert(data.message)
        } catch (e) {
            console.log(e);
        }
    }

    

    useEffect(() => getReservation, [])
    useEffect(() => getServices, [])
    useEffect(() => getConsumption, [])


    if (!isOpen) {
        return null;
    }

    return (
        <>
            <>
                <Modal show={isOpen}>
                    <Modal.Header>
                        <Modal.Title className="text-dark">ADD Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputUser" className="form-label">Name</label>
                                <input defaultValue={reservation.user.name} type="text" className="form-control" id="inputUser" aria-describedby="nameHelp" placeholder='User' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputNit" className="form-label">Nit</label>
                                <input type="text" className="form-control" id="inputNit" aria-describedby="nameHelp" placeholder='Nit' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputHotel" className="form-label">Hotel</label>
                                <input defaultValue={reservation.hotel.name} type="text" className="form-control" id="inputHotel" aria-describedby="nameHelp" placeholder='Hotel' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputRoom" className="form-label">Room</label>
                                <input defaultValue={reservation.room.name} type="text" className="form-control" id="inputRoom" aria-describedby="nameHelp" placeholder='Room' />
                            </div>
                        </form>
                        <div className="table-responsive table-lg mt-3">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Services</h4>
                                </div>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{color: "black"}}>Name</th>
                                                    <th style={{color: "black"}}>Price</th>
                                                    <th style={{color: "black"}}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    services.map(({ _id, name, price, color }, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{name}</td>
                                                                <td>{price}</td>
                                                                <td className="text-center align-middle">
                                                                    <div className="btn-group align-top">
                                                                        <button onClick={() => addArrayServices(_id, index)} disabled={disabledButtons.includes(index)} className={`btn btn-primary`}>Agregar</button>
                                                                        <button onClick={() => deleteArrayService(_id, index)} className='btn btn-danger'>Cancelar</button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="table-responsive table-lg mt-3">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Consumption</h4>
                                </div>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{color: "black"}}>Name</th>
                                                    <th style={{color: "black"}}>Price</th>
                                                    <th style={{color: "black"}}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    consumption.map(({ _id, product, price, color }, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{product}</td>
                                                                <td>{price}</td>
                                                                <td className="text-center align-middle">
                                                                    <div className="btn-group align-top">
                                                                        <button onClick={() => addArrayConsumption(_id, index)} disabled={disabledButtons2.includes(index)} className={`btn btn-primary`}>Agregar</button>
                                                                        <button onClick={() => deleteArrayConsumption(_id, index)} className='btn btn-danger'>Cancelar</button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => addBill()} type="submit" className="btn btn-primary">Crear</button>
                        <button className='btn btn-danger' onClick={onClose}>cerrar</button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )
}
