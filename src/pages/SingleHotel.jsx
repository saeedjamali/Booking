import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Loader from './Loader';
import { useHotel } from '../component/context/HotelsProvider';



function SingleHotel() {

    const { id } = useParams();
    // const BASE_URL = "http://localhost:5000/hotels/" + id;
    const { currentHotel, isLoadingCurrentHotel, getHotel } = useHotel();


    useEffect(() => {getHotel(id)}, [id]);
    // if (currentHotel.length == 0) return <Loader />
    if (isLoadingCurrentHotel) return <Loader />
    return (
        <div className='w-full h-72 bg-slate-50 rounded-lg flex flex-col p-2 '>
            <span className='text-base font-bold'>{currentHotel?.name}</span>
            <span className='ml-1 mt-2'>{currentHotel?.number_of_reviews} review &bull;  {currentHotel?.smart_location}</span>
            <div className='w-full h-full flex-1 bg-green-400 rounded-lg mt-4'>
                <img src={currentHotel?.picture_url?.url} alt={currentHotel?.name} className='rounded-lg w-full h-full' />
            </div>
        </div>
    )
}

export default SingleHotel