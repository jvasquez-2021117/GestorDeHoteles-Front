import React, { useContext } from 'react'
import '../components/CSS/style.css'
import '../App.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'

export const UserProfilePage = () => {

    const { dataUser } = useContext(AuthContext);
    
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
                                                                        <input className="form-control" type="text" name="name" defaultValue={dataUser.name}/>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label>Surname</label>
                                                                        <input className="form-control" type="text" name="username"  defaultValue={dataUser.surname} />
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
