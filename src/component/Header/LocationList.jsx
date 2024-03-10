import React from 'react'
import useFetch from '../hooks/useFetch'

function LocationList() {
    const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
    return (
        <div>
            Hi
        </div>
    )
}

export default LocationList