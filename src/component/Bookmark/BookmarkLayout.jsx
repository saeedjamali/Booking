import React from 'react'
import { Outlet } from 'react-router'
import Map from '../Map/Map'
import { useHotel } from '../context/HotelsProvider';
import { useBookmark } from '../context/BookmarkProvider';

function BookmarkLayout() {
    const { bookmarks } = useBookmark();
    console.log("Book:", bookmarks);
    return (
        <div>
            <div className='p-4 mt-16 '>
                <div className='grid grid-cols-3 h-[calc(100vh-6rem)]'>
                    <div className='col-span-1  overflow-y-scroll  p-2'>
                        <Outlet />

                        {/* <Outlet /> */}
                    </div>
                    <div className='col-span-2 p-4 ' >
                        <Map markerLocation={bookmarks} />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default BookmarkLayout