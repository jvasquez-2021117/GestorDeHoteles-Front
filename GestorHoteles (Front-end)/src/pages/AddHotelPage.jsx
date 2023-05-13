import React, { useState } from 'react'
import { ModalTypeRoom } from '../components/Modal/ModalTypeRoom';
import { Link } from 'react-router-dom';
import { ModalRoom } from '../components/Modal/ModalRoom';
import { ModalHotel } from '../components/Modal/ModalHotel';
import room from '../assets/room.jpg';
import typeRoom from '../assets/typeRoom.jpg';
import hotel from '../assets/hotel.jpg';

export const AddHotelPage = () => {
    const [showModalTypeRoom, setShowModalTypeRoom] = useState(false);
    const [showModalRoom, setShowModalRoom] = useState(false);
    const [showModalHotel, setShowModalHotel] = useState(false);

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
    }
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
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal}>Add</button>                                    
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
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal2}>Add</button>                                    
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
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal3}>Add</button>
                                </div>
                            </div>
                            {/* <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Services</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        
                                    </ul>
                                    <Link to={'services'}>
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">View</button>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </main>
            </div>
            <ModalTypeRoom isOpen={showModalTypeRoom} onClose={handleCloseModal}></ModalTypeRoom>  
            <ModalRoom isOpen={showModalRoom} onClose={handleCloseModal2}></ModalRoom>
            <ModalHotel isOpen={showModalHotel} onClose={handleCloseModal3}></ModalHotel>
        </>
    )
}
