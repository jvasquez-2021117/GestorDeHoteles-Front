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
import { AddHotel } from './components/Add/AddHotel'

export const AutContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [dataUser, setDataUser] = useState({
        name: '',
        username: ''
    })

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App></App>,
            errorElement: <NotFoundPage></NotFoundPage>,
            children: [
                {
                    path: '/',
                    element: <HomePage></HomePage>
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
                    element: <AddHotel></AddHotel>
                }
            ]
        }
    ])

    return (
        <AutContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes} />
        </AutContext.Provider>
    )
}
