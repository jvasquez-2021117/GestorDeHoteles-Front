import React from 'react'
import './CSS/style.css'
import { Link } from 'react-router-dom'
import logo from '.././assets/logoHeader.png'

export const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
                <div class="container">
                    <a id='a' class="navbar-brand d-block d-lg-none" href="#">
                        <img src={logo} height="30px" />
                    </a>
                    <li class="nav-item d-none d-lg-block">
                        <a id='a' class="nav-link mx-2" href="#">
                            <img className="img-hover" src={logo} height="50px" />
                        </a></li>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                        <div class="input-group rounded" style={{ width: '15vw', marginLeft: '4vw' }}>
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                        </div>
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <a id='aXD' class="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Offers</a>
                            </li>
                            <li class="nav-item">
                                <a id='aXD' class="nav-link mx-2 text-uppercase" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a id='aXD' class="nav-link mx-2 text-uppercase" href="#">Catalog</a>
                            </li>
                            <li class="nav-item">
                                <a id='aXD' class="nav-link mx-2 text-uppercase" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a id='aXD' class="nav-link mx-2 text-uppercase" href="#">About</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <a id='aXD' class="nav-link mx-2 text-uppercase" href="#"><i class="fa-solid fa-cart-shopping me-1"></i> Cart</a>
                            </li>
                            <li class="nav-item">
                                <a id='aXD' class="nav-link mx-2 text-uppercase" href="#"><i class="fa-solid fa-circle-user me-1"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
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
