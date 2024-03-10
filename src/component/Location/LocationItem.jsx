import React from 'react'
import esp from "../../assets/img/esp.jpg";

function LocationItem({ hotel }) {
  return (
    <div className='col-span-4 md:col-span-2 lg:col-span-1 bg-stone-50 w-full rounded-lg'>
      <div >
        <img src={hotel.picture_url.url} alt='Loading...' className='rounded-t-lg w-full h-48 ' />
      </div>
      <div className='space-y-2 p-4'>
        <div>{hotel.host_location}</div>
        <span className='font-light text-gray-400 text-sm'>{hotel.name}</span>
        <div>
          <span>$ {hotel.price}</span>
          <span className='text-gray-500 font-serif'> night </span>
        </div>
      </div>

    </div>
  )
}

export default LocationItem