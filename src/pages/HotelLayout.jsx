import React from 'react'
import { Outlet } from 'react-router'
import '../../public/customStyle.css'


function HotelLayout() {
    return (
        <div className='p-4 mt-16 '>
            <div className='grid grid-cols-3 h-[calc(100vh-6rem)]'>
                <div className='col-span-1 bg-green-300 overflow-y-scroll '>
                   <Outlet />
                </div>
                <div className='col-span-2 bg-purple-700 ' >
                    Map
                </div>
            </div>
        </div >
    )
}

export default HotelLayout