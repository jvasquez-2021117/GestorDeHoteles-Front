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
import { ViewTypeRoom } from './pages/ViewTypeRoom'
import { ViewTypeEvents } from './pages/ViewTypeEvents'
import { ViewEvent } from './pages/ViewEvent'
import { UpdateTypeRoom } from './components/Update/UpdateTypeRoom'
import { UpdateTypeEvent } from './components/Update/UpdateTypeEvent'
import { UpdateEvent } from './components/Update/UpdateEvent'

export const AuthContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [dataUser, setDataUser] = useState({
        id: '',
        name: '',
        surname: '',
        role: ''
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
                    path: '/optionAdmin',
                    element: <AddHotelPage></AddHotelPage>
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
                    path: '/profile',
                    element: <UserProfilePage />
                },
                {
                    path: '/reservation',
                    element: <ViewReservation />
                },
                {
                    path: '/viewTypeRoom',
                    element: <ViewTypeRoom></ViewTypeRoom>
                },
                {
                    path: '/viewEventType',
                    element: <ViewTypeEvents></ViewTypeEvents>
                },
                {
                    path: '/viewEvent',
                    element: <ViewEvent></ViewEvent>
                },
                {
                    path: '/updateTypeRoom/:id',
                    element: <UpdateTypeRoom></UpdateTypeRoom>
                },
                {
                    path: '/updateTypeEvent/:id',
                    element: <UpdateTypeEvent></UpdateTypeEvent>
                },
                {
                    path: '/updateEvent/:id',
                    element: <UpdateEvent></UpdateEvent>
                }
            ]
        },
    ])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }} >
            <RouterProvider router={routes} />
        </AuthContext.Provider >
    )
}