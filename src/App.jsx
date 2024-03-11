import React from 'react'
import Header from './component/Header/Header'
import { Toaster } from 'react-hot-toast'
import LocationList from './component/Location/LocationList'
import { Route, Routes } from 'react-router'
import Hotel from './pages/Hotel'
import HotelLayout from './pages/HotelLayout'
import Hotels from './pages/Hotels'



function App() {
  return (
    <div >
      <Toaster />
      <Header />



      <Routes>
        <Route path='/' element={<LocationList />} />
        <Route path='/hotels' element={<HotelLayout />}>
          <Route index element={<Hotels />} />
          <Route path=":id" element={<Hotel />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App