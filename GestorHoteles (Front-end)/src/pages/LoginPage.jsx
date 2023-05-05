import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const LoginPage = () => {
    return (
        <>
            <div className="container t">
                <div className="row flez-lg-nowrap">
                    <div className="col-12 col-lg-auto mb-3 w1">
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="e-profile">
                                            <div className='col-md-5 offset-md-5'>
                                                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" role="tab"
                                                            aria-controls="pills-login" aria-selected="true">Login</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                                        <form>
                                                            <div className="text-center mb-3">
                                                                <p>Sign in with:</p>
                                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                                    </svg>
                                                                </button>
                                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <p className="text-center">or:</p>
                                                            <div className="form-floating">
                                                                <input type="email" id="loginName" className="form-control" placeholder='name@example.com' />
                                                                <label htmlFor="loginName">Email</label>
                                                            </div>
                                                            <br />
                                                            <div className="form-floating">
                                                                <input type="password" id="loginPassword" className="form-control" placeholder='password' />
                                                                <label htmlFor="loginPassword">Password</label>
                                                            </div>
                                                            <hr />
                                                            <div className="row mb-4">
                                                                <div className="col-md-6 d-flex justify-content-center">
                                                                    <div className="form-check mb-3 mb-md-0">
                                                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                                                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-center">
                                                                    <a href="#!">Forgot password?</a>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                                                            <Link to={'/'}>
                                                                <button type="submit" className="btn btn-danger btn-block mb-4 ">Cancel</button>
                                                            </Link>
                                                            <div className="text-center">
                                                                <p>Not a member?</p> <Link to={'/register'}> <h1 className="nav-link">Register</h1></Link>
                                                            </div>
                                                        </form>
                                                    </div>
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
