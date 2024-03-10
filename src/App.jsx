import React from 'react'
import Header from './component/Header/Header'
import { Toaster } from 'react-hot-toast'
import LocationList from './component/Location/LocationList'
import { Route, Routes } from 'react-router'
import Hotel from './pages/Hotel'



function App() {
  return (
    <div>
      <Toaster />
      <Header />



      <Routes>
        <Route path='/' element={<LocationList />} />
        <Route path='/hotels' element={<Hotel />} />
      </Routes>
    </div>
  )
}

export default App