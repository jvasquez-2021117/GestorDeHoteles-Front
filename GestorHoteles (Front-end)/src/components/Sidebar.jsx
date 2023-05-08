import React from 'react'

export const Sidebar = () => {
    return (
        <>
            <div className='card-body'>
                <form>
                    <div className="row">
                        <div className="">
                            <label htmlFor="inputDestination">Destino</label>
                            <input type="text" className="form-control" id="inputDestination" placeholder="Introduce tu destino" />
                        </div>
                        <div className="">
                            <label htmlFor="inputCheckIn">Check-in</label>
                            <input type="date" className="form-control" id="inputCheckIn" />
                        </div>
                        <div className="">
                            <label htmlFor="inputCheckOut">Check-out</label>
                            <input type="date" className="form-control" id="inputCheckOut" />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <label htmlFor="inputGuests">Huéspedes</label>
                            <select className="form-control" id="inputGuests">
                                <option>1 adulto</option>
                                <option>2 adultos</option>
                                <option>3 adultos</option>
                                <option>4 adultos</option>
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="inputRooms">Habitaciones</label>
                            <select className="form-control" id="inputRooms">
                                <option>1 habitación</option>
                                <option>2 habitaciones</option>
                                <option>3 habitaciones</option>
                                <option>4 habitaciones</option>
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="inputPrice">Precio máximo por noche</label>
                            <select className="form-control" id="inputPrice">
                                <option>Cualquier precio</option>
                                <option>Menos de $50</option>
                                <option>Menos de $100</option>
                                <option>Menos de $200</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
