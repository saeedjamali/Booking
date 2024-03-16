import React from 'react'
import Header from './component/Header/Header'
import { Toaster } from 'react-hot-toast'
import LocationList from './component/Location/LocationList'
import { Route, Routes } from 'react-router'
import HotelsProvider from './component/context/HotelsProvider'
import BookmarkLayout from './component/Bookmark/BookmarkLayout'
import AddBookmark from './component/Bookmark/AddBookmark'
import BookmarkProvider from './component/context/BookmarkProvider'
import BookmarkList from './component/Bookmark/BookmarkList'
import SingleBookmark from './component/Bookmark/SingleBookmark'
import Login from './component/Login/Login'
import AuthProvider from './component/context/AuthProvider'
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute'
import SingleHotel from './component/Hotel/SingleHotel'
import Hotels from './component/Hotel/Hotels'
import HotelLayout from './component/Hotel/HotelLayout'




function App() {
  return (
    <div >
      <AuthProvider>
        <BookmarkProvider>
          <HotelsProvider>
            <Toaster />
            <Header />
            <Routes>
              <Route path='/' element={<LocationList />} />
              <Route path='/hotels' element={<HotelLayout />}>
                <Route index element={<Hotels />} />
                <Route path=":id" element={<SingleHotel />} />
              </Route>
              <Route path='/bookmarks' element={<ProtectedRoute>
                <BookmarkLayout />
              </ProtectedRoute>}>
                <Route index element={<BookmarkList />} />
                <Route path="add" element={<AddBookmark />} />
                <Route path=":id" element={<SingleBookmark />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </HotelsProvider>
        </BookmarkProvider>
      </AuthProvider>
    </div>
  )
}

export default App