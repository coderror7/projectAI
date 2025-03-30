import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../screens/login'
import Register from '../screens/register'
import Home from '../screens/home'

function appRoutes() {
  return (
    <div>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<div><Home/></div>} />
                <Route path="/register" element={<div><Register/></div>} />
                <Route path="/login" element={<div><Login/></div>} />
            </Routes>

        </BrowserRouter>
    </div>
  )
}

export default appRoutes
