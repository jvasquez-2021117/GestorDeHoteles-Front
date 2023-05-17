import React, { useState } from 'react'
import { ModalTypeRoom } from '../components/Modal/ModalTypeRoom';
import { Link } from 'react-router-dom';
import { ModalRoom } from '../components/Modal/ModalRoom';
import { ModalHotel } from '../components/Modal/ModalHotel';
import room from '../assets/room.jpg';
import typeRoom from '../assets/typeRoom.jpg';
import hotel from '../assets/hotel.jpg';
import typeEvent from '../assets/typeEvent.jpg'
import event from '../assets/eventAdmin.jpg'
import { ModalReservation } from '../components/Modal/ModalReservation';
import { useNavigate } from 'react-router-dom';
import { ModalTypeEvent } from '../components/Modal/ModalTypeEvent';
import { ModalEvent } from '../components/Modal/ModalEvent';
import reservation from '../assets/reservations.jpg';

export const AddHotelPage = () => {

    const navigate = useNavigate()

    const [showModalTypeRoom, setShowModalTypeRoom] = useState(false);
    const [showModalRoom, setShowModalRoom] = useState(false);
    const [showModalHotel, setShowModalHotel] = useState(false);
    const [showModalTypeEvent, setShowModalTypeEvent] = useState(false);
    const [showModalEvent, setShowModalEvent] = useState(false)

    const handleOpenModal = () => {
        setShowModalTypeRoom(true);
        console.log(showModalTypeRoom);
    };
    const handleCloseModal = () => {
        setShowModalTypeRoom(false);
    }

    const handleOpenModal2 = () => {
        setShowModalRoom(true);
        console.log(showModalRoom);
    };
    const handleCloseModal2 = () => {
        setShowModalRoom(false);
    }

    const handleOpenModal3 = () => {
        setShowModalHotel(true);
        console.log(showModalHotel);
    };
    const handleCloseModal3 = () => {
        setShowModalHotel(false);
    };

    const handleOpenModal4 = () => {
        setShowModalTypeEvent(true);
    };
    const handleCloseModal4 = () => {
        setShowModalTypeEvent(false);
    };

    const handleOpenModal5 = () => {
        setShowModalEvent(true);
    };
    const handleCloseModal5 = () => {
        setShowModalEvent(false);
    };

    return (
        <>
            <div className="container py-3">
                <header>
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal">Options Admin</h1>
                        <p className="fs-5 text-muted">Unique option of the Administrator. Where you can enter the crud of the storage you can edit, delete and add</p>
                    </div>
                </header>
                <main>
                    <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Type Room</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <img src={typeRoom} alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} />
                                    </ul>
                                    <div className='row'>
                                        <div className='col'>
                                            <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal}>Add</button>
                                        </div>
                                        <div className='col'>
                                            <button onClick={() => navigate('/viewTypeRoom')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Rooms</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <img src={room} alt="Accounts Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                                    </ul>
                                    <div className='row'>
                                        <div className='col'>
                                            <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal2}>Add</button>
                                        </div>
                                        <div className='col'>
                                            <button type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                            <div className="row">
                                                <div className="col">
                                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal2}>Add</button>
                                                </div>
                                                <div className="col">
                                                    <Link to={'/viewRooms'}>
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-success" >View</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-4 rounded-3 shadow-sm">
                                        <div className="card-header py-3">
                                            <h4 className="my-0 fw-normal">Event</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled mt-3 mb-4">
                                                <img src={event} alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} />
                                            </ul>
                                            <div className="row">
                                                <div className="col">
                                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal5}>Add</button>
                                                </div>
                                                <div className="col">
                                                    <button type="button" className="w-100 btn btn-lg btn-outline-success" >View</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card mb-4 rounded-3 shadow-sm">
                                        <div className="card-header py-3">
                                            <h4 className="my-0 fw-normal">Hotel</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled mt-3 mb-4">
                                                <img src={hotel} alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                                            </ul>
                                            <div className="row">
                                                <div className="col">
                                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal3}>Add</button>
                                                </div>
                                                <div className="col">
                                                    <Link to={'/viewHotels'}>
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-success" >View</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-4 rounded-3 shadow-sm">
                                        <div className="card-header py-3">
                                            <h4 className="my-0 fw-normal">Type Event</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled mt-3 mb-4">
                                                <img src={typeEvent} alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} />
                                            </ul>
                                            <div className="row">
                                                <div className="col">
                                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal4}>Add</button>
                                                </div>
                                                <div className="col">
                                                    <button onClick={() => navigate('/viewEventType')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card mb-4 rounded-3 shadow-sm">
                                        <div className="card-header py-3">
                                            <h4 className="my-0 fw-normal">Reservation</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled mt-3 mb-4">
                                                <img src={reservation} alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                                            </ul>
                                            <div className="row">
                                                <div className="col">
                                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal5}>Add</button>
                                                </div>
                                                <div className="col">
                                                    <button onClick={() => navigate('/viewEvent')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <ModalTypeRoom isOpen={showModalTypeRoom} onClose={handleCloseModal}></ModalTypeRoom>
            <ModalRoom isOpen={showModalRoom} onClose={handleCloseModal2}></ModalRoom>
            <ModalHotel isOpen={showModalHotel} onClose={handleCloseModal3}></ModalHotel>
            <ModalTypeEvent isOpen={showModalTypeEvent} onClose={handleCloseModal4}></ModalTypeEvent>
            <ModalEvent isOpen={showModalEvent} onClose={handleCloseModal5}></ModalEvent>
        </>
    )
}
