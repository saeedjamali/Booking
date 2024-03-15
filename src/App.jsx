import React from 'react'
import Header from './component/Header/Header'
import { Toaster } from 'react-hot-toast'
import LocationList from './component/Location/LocationList'
import { Route, Routes } from 'react-router'
import HotelLayout from './pages/HotelLayout'
import Hotels from './pages/Hotels'
import HotelsProvider from './component/context/HotelsProvider'
import SingleHotel from './pages/SingleHotel'
import BookmarkLayout from './component/Bookmark/BookmarkLayout'
import AddBookmark from './component/Bookmark/AddBookmark'
import BookmarkProvider from './component/context/BookmarkProvider'
import BookmarkList from './component/Bookmark/BookmarkList'
import SingleBookmark from './component/Bookmark/SingleBookmark'



function App() {
  return (
    <div >
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
            <Route path='/bookmarks' element={<BookmarkLayout />}>
              <Route index element={<BookmarkList />} />
              <Route path="add" element={<AddBookmark />} />
              <Route path=":id" element={<SingleBookmark /> } />
            </Route>
          </Routes>
        </HotelsProvider>
      </BookmarkProvider>
    </div>
  )
}

export default App