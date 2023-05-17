import React, { createContext } from 'react'
import { useContext, useState, useEffect } from 'react'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { UserProfilePage } from './pages/UserProfilePage'
import { RecordPage } from './pages/RecordPage'
import { ViewUsersPage } from './pages/ViewUsersPage'
import { MainPage } from './pages/MainPage'
import { AddHotelPage } from './pages/AddHotelPage'
import { ViewReservation } from "./pages/ViewReservation";
import { UpdateReservation } from './components/Update/UpdateReservation'
import { ViewHotels } from './pages/ViewHotels'
import { ViewRooms } from './pages/ViewRooms'
import { UpdateHotel } from './components/Update/UpdateHotel'
import { UpdateRoom } from './components/Update/UpdateRoom'

export const AuthContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [dataUser, setDataUser] = useState({
        name: '',
        surname: ''
    })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App></App>,
            errorElement: <NotFoundPage></NotFoundPage>,
            children: [
                {
                    path: '/',
                    element: <MainPage />
                },
                {
                    path: '/home',
                    element: <HomePage />
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                },
                {
                    path: '/register',
                    element: <RegisterPage></RegisterPage>
                },
                {
                    path: '/setting',
                    element: <UserProfilePage></UserProfilePage>
                },
                {
                    path: '/record',
                    element: <RecordPage />
                },
                {
                    path: '/users',
                    element: <ViewUsersPage />
                },
                {
                    path: '/addHotel',
                    element: <AddHotelPage />
                },
                {
                    path: '/reservation',
                    element: <ViewReservation />
                },
                {
                    path: 'reservation/update/:id',
                    element: <UpdateReservation />
                },
                {
                    path: 'viewHotels',
                    element: <ViewHotels/>
                },
                {
                    path: 'viewRooms',
                    element: <ViewRooms />
                },
                {
                    path: 'viewHotels/updateHotel/:id',
                    element: <UpdateHotel />
                },
                {
                    path: 'viewRooms/updateRoom/:id',
                    element: <UpdateRoom />
                }

            ]
        }
    ])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }} >
            <RouterProvider router={routes} />
        </AuthContext.Provider >
    )
}
