import React from 'react'
import './CSS/style.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-ligth fb">
                <div className="container-fluid">
                    <a className="navbar-brand">RestComfort</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'}>
                                    <h1 className="nav-link active" aria-current="page">Home</h1>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'}>
                                    <h1 className="nav-link">Sing In</h1>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/profile'}>
                                    <h1 className="nav-link">Profile</h1>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <h1 className="nav-link disabled">Contact us</h1>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <script src='./DatePicker.js'></script>
            </nav>
        </>
    )
}
