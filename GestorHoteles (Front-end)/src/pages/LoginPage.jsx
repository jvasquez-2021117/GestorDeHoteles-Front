import axios from 'axios'
import React, { useState, useContext } from 'react'
import { AutContext } from '../Index'



export const LoginPage = () => {
    const { setLoggedIn, loggedIn, setDataUser } = useContext(AutContext);
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3200/user/login', form)
            if (data.token) {
                setLoggedIn(true)
                localStorage.setItem('token', data.token)
            }
        } catch (err) {
            console.log(err.response.data.message);
            console.log(err)
        }
    }

    return (
        <>
            <div className="container t">
                <div className="card" style={{ width: 'auto', margin: 'auto auto' }}>
                    {/* <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style="max-width:319px;"> */}
                    <div className="card-body">
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form>
                                    <div className="text-center mb-3">
                                        <p>Sign in with:</p>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google"></i>
                                        </button>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div>
                                    <p className="text-center">or:</p>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="loginName">Email or username</label>
                                        <input onChange={handleChange} id="loginName" name="email" className='form-control' type="email" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="loginPassword">Password</label>
                                        <input onChange={handleChange} id="loginPassword" name="password" className='form-control' type="password" />
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <div className="form-check mb-3 mb-md-0">
                                                <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                                                <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    <button onClick={(e) => login(e)} className="btn btn-primary btn-block mb-4">Sign in</button>
                                    <div className="text-center">
                                        <p>Not a member? <a href="#!">Register</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
