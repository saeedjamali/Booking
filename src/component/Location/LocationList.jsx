import React, { useState } from 'react'

import LocationItem from './LocationItem';
import useFetch from '../hooks/useFetch'






function LocationList() {
    const URL = "http://localhost:5000/hotels";
    const [data, isLoading] = useFetch("http://localhost:5000/hotels", "");
    const [locations, SetLocations] = useState([]);
    console.log(data);
    return (
        <div>
            <h2></h2>
            <div className='grid grid-cols-4 p-4 mt-2 gap-2'>
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />

            </div>
        </div>
    )
}
export default LocationList