import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const LoginPage = () => {
    return (
        <>
            <div className="container t">
                <div className="card col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-5" style={{ margin: 'auto auto' }}>
                    <div className="card-body">
                        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form>
                                    <div class="text-center mb-3">
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
                                    <p class="text-center">or:</p>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="loginName">Email or username</label>
                                        <input type="email" id="loginName" class="form-control" />
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="loginPassword">Password</label>
                                        <input type="password" id="loginPassword" class="form-control" />
                                    </div>
                                    <div class="row mb-4">
                                        <div class="d-flex justify-content-center">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>                                
                                    <hr />
                                    <div className="row justify-content-center">
                                        <div className="col-md-3">
                                            <button type="submit" className="btn btn-primary btn-block mb-4" >Sign in </button>
                                        </div>
                                        <div className="col-md-2">
                                            <Link to={'/'}>
                                                <button type="submit" className="btn btn-danger btn-block mb-4 ">Cancel</button>
                                            </Link>
                                        </div>
                                    </div>                                    
                                    <div class="text-center">
                                        <p>Not a member? <Link to={'/register'}>Register</Link></p>
                                    </div>
                                </form>
                            </div>
                            {/* <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div class="text-center mb-3">
                            <p>Sign up with:</p>
                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-google"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>

                        <p class="text-center">or:</p>


                        <div class="form-outline mb-4">
                            <input type="text" id="registerName" class="form-control" />
                            <label class="form-label" for="registerName">Name</label>
                        </div>
                        
                        <div class="form-outline mb-4">
                            <input type="text" id="registerUsername" class="form-control" />
                            <label class="form-label" for="registerUsername">Username</label>
                        </div>


                        <div class="form-outline mb-4">
                            <input type="email" id="registerEmail" class="form-control" />
                            <label class="form-label" for="registerEmail">Email</label>
                        </div>


                        <div class="form-outline mb-4">
                            <input type="password" id="registerPassword" class="form-control" />
                            <label class="form-label" for="registerPassword">Password</label>
                        </div>


                        <div class="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" class="form-control" />
                            <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                        </div>


                        <div class="form-check d-flex justify-content-center mb-4">
                            <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                aria-describedby="registerCheckHelpText" />
                            <label class="form-check-label" for="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>


                        <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                    </form>
                </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <br />            
        </>
    )
}
