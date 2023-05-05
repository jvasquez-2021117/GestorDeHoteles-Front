import React from 'react'

export const Sidebar = () => {
    return (
        <>
            <div>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                        <form>
                                    <div class="row">
                                        <div class="">
                                            <label for="inputDestination">Destino</label>
                                            <input type="text" class="form-control" id="inputDestination" placeholder="Introduce tu destino" />
                                        </div>

                                        <div class="">
                                            <label for="inputCheckIn">Check-in</label>
                                            <input type="date" class="form-control" id="inputCheckIn" />
                                        </div>

                                        <div class="">
                                            <label for="inputCheckOut">Check-out</label>
                                            <input type="date" class="form-control" id="inputCheckOut" />
                                        </div>
                                    </div>

                                    <div class="">
                                        <div class="">
                                            <label for="inputGuests">Huéspedes</label>
                                            <select class="form-control" id="inputGuests">
                                                <option>1 adulto</option>
                                                <option>2 adultos</option>
                                                <option>3 adultos</option>
                                                <option>4 adultos</option>
                                            </select>
                                        </div>

                                        <div class="">
                                            <label for="inputRooms">Habitaciones</label>
                                            <select class="form-control" id="inputRooms">
                                                <option>1 habitación</option>
                                                <option>2 habitaciones</option>
                                                <option>3 habitaciones</option>
                                                <option>4 habitaciones</option>
                                            </select>
                                        </div>                                        
                                        <div class="">
                                            <label for="inputPrice">Precio máximo por noche</label>
                                            <select class="form-control" id="inputPrice">
                                                <option>Cualquier precio</option>
                                                <option>Menos de $50</option>
                                                <option>Menos de $100</option>
                                                <option>Menos de $200</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-12 text-center">
                                            <button type="submit" class="btn btn-primary">Buscar</button>
                                        </div>
                                    </div>
                                </form>
                            {/* <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-globe fa-fw me-3"></i><span>International</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i><span>Users</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a> */}
                        </div>
                    </div>
                </nav>                
            </div>
        </>
    )
}
