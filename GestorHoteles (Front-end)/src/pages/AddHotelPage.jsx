import React, { useState } from 'react'
import { ModalTypeRoom } from '../components/Modal/ModalTypeRoom';
import { Link } from 'react-router-dom';
import { ModalRoom } from '../components/Modal/ModalRoom';
import { ModalHotel } from '../components/Modal/ModalHotel';

export const AddHotelPage = () => {
    const [showModalTypeRoom, setShowModalTypeRoom] = useState(false);
    const [showModalRoom, setShowModalRoom] = useState(false);
    const [showModalHotel, setShowModalHotel] = useState(false);

    const handleOpenModal = () => {
        setShowModalTypeRoom, setShowModalRoom, setShowModalHotel(true);
        console.log(showModalTypeRoom, showModalRoom);
    };

    const handleCloseModal = () => {
        setShowModalTypeRoom, setShowModalRoom, setShowModalHotel(false);
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
                                        {/* <img src={cellarImg} alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} /> */}
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
                                        {/* <img src={accountImg} alt="Accounts Image" className="card-img" style={{ width: "95%", height: "95%" }} /> */}
                                    </ul>                                    
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal}>Add</button>                                    
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
                                        {/* <img src={clientImg} alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} /> */}
                                    </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal}>Add</button>
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
            <ModalRoom isOpen={showModalRoom} onClose={handleCloseModal}></ModalRoom>
            <ModalHotel isOpen={showModalHotel} onClose={handleCloseModal}></ModalHotel>
        </>
    )
}
