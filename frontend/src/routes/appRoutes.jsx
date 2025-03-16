import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function appRoutes() {
  return (
    <div>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/register" element={<div>register</div>} />
                <Route path="/login" element={<div>login</div>} />
            </Routes>

        </BrowserRouter>
    </div>
  )
}

export default appRoutes
