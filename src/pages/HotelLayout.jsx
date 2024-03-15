import React from 'react'
import { Outlet } from 'react-router'
import '../../public/customStyle.css'
import Map from '../component/Map/Map'
import { useHotel } from '../component/context/HotelsProvider';


function HotelLayout() {
    const { data: hotels } = useHotel();
    return (
        <div className='p-4 mt-16 '>
            <div className='grid grid-cols-3 h-[calc(100vh-6rem)]'>
                <div className='col-span-1  overflow-y-scroll  p-2'>
                    <Outlet />
                </div>
                <div className='col-span-2 p-4 ' >
                    <Map markerLocation={hotels} />
                </div>
            </div>
        </div >
    )
}

export default HotelLayout