import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useFetch from '../component/hooks/useFetch';
import Loader from './Loader';

function SingleHotel() {

    const { id } = useParams();

    console.log("id: ", id);
    const { data, isLoading } = useFetch(`http://localhost:5000/hotels/${id}`, "");
    console.log("Hotel : ", data);

    if (data.length == 0) return <Loader />
    if (isLoading) return <Loader />
    return (
        <div className='w-full h-72 bg-slate-50 rounded-lg flex flex-col p-2 '>
            <span className='text-base font-bold'>{data.name}</span>
            <span className='ml-1 mt-2'>{data.number_of_reviews} review &bull;  {data.smart_location}</span>
            <div className='w-full h-full flex-1 bg-green-400 rounded-lg mt-4'>
                <img src={data?.picture_url.url} alt={data.name} className='rounded-lg w-full h-full' />
            </div>
        </div>
    )
}

export default SingleHotel