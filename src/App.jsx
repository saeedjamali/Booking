import React from 'react'
import Header from './component/Header/Header'
import { Toaster } from 'react-hot-toast'
import LocationList from './component/Location/LocationList'



function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <LocationList />
    </div>
  )
}

export default App