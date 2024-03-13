import React from 'react'
import Header from './component/Header/Header'
import { Toaster } from 'react-hot-toast'
import LocationList from './component/Location/LocationList'
import { Route, Routes } from 'react-router'
import HotelLayout from './pages/HotelLayout'
import Hotels from './pages/Hotels'
import HotelsProvider from './component/context/HotelsProvider'
import SingleHotel from './pages/SingleHotel'



function App() {
  return (
    <div >
      <HotelsProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path='/' element={<LocationList />} />
          <Route path='/hotels' element={<HotelLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
        </Routes>
      </HotelsProvider>
    </div>
  )
}

export default App