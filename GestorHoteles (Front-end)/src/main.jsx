import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { UserProfilePage } from './pages/UserProfilePage'
import { RecordPage } from './pages/RecordPage'
import { ViewUsersPage } from './pages/ViewUsersPage'
import { AddHotel } from './components/Add/AddHotel'


const userLogged = localStorage.getItem('userLogged');
const routes = createBrowserRouter([
  {
    path: '',
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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
