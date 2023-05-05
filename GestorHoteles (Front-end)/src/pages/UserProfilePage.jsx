import React from 'react'
import '../components/CSS/style.css'
import '../App.css'

export const UserProfilePage = () => {
    return (
        <>
            <div className="container t">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-auto mb-3 w1">
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="e-profile">
                                            <div className="row">
                                                <div className="col-12 col-sm-auto mb-3">
                                                    <div className="mx-auto w2" >
                                                        <div className="d-flex justify-content-center align-items-center rounded hb" >
                                                            <span className='cf'>140x140</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                                    <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                        <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                                                        {/* <p className="mb-0">@johnny.s</p>
                                                            <div className="text-muted"><small>Last seen 2 hours ago</small></div> */}
                                                        <div className="mt-2">
                                                            <button className="btn btn-primary" type="button">
                                                                <i className="fa fa-fw fa-camera"></i>
                                                                <span>Change Photo</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="text-center text-sm-right">
                                                        <span className="badge badge-secondary">administrator</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <ul className="nav nav-tabs">
                                                    <li className="nav-item"><a href="" className="active nav-link">Settings</a></li>
                                                </ul> */}
                                            <div className="tab-content pt-3">
                                                <div className="tab-pane active">
                                                    <form className="form" noValidate="">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="row">
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
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Email</label>
                                                                            <input className="form-control" type="text" placeholder="user@example.com" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row ">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Phone</label>
                                                                            <input className="form-control" type="text" name="name" placeholder="John Smith" defaultValue="+502 7832-1229" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 mb-3">
                                                                <div className="mb-2"><b>Change Password</b></div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Current Password</label>
                                                                            <input className="form-control" type="password" placeholder="••••••" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="row">
                                                                        <div className="col">
                                                                            <div className="form-group">
                                                                                <label>New Password</label>
                                                                                <input className="form-control" type="password" placeholder="••••••" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <div className="form-group">
                                                                                <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                                                                <input className="form-control" type="password" placeholder="••••••" /></div>
                                                                        </div>
                                                                    </div> */}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col d-flex justify-content-end">
                                                                <button className="btn btn-primary" type="submit">Save Changes</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 mb-3">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="px-xl-3">
                                            <button className="btn btn-block btn-secondary">
                                                <i className="fa fa-sign-out"></i>
                                                <span>Logout</span>
                                            </button>
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
