import React, { useState } from 'react'
import { OptionHome } from '../components/OptionHome'
import { Sidebar } from '../components/Sidebar'
import { OptionHotels } from '../components/Options/OptionHotels'
import { ModalReservation } from '../components/Modal/ModalReservation'

export const HomePage = () => {
    const [showModalReservation, setShowModalReservation] = useState(false)
    
    const handleOpenModal4 = () => {
        setShowModalReservation(true);
        console.log(showModalReservation);
    }
    const handleCloseModal4 = () => {
        setShowModalReservation(false);
    }
    return (
        <>
            <div className="container t">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-3 mb-3" >
                        <div className="card">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-3">
                                <button onClick={handleOpenModal4} type="button" className="w-100 btn btn-lg btn-outline-success">Reservation</button>
                                <br />
                                <br />                                
                                <OptionHotels />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <ModalReservation isOpen={showModalReservation} onClose={handleCloseModal4}></ModalReservation>
        </>
    )
}
