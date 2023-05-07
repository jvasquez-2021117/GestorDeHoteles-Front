import React from 'react'
import '../components/CSS/style.css'
import '../App.css'

export const UserProfilePage = () => {
    return (
        <>
            <div className="container t">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-auto mb-3 w1">
                        <h4>Historial</h4>
                        <h5 className='text-muted fst-italic'>LogOut</h5>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="e-profile">
                                            <div className="row">
                                                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                                    <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                        <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">Account settings</h4>
                                                    </div>
                                                    <div className="text-left">
                                                        <span className="pt-sm-2 pb-1 mb-0 text-nowrap">Delete account</span>
                                                    </div>
                                                </div>
                                                    <div className="text-left">
                                                        <span className="fw-light">Info personal</span>
                                                    </div>
                                            </div>
                                            <div className="tab-content pt-3">
                                                <div className="tab-pane active">
                                                    <form className="form" noValidate="">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label>Name</label>
                                                                        <input className="form-control" type="text" name="name" placeholder="John Smith" defaultValue="John" />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label>Surname</label>
                                                                        <input className="form-control" type="text" name="username" placeholder="johnny.s" defaultValue="Smith" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="row">
                                                            <div className="col d-flex justify-content-end">
                                                                <button className="btn btn-primary" type="submit">Update personal information</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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
