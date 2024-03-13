import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../component/hooks/useFetch';
import Loader from './Loader'
import { Link } from 'react-router-dom';
import { useHotel } from '../component/context/HotelsProvider';
import HotelItem from './HotelItem';

const BASE_URL = "http://localhost:5000/hotels";

function Hotels() {

    const { data, isLoading } = useHotel();
    if (isLoading) <Loader />
    return (
        <div>
            <h2>Search Result ({data.length})</h2>

            {
                data.map((hotel) => {
                    return (
                        <Link key={hotel.id} to={`/hotels/${hotel.id}?lat=${hotel.latitude}&lng=${hotel.longitude}&currentlocation=${true}`}><HotelItem hotel={hotel} />
                        </Link>
                    )
                }
                )
            }




        </div>
    )
}

export default Hotels