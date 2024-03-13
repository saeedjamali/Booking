import React from 'react'

function HotelItem({ hotel }) {
    return (
        <div className='w-full h-17 bg-stone-100 mt-2 p-2 flex justify-around items-center rounded-lg mr-4'>
            <div className=''>
                <img src={hotel.picture_url.url} alt={hotel.host_location} className='rounded-lg w-16 h-16 ' />
            </div>
            <div className='flex-1 ml-2'>
                <div className='text-sm'>{hotel.host_location.substring(0, 15) + '...'}</div>
                <span className='font-light text-gray-400 text-[10px]'>{hotel.name.substring(0, 15) + '...'}</span>
                <div className='text-[10px]'>
                    <span>$ {hotel.price}</span>
                    <span className='text-gray-500 font-serif'> night </span>
                </div>
            </div>

        </div>
    )
}

export default HotelItem