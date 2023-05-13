import React from 'react'
import './CSS/style.css'
import { Link } from 'react-router-dom'
import logo from '.././assets/logoHeader.png'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
                <div className="container">
                    <a id='a' className="navbar-brand d-block d-lg-none" href="#">
                        <img src={logo} height="30px" />
                    </a>
                    <li className="nav-item d-none d-lg-block">
                        <a id='a' className="nav-link mx-2" href="#">
                            <img className="img-hover" src={logo} height="50px" />
                        </a></li>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="input-group rounded" style={{ width: '15vw', marginLeft: '4vw' }}>
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                        </div>
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a id='aXD' className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Offers</a>
                            </li>
                            <li className="nav-item">
                                <a id='aXD' className="nav-link mx-2 text-uppercase" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a id='aXD' className="nav-link mx-2 text-uppercase" href="#">Catalog</a>
                            </li>
                            <li className="nav-item">
                                <a id='aXD' className="nav-link mx-2 text-uppercase" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a id='aXD' className="nav-link mx-2 text-uppercase" href="#">About</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a id='aXD' className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-cart-shopping me-1"></i> Cart</a>
                            </li>
                            <li className="nav-item">
                                <a id='aXD' className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-circle-user me-1"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}
