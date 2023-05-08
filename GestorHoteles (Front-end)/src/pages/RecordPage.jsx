import React from 'react'
import { Link } from 'react-router-dom'

export const RecordPage = () => {
    return (
        <>
            <div className="container t">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-auto mb-3 w1">
                        <Link to={'/setting'} className='nav-link'>
                            <h4>Settings</h4>
                        </Link>
                        <Link to={'/record'} className='nav-link'>
                            <h4>Historial</h4>
                        </Link>
                        <h5 className='text-muted fst-italic'>LogOut</h5>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">Hosting history</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
