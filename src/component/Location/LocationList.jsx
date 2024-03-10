import React, { useState } from 'react'
import LocationItem from './LocationItem';
import useFetch from '../hooks/useFetch'

function LocationList() {
    const URL = "http://localhost:5000/hotels";
    const { data, isLoading } = useFetch(URL, "");
    // const [locations, SetLocations] = useState([]);
    console.log(data);

     if (!isLoading)  (<p>Loading..</p>)
    return (
        <div className='p-4' >
            <h1 >NearBy Location</h1>
            <div className='grid grid-cols-4 mt-4 gap-4'>
                {data.map((hotel) => <LocationItem hotel={hotel} key={hotel.id} />
                )
                }
            </div>


        </div>
    )
}
export default LocationList